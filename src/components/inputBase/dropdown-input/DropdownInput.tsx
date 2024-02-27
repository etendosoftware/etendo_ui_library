import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Modal, TouchableOpacity, FlatList, ActivityIndicator, TextInput } from 'react-native';

import InputBase from '../InputBase';
import { styles } from './DropdownInput.styles';
import { IDropdownInput } from './DropdownInput.types';
import { CancelIcon } from '../../../assets/images/icons';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { NEUTRAL_600, PRIMARY_100 } from '../../../styles/colors';
import { DropdownArrowIcon } from '../../../assets/images/icons/DropdownArrowIcon';
import { DEBOUNCE_DELAY, OPTION_HEIGHT } from './DropdownInput.constants';
import { disableOutline } from '../../../helpers/table_utils';

const DropdownInput: React.FC<IDropdownInput> = ({
    onSelect,
    fetchData,
    displayKey,
    staticData = [],
    initialPage = 0,
    fetchDataBySearch,
    pageSize: size = 10,
    maxVisibleOptions = 5,
    noResultsText = 'No results',
    searchPlaceholder = 'Search',
    placeholder = 'Select an Option',
    ...inputBaseProps
}) => {
    /* References */
    const dropdownRef = useRef<any>(null);

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
                    style={[{ width: "100%" }, disableOutline()]}
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
                    style={{ height: getDropdownHeight(options.length, maxVisibleOptions) }}
                    data={options}
                    renderItem={({ item }) => renderDropdownOption(item)}
                    keyExtractor={(item, index) => `${item.value}-${index}`}
                    onEndReached={handleEndReached}
                    onEndReachedThreshold={0.75}
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
                <Text>{selectedOption}</Text>
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
    const loadOptions = async (reset: boolean = false) => {
        if (!hasMore && !reset) return;
        setLoading(true);

        let fetchedOptions: any = [];
        if ((fetchDataBySearch && searchQuery.length > 0) || reset || page === initialPage) {
            if (fetchDataBySearch && searchQuery.length > 0) {
                fetchedOptions = await fetchDataBySearch(searchQuery);
            } else if (fetchData) {
                fetchedOptions = await fetchData(page, size);
                if (fetchedOptions.length < size) {
                    setHasMore(false);
                }
            }
        }

        const combinedOptions = [...staticData, ...fetchedOptions.filter((option: any) => !staticData.map(o => JSON.stringify(o)).includes(JSON.stringify(option)))];

        let newOptions = searchQuery.length > 0 ? combinedOptions : [...options, ...combinedOptions.filter((option: any) => !options.map(o => JSON.stringify(o)).includes(JSON.stringify(option)))];
        if (selectedOption && searchQuery.length === 0 && !reset) {
            const selectedOptionIndex = newOptions.findIndex((option: any) => option[displayKey] === selectedOption);
            if (selectedOptionIndex !== -1) {
                const selectedOptionItem = newOptions.splice(selectedOptionIndex, 1)[0];
                newOptions = [selectedOptionItem, ...newOptions];
            }
        }

        setOptions(newOptions);
        setLoading(false);
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
        setDropdownVisible(false);
        setSelectedOption(option[displayKey]);
    };

    // Toggles the visibility of the dropdown. If opening, it resets the search query, page, options list, and hasMore state
    const toggleDropdown = () => {
        if (dropdownVisible) {
            setDropdownVisible(false)
        } else {
            setDropdownVisible(true);
            setOptions([]);
            setHasMore(true);
            setSearchQuery('');
            setPage(initialPage);
        }
    };

    // Handles changes to the search query by updating the searchQuery state, resetting the page, and indicating more items can be loaded
    const handleSearchQueryChange = async (text: string) => {
        setSearchQuery(text);
        setPage(initialPage);
        setHasMore(true);
    };

    // Handles the event when the end of the dropdown list is reached, increments the page if more items can be loaded
    const handleEndReached = () => {
        if (loading || !hasMore) return;
        setPage((prev: any) => prev + 1);
    };

    // Clears the search input, resets the page to the initial value, and sets hasMore to true to indicate more items can be loaded.
    const clearSearchInput = () => {
        setSearchQuery('');
        setPage(initialPage);
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
        if (searchQuery.length === 0) {
            loadOptions();
        } else if (dropdownVisible) {
            if (timerId) {
                clearTimeout(timerId);
            }
            const newTimerId: any = setTimeout(() => {
                loadOptions();
            }, DEBOUNCE_DELAY);
            setTimerId(newTimerId);
        }
    }, [dropdownVisible, searchQuery]);

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

    return (
        <View style={styles.wrapper} ref={dropdownRef}>
            <InputBase
                {...inputBaseProps}
                value={selectedOption}
                onChangeText={onSelect}
                rightButtons={[
                    <TouchableOpacity key="dropdownToggle" style={dropdownVisible && styles.iconOpen} onPress={(event) => { event.stopPropagation(); toggleDropdown(); }}>
                        <DropdownArrowIcon
                            style={styles.icon}
                            fill={PRIMARY_100}
                        />
                    </TouchableOpacity>
                ]}
                placeholder={placeholder}
                onPress={toggleDropdown}
            />
            {dropdownVisible && renderDropdownContent()}
        </View>
    );
};

export default DropdownInput;