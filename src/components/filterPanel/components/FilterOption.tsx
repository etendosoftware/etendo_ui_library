import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FilterOptionProps } from '../FilterPanel.types';
import { styles } from '../FilterPanel.styles';

/**
 * FilterOption - A selectable option item within a filter section.
 * Supports both single-select (radio) and multi-select (checkbox) modes.
 */
const FilterOption: React.FC<FilterOptionProps> = ({
  option,
  isSelected,
  selectionMode,
  onPress,
}) => {
  const isMulti = selectionMode === 'multi';

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.option,
        pressed && styles.optionPressed,
        isSelected && styles.optionSelected,
      ]}
      accessibilityState={{ checked: isSelected }}
      accessibilityLabel={option.label}>
      <View
        style={[
          styles.optionIndicator,
          isMulti && styles.optionIndicatorMulti,
          isSelected && styles.optionIndicatorSelected,
        ]}>
        {isSelected && (
          isMulti ? (
            <View style={styles.optionIndicatorCheck} />
          ) : (
            <View style={styles.optionIndicatorInner} />
          )
        )}
      </View>
      <Text
        style={[
          styles.optionLabel,
          isSelected && styles.optionLabelSelected,
        ]}>
        {option.label}
      </Text>
    </Pressable>
  );
};

export default FilterOption;
