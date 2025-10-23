import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import { styles } from './SwitchTitleCard.style';
import { SwitchTitleCardProps } from './SwitchTitleCard.type';
import { getIconByType } from '../switchRowCard/SwitchRowCard';
import { useDebounce } from '../../../../../../hooks';
import EditableTitleField from './fields/EditableTitleField';

const getDisplayValue = (value: any, displayKey?: string): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object' && displayKey) {
    return String(value[displayKey] || '');
  }
  return String(value);
};

const SwitchTitleCard = ({
  row,
  item,
  color = {},
  isDivisor = false,
  disabled,
  onChange,
}: SwitchTitleCardProps) => {
  const [localValue, setLocalValue] = useState<any>(null);

  // Reset local value when item changes from parent
  useEffect(() => {
    if (row?.key && localValue !== null && item[row.key] !== localValue) {
      setLocalValue(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, row?.key]);

  const memoizedOnChange = useCallback(
    (key: string | undefined, value: any) => {
      if (onChange && key) {
        onChange(key, value);
      }
    },
    [onChange],
  );

  const debounceDelay = row?.debounceDelay ?? 500;
  const debouncedOnChange = useDebounce(memoizedOnChange, debounceDelay);

  if (!row) {
    return <></>;
  }

  // Custom component rendering
  if (row.type === 'custom' && row.customComponent) {
    const CustomComponent = row.customComponent;

    return (
      <View style={[styles.rowTitle, !isDivisor && styles.noBorderBottom]}>
        <CustomComponent
          label={row?.label}
          value={row?.key ? item[row.key] : undefined}
          fieldKey={row.key || ''}
          onChange={onChange}
          disabled={disabled}
          {...row.customProps}
        />
      </View>
    );
  }

  // Editable title rendering
  if (row.isEditing && row.key && !disabled) {
    const currentValue = localValue !== null ? localValue : item[row.key];
    const useInlineLayout = row.inLineEditable ?? true;

    const handleChange = (value: any) => {
      if (onChange) {
        onChange(row.key, value);
      }
    };

    const handleDebouncedChange = (value: any) => {
      setLocalValue(value);
      debouncedOnChange(row.key, value);
    };

    return (
      <EditableTitleField
        row={row}
        currentValue={currentValue}
        handleChange={handleChange}
        handleDebouncedChange={handleDebouncedChange}
        useInlineLayout={useInlineLayout}
        color={color}
        isDivisor={isDivisor}
      />
    );
  }

  // Read-only title rendering (default)
  return (
    <View style={[styles.row, !isDivisor && styles.noBorderBottom]}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {row.label}
      </Text>
      <View style={styles.titleRowValue}>
        {getIconByType({ row, item, color, disabled })}
        {!['boolean', 'status'].includes(row.type ?? '') && (
          <Text
            style={[styles.textValueBold, color]}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {row?.key ? getDisplayValue(item[row.key], row.displayKey) : ''}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SwitchTitleCard;
