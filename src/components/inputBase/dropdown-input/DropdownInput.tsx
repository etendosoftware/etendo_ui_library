import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, TextInput } from 'react-native';

import InputBase from '../InputBase';
import { styles } from './DropdownInput.styles';
import { IDropdownInput } from './DropdownInput.types';
import { CancelIcon } from '../../../assets/images/icons';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { NEUTRAL_600, PRIMARY_100 } from '../../../styles/colors';
import { DropdownArrowIcon } from '../../../assets/images/icons/DropdownArrowIcon';
import { DEBOUNCE_DELAY, INITIAL_PAGE, OPTION_HEIGHT } from './DropdownInput.constants';
import { disableOutline } from '../../../helpers/table_utils';

const DropdownInput: React.FC<IDropdownInput> = ({
    title,
    onSelect,
    fetchData,
    displayKey,
    staticData = [],
    fetchDataBySearch,
    isDisabled = false,
    pageSize = 10,
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
    const [hasMore, setHasMore] = useState<boolean>(true);
    const [loading, setLoading] = useState<boolean>(false);
    const [options, setOptions] = useState<Array<any>>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [timerId, setTimerId] = useState<number | null>(null);
    const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

    /* UI Rendering Functions */
    // Renders a searchable input field with a clear button for the dropdown
    const renderSearchInput = (
        searchQuery: string,
        onChange: (text: string) => void,
        clearSearchInput: () => void,
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
                    <TouchableOpacity onPress={clearSearchInput}>
                        <CancelIcon fill={PRIMARY_100} style={styles.cancelIcon} />
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
    const renderDropdownContent = () => (
        <View style={styles.dropdown}>
            {fetchDataBySearch &&
                renderSearchInput(
                    searchQuery,
                    handleSearchQueryChange,
                    clearSearchInput,
                    searchPlaceholder
                )}
            {loading ? (
                <ActivityIndicator size="small" color={PRIMARY_100} style={{ marginVertical: 4 }} />
            ) : options.length > 0 ? (
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
    );

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
    const loadOptions = async (reset = false) => {
        if (!hasMore && !reset) return;
        setLoading(true);

        try {
            let fetchedOptions: any = [];
            if ((fetchDataBySearch && searchQuery.length > 0) || reset || page === INITIAL_PAGE) {
                if (fetchDataBySearch && searchQuery.length > 0) {
                    fetchedOptions = await fetchDataBySearch(searchQuery);
                } else if (fetchData) {
                    fetchedOptions = await fetchData(page, pageSize);
                    if (fetchedOptions.length < pageSize) {
                        setHasMore(false);
                    }
                }
            }

            setOptions(fetchedOptions);
        } catch (error) {
            console.error(error);
            setHasMore(false);
        } finally {
            setLoading(false);
        }
    };

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
        if (selectedOption && options.length > 0) {
            const selectedIndex = options.findIndex(option => option[displayKey] === selectedOption);
            if (selectedIndex >= 0) {
                flatListRef.current?.scrollToIndex({
                    animated: false,
                    index: selectedIndex,
                });
            }
        }
    };

    // Toggles the visibility of the dropdown. If opening, it resets the search query, page, options list, and hasMore state
    const toggleDropdown = () => {
        if (!dropdownVisible || selectedOption) {
            if (options.length === 0 || selectedOption) {
                loadOptions(true);
            }
            setDropdownVisible(true);
        } else {
            setDropdownVisible(false);
        }
    };

    // Handles changes to the search query by updating the searchQuery state, resetting the page, and indicating more items can be loaded
    const handleSearchQueryChange = async (text: string) => {
        setSearchQuery(text);
        setPage(INITIAL_PAGE);
        setHasMore(true);
    };

    // Handles the event when the end of the dropdown list is reached, increments the page if more items can be loaded
    const handleEndReached = () => {
        if (loading || !hasMore) return;
        setPage(prevPage => prevPage + 1);
    };

    // Clears the search input, resets the page to the initial value, and sets hasMore to true to indicate more items can be loaded.
    const clearSearchInput = () => {
        setSearchQuery('');
        setPage(INITIAL_PAGE);
        setHasMore(true);
    };

    // Function to close the dropdown if the click was outside
    const handleClickOutside = (event: any) => {
        if (dropdownRef.current && dropdownRef.current && !dropdownRef.current.contains(event.target) && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
        }
    };

    /* Side Effects */
    // Clears the timer when the component is unmounted to prevent memory leaks
    useEffect(() => {
        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, []);

    // Triggers loading of options based on the search query or dropdown visibility
    useEffect(() => {
        if (options.length > 0 && searchQuery.length === 0) {
            return;
        }
    }, [dropdownVisible, searchQuery, options.length]);

    useEffect(() => {
        if (searchQuery.length > 0) {
            if (timerId) clearTimeout(timerId);
            const newTimerId: any = setTimeout(() => {
                loadOptions(true);
            }, DEBOUNCE_DELAY);
            setTimerId(newTimerId);
        } else if (searchQuery.length === 0) {
            loadOptions(false);
        }
    }, [searchQuery]);

    // Effect to close the dropdown when clicking outside the component if it is open
    useEffect(() => {
        if (isWebPlatform()) {
            if (dropdownVisible) {
                document.addEventListener("mousedown", handleClickOutside);
            }

            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [dropdownVisible]);

    // Scrolls to the selected option in the dropdown if one is selected and options are available
    useEffect(() => {
        if (dropdownVisible && options.length > 0 && !loading) {
            setTimeout(() => {
                scrollToSelectedOption();
            }, 0);
        }
    }, [dropdownVisible, options.length, selectedOption, loading]);

    return (
        <View style={styles.wrapper} ref={dropdownRef}>
            <InputBase
                {...inputBaseProps}
                value={selectedOption}
                onChangeText={onSelect}
                rightButtons={[
                    <TouchableOpacity disabled={isDisabled} key="dropdownToggle" style={dropdownVisible && styles.iconOpen} onPress={(event) => { event.stopPropagation(); toggleDropdown(); }}>
                        <DropdownArrowIcon
                            style={styles.icon}
                            fill={PRIMARY_100}
                        />
                    </TouchableOpacity>
                ]}
                placeholder={placeholder}
                onPress={toggleDropdown}
                title={title}
            />
            {dropdownVisible && renderDropdownContent()}
        </View>
    );
};

export default DropdownInput;