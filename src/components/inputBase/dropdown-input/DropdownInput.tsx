import React, { useState, useRef } from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    FlatList,
    TextInput,
} from 'react-native';
import { IDropdownInput } from './DropdownInput.types';
import InputBase from '../InputBase';
import { DropdownArrowIcon } from '../../../assets/images/icons/DropdownArrowIcon';
import { NEUTRAL_600, PRIMARY_100 } from '../../../styles/colors';
import { styles } from './DropdownInput.styles';
import { disableOutline } from '../../../helpers/table_utils';

const DropdownInput: React.FC<IDropdownInput> = ({
    options,
    onSelect,
    selectedOption,
    renderOption,
    placeholder = 'Select an Option',
    searchPlaceholder = 'Search',
    enableSearch = false,
    displayKey,
    ...inputBaseProps
}) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const filteredOptions = options.filter(option =>
        option[displayKey]?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
        if (dropdownVisible) {
            setSearchQuery('');
        }
    };

    const dropdownRef = useRef(null);

    const handleSelect = (option: any) => {
        onSelect?.(option[displayKey]);
        setDropdownVisible(false);
    };

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

    const renderSearchInput = (searchQuery: string, onChange: (text: string) => void) => {
        return (
            <TextInput
                style={[styles.searchInput, disableOutline()]}
                onChangeText={onChange}
                value={searchQuery}
                placeholder={searchPlaceholder}
                placeholderTextColor={NEUTRAL_600}
                underlineColorAndroid="transparent"
            />
        );
    };

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
                {renderOption ? renderOption(option) : renderHighlightedText(option[displayKey], searchQuery)}
            </TouchableOpacity>
        );
    };

    const selectedLabel = options.find(option => option.value === selectedOption)?.label;

    return (
        <View style={styles.wrapper}>
            <InputBase
                {...inputBaseProps}
                value={selectedLabel}
                onChangeText={onSelect}
                rightButtons={[
                    <TouchableOpacity style={dropdownVisible ? styles.iconOpen : null} onPress={toggleDropdown}>
                        <DropdownArrowIcon
                            style={styles.icon}
                            fill={PRIMARY_100}
                        />
                    </TouchableOpacity>
                ]}
                placeholder={placeholder}
                onPress={toggleDropdown}
            />
            {dropdownVisible && (
                <View style={styles.dropdown} ref={dropdownRef}>
                    {enableSearch && renderSearchInput(searchQuery, setSearchQuery)}
                    <FlatList
                        data={filteredOptions}
                        renderItem={({ item }) => renderDropdownOption(item)}
                        keyExtractor={(item) => item.value}
                    />
                </View>
            )}
        </View>
    );
};

export default DropdownInput;