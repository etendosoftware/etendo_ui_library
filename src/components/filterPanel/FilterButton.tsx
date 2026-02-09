import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FilterButtonProps } from './FilterPanel.types';
import { styles } from './FilterPanel.styles';
import { FilterIcon } from '../../assets/images/icons';
import { PRIMARY_100, NEUTRAL_0 } from '../../styles/colors';

/**
 * FilterButton - A trigger button that opens the FilterPanel.
 * Shows a visual indicator when filters are active.
 */
const FilterButton: React.FC<FilterButtonProps> = ({
  onPress,
  hasActiveFilters,
  activeFilterCount,
  disabled = false,
  size = 40,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.filterButton,
        { width: size, height: size },
        disabled && styles.filterButtonDisabled,
        hasActiveFilters && styles.filterButtonActive,
      ]}
      accessibilityRole="button"
      accessibilityLabel={`Filter${hasActiveFilters ? `, ${activeFilterCount || ''} active` : ''}`}
      accessibilityState={{ disabled }}>
      <FilterIcon
        fill={hasActiveFilters ? PRIMARY_100 : PRIMARY_100}
        style={{ width: size * 0.5, height: size * 0.5 }}
      />
      {hasActiveFilters && activeFilterCount !== undefined && activeFilterCount > 0 && (
        <View style={styles.filterButtonBadge}>
          <Text style={styles.filterButtonBadgeText}>
            {activeFilterCount > 9 ? '9+' : activeFilterCount}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export default FilterButton;
