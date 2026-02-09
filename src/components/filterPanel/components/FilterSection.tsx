import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import { FilterSectionProps, FilterOption } from '../FilterPanel.types';
import { styles } from '../FilterPanel.styles';
import { ChevronDownIcon, ChevronUpIcon } from '../../../assets/images/icons';
import { PRIMARY_100, NEUTRAL_600, NEUTRAL_10 } from '../../../styles/colors';
import FilterOptionComponent from './FilterOption';
import Input from '../../input/Input';
import SkeletonItem from '../../secondaryComponents/SkeletonItem';
import { useDebounce } from '../../../hooks/useDebounce';

/**
 * FilterSection - An accordion section that expands to show filter options.
 * Only one section can be expanded at a time (controlled by parent).
 */
const FilterSection: React.FC<FilterSectionProps> = ({
  section,
  selectedValues,
  isExpanded,
  onToggle,
  noResultsMessage,
  onSelect,
}) => {
  const [searchText, setSearchText] = useState('');
  const [options, setOptions] = useState<FilterOption[]>(section.options);
  const [isLoading, setIsLoading] = useState(false);
  const hasLoadedRef = React.useRef(false);

  const selectedCount = selectedValues.length;
  const hasSelections = selectedCount > 0;

  // Handle dynamic fetching or local filtering
  const performSearch = useCallback(async (text: string) => {
    if (section.onFetchData) {
      setIsLoading(true);
      try {
        const fetchedOptions = await section.onFetchData(text);
        setOptions(fetchedOptions);
        hasLoadedRef.current = true;
      } catch (error) {
        console.error('Error fetching filter options:', error);
      } finally {
        setIsLoading(false);
      }
    } else {
      // Local filtering
      const filtered = section.options.filter(opt => 
        opt.label.toLowerCase().includes(text.toLowerCase())
      );
      setOptions(filtered);
    }
  }, [section]);

  const debouncedSearch = useDebounce(performSearch, 400);

  const handleSearch = useCallback((text: string) => {
    setSearchText(text);
    if (section.onFetchData) {
      debouncedSearch(text);
    } else {
      performSearch(text);
    }
  }, [debouncedSearch, performSearch, section.onFetchData]);

  // Trigger initial fetch when expanded if dynamic
  useEffect(() => {
    if (isExpanded && section.onFetchData && !hasLoadedRef.current) {
      performSearch('');
    }
  }, [isExpanded, section.onFetchData, performSearch]);

  // Reset options when initial options change (only for static)
  useEffect(() => {
    if (!searchText && !section.onFetchData) {
      setOptions(section.options);
    }
  }, [section.options, searchText, section.onFetchData]);

  return (
    <View style={styles.section}>
      <Pressable
        onPress={onToggle}
        style={({ pressed }) => [
          styles.sectionHeader,
          pressed && styles.sectionHeaderPressed,
        ]}
        accessibilityState={{ expanded: isExpanded }}
        accessibilityLabel={`${section.title}${hasSelections ? `, ${selectedCount} selected` : ''}`}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <Text
            style={[
              styles.sectionTitle,
              isExpanded && styles.sectionTitleExpanded,
            ]}>
            {section.title}
          </Text>
          {!isExpanded && hasSelections && (
            <View style={styles.sectionBadge}>
              <Text style={styles.sectionBadgeText}>{selectedCount}</Text>
            </View>
          )}
        </View>
        <View style={styles.sectionChevron}>
          {isExpanded ? (
            <ChevronUpIcon
              fill={PRIMARY_100}
              style={{ width: 16, height: 16 }}
            />
          ) : (
            <ChevronDownIcon
              fill={NEUTRAL_600}
              style={{ width: 16, height: 16 }}
            />
          )}
        </View>
      </Pressable>

      {isExpanded && (
        <View style={styles.sectionContent}>
          {section.searchEnabled && (
            <View style={styles.searchInputContainer}>
              <Input
                typeField="textInputSearch"
                placeholder={section.searchPlaceholder || 'Search...'}
                value={searchText}
                onChangeText={handleSearch} 
                height={36}
              />
            </View>
          )}
          
          {isLoading ? (
            <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
              {[1, 2, 3].map((i) => (
                <View key={i} style={{ marginBottom: 12 }}>
                  <SkeletonItem width="100%" height={24} borderRadius={4} />
                </View>
              ))}
            </View>
          ) : (
            <>
              {options.length > 0 ? (
                options.map((option) => (
                  <FilterOptionComponent
                    key={option.id}
                    option={option}
                    isSelected={selectedValues.includes(option.id)}
                    selectionMode={section.selectionMode}
                    onPress={() => onSelect(option.id)}
                  />
                ))
              ) : (
                <View style={styles.noResultsContainer}>
                  <Text style={styles.noResultsText}>
                    {searchText 
                      ? (noResultsMessage || 'No results found') 
                      : 'No options available'}
                  </Text>
                </View>
              )}
            </>
          )}
        </View>
      )}
    </View>
  );
};

export default FilterSection;
