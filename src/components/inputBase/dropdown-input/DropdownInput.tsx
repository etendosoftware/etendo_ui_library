import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, TextInput, Dimensions, Modal } from 'react-native';

import InputBase from '../InputBase';
import { styles } from './DropdownInput.styles';
import { IDropdownInput } from './DropdownInput.types';
import { OPTION_HEIGHT } from './DropdownInput.constants';
import { disableOutline } from '../../../helpers/table_utils';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { NEUTRAL_600, PRIMARY_100 } from '../../../styles/colors';
import { DropdownArrowIcon } from '../../../assets/images/icons/DropdownArrowIcon';
import { XIcon } from '../../../assets/images/icons';

const DropdownInput: React.FC<IDropdownInput> = ({
  title,
  onSelect,
  fetchData,
  displayKey,
  pageSize = 10,
  staticData = [],
  helperText = '',
  isDisabled = false,
  maxVisibleOptions = 5,
  noResultsText = 'No results',
  searchPlaceholder = 'Search',
  placeholder = 'Select an Option',
  ...inputBaseProps
}) => {
  /* References */
  const dropdownRef = useRef<any>(null);
  const flatListRef = useRef<any>(null);
  const searchInputRef = useRef<any>(null);
  const inputContainerRef = useRef<any>(null);

  /* States */
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [options, setOptions] = useState<Array<any>>([]);
  const [loadedPages, setLoadedPages] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const [isDropdownUp, setIsDropdownUp] = useState<boolean>(false);
  const [searchOptions, setSearchOptions] = useState<Array<any>>([]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [inputPosition, setInputPosition] = useState({ x: 0, y: 0, width: 0 });
  const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  /* UI Rendering Functions */
  // Renders a searchable input field with a clear button for the dropdown
  const renderSearchInput = (
    searchQuery: string,
    onChange: (text: string) => void,
    searchPlaceholder?: string
  ) => {
    return (
      <View ref={searchInputRef} style={[styles.searchInput, styles.searchInputWrapper]}>
        <TextInput
          style={[styles.searchTextInput, disableOutline()]}
          onChangeText={onChange}
          value={searchQuery}
          placeholder={searchPlaceholder}
          placeholderTextColor={NEUTRAL_600}
          underlineColorAndroid="transparent"
          onTouchStart={(event) => event.stopPropagation()}
        />
        {searchQuery?.length > 0 && (
          <TouchableOpacity onPress={(event) => { event.stopPropagation(); clearSearch(); }} disabled={isDisabled}>
            <XIcon fill={PRIMARY_100} width={20} height={20} style={[styles.cancelIcon, isDisabled ? { opacity: 0.5 } : { opacity: 1 }]} />
          </TouchableOpacity>
        )}
      </View>
    );
  };

  // Renders text with certain parts highlighted based on the search query
  const renderHighlightedText = (fullText: string, highlightText: string) => {
    if (!highlightText.trim()) {
      return <Text style={styles.optionText}>{fullText}</Text>;
    }

    const parts = fullText.split(new RegExp(`(${highlightText})`, 'gi'));
    return (
      <Text style={styles.optionText}>
        {parts.map((part, index) =>
          part.toLowerCase() === highlightText.toLowerCase() ? (
            <Text key={index} style={styles.highlightedText}>{part}</Text>
          ) : (
            part
          )
        )}
      </Text>
    );
  };

  // Renders the dropdown's main content, including search input, loading indicator, and options list
  const renderDropdownContent = () => {
    const currentOptions = searchQuery?.length > 0 ? searchOptions : options;
    const currentOptionsLength = currentOptions?.length;
    const containerHeight = OPTION_HEIGHT * maxVisibleOptions;

    return (
      <Modal transparent={true} animationType="fade" visible={dropdownVisible} onRequestClose={toggleDropdown}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={(event) => {
            const isSearchArea = isWebPlatform() && !!searchInputRef.current && searchInputRef?.current?.contains(event.target);
            const isDropdownArea = isWebPlatform() && !!dropdownRef.current && dropdownRef?.current?.contains(event.target);
            if (!isWebPlatform()) {
              setDropdownVisible(false);
            }
            if (isWebPlatform() && (!isSearchArea && !isDropdownArea)) {
              setDropdownVisible(false);
            }
          }}
          activeOpacity={1}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={[{ position: 'absolute', top: inputPosition.y, left: inputPosition.x, width: inputPosition.width, backgroundColor: 'white', borderRadius: 8, overflow: 'hidden' }, styles.dropdown]} onStartShouldSetResponder={() => true}>
              {staticData?.length === 0 && fetchData?.search &&
                renderSearchInput(
                  searchQuery,
                  handleSearchQueryChange,
                  searchPlaceholder
                )}
              {loading ? (
                <View style={{ height: isDropdownUp ? containerHeight : 'auto' }}>
                  <ActivityIndicator size="small" color={PRIMARY_100} style={{ marginVertical: 4 }} />
                </View>
              ) : currentOptionsLength > 0 ? (
                <FlatList
                  ref={flatListRef}
                  style={{ height: isDropdownUp ? containerHeight : getDropdownHeight(currentOptionsLength, maxVisibleOptions) }}
                  data={currentOptions}
                  renderItem={({ item }) => renderDropdownOption(item)}
                  keyExtractor={(item, index) => `${item.value}-${index}`}
                  onEndReached={handleEndReached}
                  getItemLayout={(_, index) => (
                    { length: OPTION_HEIGHT, offset: OPTION_HEIGHT * index, index }
                  )}
                  ListFooterComponent={renderFooter}
                />
              ) : (
                <View style={{ height: isDropdownUp ? containerHeight : 'auto' }}>
                  <Text style={styles.noResultsText}>{noResultsText}</Text>
                </View>
              )}
            </View>
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  // Renders the currently selected option with an option to deselect
  const renderSelectedOption = () => {
    if (!selectedOption) return null;

    return (
      <View style={styles.selectedOptionContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail">{selectedOption}</Text>
        <TouchableOpacity onPress={deselectOption}>
          <XIcon fill={NEUTRAL_600} width={20} height={20} style={[styles.cancelIcon, isDisabled ? { opacity: 0.5 } : { opacity: 1 }]} />
        </TouchableOpacity>
      </View>
    );
  };

  // Renders each dropdown option, highlighting the selected one
  const renderDropdownOption = (option: any) => {
    const isSelected = option[displayKey] === selectedOption;
    return (
      <TouchableOpacity
        onPress={() => handleSelect(option)}
        style={[
          styles.option,
          isSelected ? styles.selectedOption : null,
        ]}
      >
        <Text>{isSelected ? renderSelectedOption && renderSelectedOption() : renderHighlightedText && renderHighlightedText(option[displayKey], searchQuery)}</Text>
      </TouchableOpacity>
    );
  };

  /* Functions */
  // Loads options for the dropdown menu. It fetches data based on the current search query or pagination
  const loadOptions = async (isNewSearch = false) => {
    if (loading || loadingMore) return;

    const currentPage = isNewSearch ? 1 : page + 1;

    if (!isNewSearch && loadedPages.has(currentPage)) {
      return;
    }

    if (isNewSearch) {
      setLoading(true);
      setHasMore(true);
      setPage(1);
      setOptions(staticData);
      setLoadedPages(new Set([1]));
    } else {
      setLoadingMore(true);
      setPage(currentPage);
      setLoadedPages(new Set(loadedPages).add(currentPage));
    }

    try {
      let fetchedOptions = [];
      if (searchQuery?.trim().length > 0 && fetchData?.search) {
        fetchedOptions = await fetchData.search(searchQuery, currentPage, pageSize);
      } else if (fetchData?.normal) {
        fetchedOptions = await fetchData.normal(currentPage, pageSize);
      }

      let newOptions: any[] = isNewSearch ? [...fetchedOptions] : [...options, ...fetchedOptions];
      if (staticData?.length) {
        newOptions = staticData;
      }
      setOptions(newOptions);
      setHasMore(fetchedOptions.length === pageSize);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  // Function measures the position and size of the input container
  const measureInputPosition = () => {
    inputContainerRef.current.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
      setInputPosition({ x: pageX, y: pageY + height, width });
    });
  };

  // Footer when looking for more options
  const renderFooter = () => {
    if (!loadingMore) return null;

    return (
      <ActivityIndicator size="small" color={PRIMARY_100} style={{ marginVertical: 4 }} />
    );
  };

  // Clears the search input and resets the search results
  const clearSearch = () => {
    setSearchQuery('');
    setSearchOptions([]);
    setLoadingMore(false);
    setHasMore(true);
  };

  // Function to calculate the position of the dropdown and adjust it if necessary
  const adjustDropdownPosition = useCallback(() => {
    inputContainerRef.current.measure((x: number, y: number, width: number, height: number, pageX: number, pageY: number) => {
      const windowHeight = Dimensions.get('window').height;
      const spaceBelow = windowHeight - pageY - height;
      const dropdownHeight = getDropdownHeight(options.length, maxVisibleOptions);
      const isDropdownUp = dropdownHeight > spaceBelow;
      const extraOffsetTop = title ? -4 : -28;
      const extraOffsetBottom = helperText ? -22 : 0;

      if (isDropdownUp) {
        setInputPosition({ x: pageX, y: pageY - dropdownHeight - OPTION_HEIGHT + extraOffsetTop, width });
        setIsDropdownUp(true);
      } else {
        setInputPosition({ x: pageX, y: pageY + height + extraOffsetBottom, width });
        setIsDropdownUp(false);
      }
    });
  }, [options.length, maxVisibleOptions, title, dropdownVisible]);

  // Calculates the dropdown's height based on the number of options and the maximum number of visible options
  const getDropdownHeight = (optionsLength: number, maxVisibleOptions: number, isDropdownUp: boolean = false) => {
    if (isDropdownUp) {
      return maxVisibleOptions * OPTION_HEIGHT;
    } else {
      const numberOfOptions = Math.min(optionsLength, maxVisibleOptions);
      return numberOfOptions * OPTION_HEIGHT;
    }
  };

  // Deselects the currently selected option and triggers the onSelect callback with an empty value
  const deselectOption = () => {
    setSelectedOption('');
    onSelect?.('');
  };

  // Handles the selection of an option, updates the selectedOption state, hides the dropdown, and triggers the onSelect callback
  const handleSelect = (option: any) => {
    onSelect?.(option)
    setSearchQuery('');
    setDropdownVisible(false);
    setSelectedOption(option[displayKey]);
    setHasMore(true);
  };

  // Scrolls to the selected option in the dropdown if it exists
  const scrollToSelectedOption = useCallback(() => {
    if (selectedOption !== undefined) {
      const selectedIndex = options.findIndex(option => option[displayKey] === selectedOption);
      if (selectedIndex >= 0 && flatListRef.current) {
        flatListRef.current.scrollToIndex({
          animated: false,
          index: selectedIndex,
        });
      }
    }
  }, [selectedOption, options, displayKey]);

  // Toggles the visibility of the dropdown. If opening, it resets the search query, page, options list, and hasMore state
  const toggleDropdown = () => {
    setDropdownVisible(prev => !prev);

    if (!dropdownVisible && options.length === 0) {
      setLoading(true);
      loadOptions(true);
    }
  };

  // Handles changes to the search query by updating the searchQuery state
  const handleSearchQueryChange = (text: string) => {
    setSearchQuery(text);

    if (text.trim() === '') {
      setSearchOptions([]);
      setHasMore(true);
      setPage(1);
    } else {
      setLoading(true);
      fetchData?.search?.(text, 1, pageSize)
        .then((fetchedOptions: any) => {
          const uniqueOptions = filterDuplicateOptions(fetchedOptions);
          setSearchOptions(uniqueOptions);
          setHasMore(uniqueOptions.length === pageSize);
          setPage(1);
          setLoading(false);
        })
        .catch((error: any) => {
          console.error(error);
          setSearchOptions([]);
          setLoading(false);
        });
    }
  };

  // Filter repeated options
  const filterDuplicateOptions = (fetchedOptions: any) => {
    const unique = new Map();
    fetchedOptions.forEach((option: any) => {
      if (!unique.has(option[displayKey])) {
        unique.set(option[displayKey], option);
      }
    });
    return Array.from(unique.values());
  };

  // Handles the event when the end of the dropdown list is reached, increments the page if more items can be loaded
  const handleEndReached = () => {
    if (hasMore && !loading && !loadingMore) {
      loadOptions();
    }
  };

  /* Side Effects */
  // Effect to close the dropdown when clicking outside the component if it is open
  useEffect(() => {
    const handleScroll = () => {
      if (dropdownVisible) {
        measureInputPosition();
      }
    };

    if (isWebPlatform()) {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [dropdownVisible]);

  // Adjust the position every time the dropdown becomes visible
  useEffect(() => {
    if (dropdownVisible && options.length > 0) {
      const timer = setTimeout(() => {
        scrollToSelectedOption();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [dropdownVisible, selectedOption]);

  useEffect(() => {
    measureInputPosition();
  }, [dropdownVisible]);

  useEffect(() => {
    if (options.length > 0) {
      adjustDropdownPosition();
    }
  }, [options, adjustDropdownPosition]);

  return (
    <View style={styles.wrapper} ref={dropdownRef}>
      <View ref={inputContainerRef}>
        <InputBase
          {...inputBaseProps}
          value={selectedOption}
          onChangeText={onSelect}
          isDisabled={isDisabled}
          rightButtons={[
            <TouchableOpacity disabled={isDisabled} key="dropdownToggle" style={[dropdownVisible && styles.iconOpen, { paddingHorizontal: 8 }]} onPress={(event) => { event.stopPropagation(); toggleDropdown(); }}>
              <DropdownArrowIcon style={[styles.icon, isDisabled ? { opacity: 0.5 } : { opacity: 1 }]} fill={PRIMARY_100} />
            </TouchableOpacity>
          ]}
          placeholder={placeholder}
          onPress={toggleDropdown}
          title={title}
          helperText={helperText}
        />
      </View>
      {dropdownVisible && renderDropdownContent()}
    </View>
  );
};

export default DropdownInput;