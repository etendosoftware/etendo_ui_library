import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, TextInput, Dimensions } from 'react-native';

import InputBase from '../InputBase';
import { styles } from './DropdownInput.styles';
import { IDropdownInput } from './DropdownInput.types';
import { CancelIcon } from '../../../assets/images/icons';
import { OPTION_HEIGHT } from './DropdownInput.constants';
import { disableOutline } from '../../../helpers/table_utils';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { NEUTRAL_600, PRIMARY_100 } from '../../../styles/colors';
import { DropdownArrowIcon } from '../../../assets/images/icons/DropdownArrowIcon';

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

    /* States */
    const [page, setPage] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const [options, setOptions] = useState<Array<any>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [searchOptions, setSearchOptions] = useState<Array<any>>([]);
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);
    const [dropdownPosition, setDropdownPosition] = useState<'top' | 'bottom'>('bottom');

    /* UI Rendering Functions */
    // Renders a searchable input field with a clear button for the dropdown
    const renderSearchInput = (
        searchQuery: string,
        onChange: (text: string) => void,
        searchPlaceholder?: string
    ) => {
        return (
            <View style={[styles.searchInput, styles.searchInputWrapper]}>
                <TextInput
                    style={[styles.searchTextInput, disableOutline()]}
                    onChangeText={onChange}
                    value={searchQuery}
                    placeholder={searchPlaceholder}
                    placeholderTextColor={NEUTRAL_600}
                    underlineColorAndroid="transparent"
                />
                {searchQuery.length > 0 && (
                    <TouchableOpacity onPress={clearSearch} disabled={isDisabled}>
                        <CancelIcon fill={PRIMARY_100} style={[styles.cancelIcon, isDisabled ? { opacity: 0.5 } : { opacity: 1 }]} />
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
        const currentOptions = searchQuery.length > 0 ? searchOptions : options;
        const currentOptionsLength = currentOptions.length;

        return <View style={[styles.dropdown, dropdownStyle]}>
            {staticData?.length === 0 && fetchData?.search &&
                renderSearchInput(
                    searchQuery,
                    handleSearchQueryChange,
                    searchPlaceholder
                )}
            {loading ? (
                <ActivityIndicator size="small" color={PRIMARY_100} style={{ marginVertical: 4 }} />
            ) : searchQuery.length > 0 && searchOptions.length > 0 ?
                <FlatList
                    ref={flatListRef}
                    style={{ height: getDropdownHeight(currentOptionsLength, maxVisibleOptions) }}
                    data={searchOptions}
                    renderItem={({ item }) => renderDropdownOption(item)}
                    keyExtractor={(item, index) => `${item.value}-${index}`}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.75}
                    getItemLayout={(_, index) => (
                        { length: OPTION_HEIGHT, offset: OPTION_HEIGHT * index, index }
                    )}
                />
                : options.length > 0 ? (
                    <FlatList
                        ref={flatListRef}
                        style={{ height: getDropdownHeight(options.length, maxVisibleOptions) }}
                        data={options}
                        renderItem={({ item }) => renderDropdownOption(item)}
                        keyExtractor={(item, index) => `${item.value}-${index}`}
                        onEndReached={handleEndReached}
                        onEndReachedThreshold={0.75}
                        getItemLayout={(_, index) => (
                            { length: OPTION_HEIGHT, offset: OPTION_HEIGHT * index, index }
                        )}
                    />
                ) : (
                    <Text style={styles.noResultsText}>{noResultsText}</Text>
                )}
        </View>
    };

    // Renders the currently selected option with an option to deselect
    const renderSelectedOption = () => {
        if (!selectedOption) return null;

        return (
            <View style={styles.selectedOptionContainer}>
                <Text numberOfLines={1} ellipsizeMode="tail">{selectedOption}</Text>
                <TouchableOpacity onPress={deselectOption}>
                    <CancelIcon fill={NEUTRAL_600} style={styles.cancelIcon} />
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
        if (loading && !isNewSearch) return;

        if (isNewSearch) setLoading(true);

        const nextPage = isNewSearch ? 1 : page + 1;
        let fetchedOptions: any = [];

        try {
            if (searchQuery.trim() && fetchData?.search) {
                fetchedOptions = await fetchData?.search(searchQuery, nextPage, pageSize);
            } else if (fetchData?.normal) {
                fetchedOptions = await fetchData?.normal(nextPage, pageSize);
            }

            if (page === 0 && staticData.length > 0) {
                setOptions(prevOptions => isNewSearch ? [...staticData, ...fetchedOptions] : [...prevOptions, ...staticData, ...fetchedOptions]);
            } else {
                setOptions(prevOptions => isNewSearch ? fetchedOptions : [...prevOptions, ...fetchedOptions]);
            }

            setPage(nextPage);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    // Clears the search input and resets the search results
    const clearSearch = () => {
        setSearchQuery('');
        setSearchOptions([]);
    };

    // Function to calculate the position of the dropdown and adjust it if necessary
    const adjustDropdownPosition = useCallback(() => {
        if (dropdownRef.current) {
            dropdownRef.current.measure((x: number, y: number, width: number, height: number, px: number, py: number) => {
                const windowHeight = Dimensions.get('window').height;
                const dropdownHeight = getDropdownHeight(Math.min(options.length, maxVisibleOptions), OPTION_HEIGHT);
                const spaceBelow = windowHeight - (py + height);
                const spaceAbove = py;

                if (spaceAbove > dropdownHeight && spaceAbove > spaceBelow) {
                    setDropdownPosition('top');
                } else {
                    setDropdownPosition('bottom');
                }
            });
        }
    }, [options.length, maxVisibleOptions]);

    // Calculates the dropdown's height based on the number of options and the maximum number of visible options
    const getDropdownHeight = (optionsLength: number, maxVisibleOptions: number) => {
        const numberOfOptions = Math.min(optionsLength, maxVisibleOptions);
        return numberOfOptions * OPTION_HEIGHT;
    };

    // Deselects the currently selected option and triggers the onSelect callback with an empty value
    const deselectOption = () => {
        setSelectedOption('');
        onSelect?.('');
    };

    // Handles the selection of an option, updates the selectedOption state, hides the dropdown, and triggers the onSelect callback
    const handleSelect = (option: any) => {
        onSelect?.(option);
        setSearchQuery('');
        setDropdownVisible(false);
        setSelectedOption(option[displayKey]);
    };

    // Scrolls to the selected option in the dropdown if it exists
    const scrollToSelectedOption = () => {
        const selectedIndex = options.findIndex(option => option[displayKey] === selectedOption);
        if (selectedIndex >= 0) {
            flatListRef.current?.scrollToIndex({
                animated: false,
                index: selectedIndex,
            });
        }
    };

    // Toggles the visibility of the dropdown. If opening, it resets the search query, page, options list, and hasMore state
    const toggleDropdown = () => {
        setDropdownVisible(prev => !prev);

        if (!dropdownVisible && options.length === 0) {
            setLoading(true);
            loadOptions(true);
        }
    };

    const additionalSpace: number = title ? 64 : 68;
    const dropdownStyle: any = dropdownPosition === 'top' && {
        top: `-${OPTION_HEIGHT * maxVisibleOptions + additionalSpace}px`,
    }

    // Handles changes to the search query by updating the searchQuery state
    const handleSearchQueryChange = (text: string) => {
        setSearchQuery(text);

        if (text.trim() === '') {
            setSearchOptions([]);
        } else {
            setLoading(true);
            fetchData?.search?.(text, 1, pageSize)
                .then((fetchedOptions: any) => {
                    setSearchOptions(fetchedOptions || []);
                    setLoading(false);
                })
                .catch((error: any) => {
                    console.error(error);
                    setSearchOptions([]);
                    setLoading(false);
                });
        }
    };

    // Handles the event when the end of the dropdown list is reached, increments the page if more items can be loaded
    const handleEndReached = () => {
        loadOptions();
    };

    // Function to close the dropdown if the click was outside
    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && dropdownRef.current && !dropdownRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    /* Side Effects */
    // Effect to close the dropdown when clicking outside the component if it is open
    useEffect(() => {
        adjustDropdownPosition();
        if (isWebPlatform()) {
            if (dropdownVisible) {
                document.addEventListener("mousedown", handleClickOutside);
            }

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [dropdownVisible]);


    // Adjust the position every time the dropdown becomes visible
    useEffect(() => {
        if (dropdownVisible && selectedOption) {
            scrollToSelectedOption();
        }
    }, [selectedOption, dropdownVisible]);

    // Initial loading of options when opening the dropdown or changing the search term
    useEffect(() => {
        if (dropdownVisible && (searchQuery.length > 0 || options.length === 0)) {
            loadOptions();
        }
    }, [dropdownVisible, searchQuery]);

    return (
        <View style={styles.wrapper} ref={dropdownRef}>
            <InputBase
                {...inputBaseProps}
                value={selectedOption}
                onChangeText={onSelect}
                isDisabled={isDisabled}
                rightButtons={[
                    <TouchableOpacity disabled={isDisabled} key="dropdownToggle" style={dropdownVisible && styles.iconOpen} onPress={(event) => { event.stopPropagation(); toggleDropdown(); }}>
                        <DropdownArrowIcon style={[styles.icon, isDisabled ? { opacity: 0.5 } : { opacity: 1 }]} fill={PRIMARY_100} />
                    </TouchableOpacity>
                ]}
                placeholder={placeholder}
                onPress={toggleDropdown}
                title={title}
                helperText={helperText}
            />
            {dropdownVisible && renderDropdownContent()}
        </View>
    );
};

export default DropdownInput;