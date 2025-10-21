import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import {
  CalendarIcon,
  CheckSquareicon,
  ClockIcon,
  SquareIcon,
} from '../../../../../../assets/images/icons';
import { styles } from './SwitchRowCard.style';
import { SwitchRowCardProps } from './SwitchRowCard.type';
import { NEUTRAL_0, PRIMARY_100 } from '../../../../../../styles/colors';
import TextInput from '../../../../../inputBase/text-input/TextInput';
import DatePickerInput from '../../../../../inputBase/date-picker-input/DatePickerInput';
import { useDebounce } from '../../../../../../hooks';

const DOTS: string = '··························';
const MAX_VALUE_LENGTH = 20;

export const getIconByType = ({
  row,
  item,
  color = {},
  disabled,
}: SwitchRowCardProps) => {
  if (row?.key) {
    switch (row.type) {
      case 'date':
        return <CalendarIcon style={styles.calendar} fill={color.color} />;
      case 'time':
        return <ClockIcon style={styles.calendar} fill={color.color} />;
      case 'boolean':
        return item[row.key] ? (
          <CheckSquareicon style={styles.check} fill={color.color} />
        ) : (
          <SquareIcon style={styles.check} fill={color.color} />
        );
      case 'status':
        const value = row.key ? item[row.key] : undefined;
        const styleForValue = row?.statusMetadata?.[value] ??
          row?.statusMetadata?.default ?? {
            label: row?.label ?? '',
            backgroundColor: PRIMARY_100,
            textColor: NEUTRAL_0,
          };

        const displayValue = styleForValue.label ?? String(value);
        const opacity = disabled ? 0.2 : 1;
        return (
          <View
            style={[
              styles.statusContainer,
              !row?.title && styles.spaceLeft,
              {
                opacity: opacity,
                backgroundColor: styleForValue.backgroundColor,
              },
            ]}>
            <Text style={{ color: styleForValue.textColor }}>
              {displayValue}
            </Text>
          </View>
        );

      default:
        break;
    }
  }
};

const SwitchRowCard = ({
  row,
  item,
  color = {},
  disabled,
  onChange,
  debounceDelay = 500,
}: SwitchRowCardProps) => {
  const [shouldUseColumnLayout, setShouldUseColumnLayout] = useState(false);

  // Local state for input values while typing (before debounce)
  const [localValue, setLocalValue] = useState<any>(null);

  useEffect(() => {
    if (row?.type === 'string' && row?.key && item[row.key]) {
      const valueText = String(item[row.key]);
      const shouldUseColumn = valueText.length > MAX_VALUE_LENGTH;
      if (shouldUseColumn !== shouldUseColumnLayout) {
        setShouldUseColumnLayout(shouldUseColumn);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [row?.type, row?.key, item[row?.key || '']]);

  // Reset local value when item changes from parent
  useEffect(() => {
    if (row?.key && localValue !== null && item[row.key] !== localValue) {
      setLocalValue(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item, row?.key]);

  // Memoize the onChange callback to prevent recreating debounced function
  const memoizedOnChange = useCallback(
    (key: string | undefined, value: any) => {
      if (onChange && key) {
        onChange(key, value);
      }
    },
    [onChange],
  );

  // Create debounced onChange handler for text inputs
  const debouncedOnChange = useDebounce(memoizedOnChange, debounceDelay);

  if (!row) {
    return <></>;
  }

  if (row.type === 'custom' && row.customComponent) {
    const CustomComponent = row.customComponent;

    return (
      <CustomComponent
        label={row?.label}
        value={row?.key ? item[row.key] : undefined}
        fieldKey={row.key || ''}
        onChange={onChange}
        disabled={disabled}
        {...row.customProps}
      />
    );
  }

  // Handle editable fields
  if (row.isEditing && row.key && !disabled) {
    const currentValue = localValue !== null ? localValue : item[row.key];

    // Immediate onChange (for boolean, calendar clicks, etc)
    const handleChange = (value: any) => {
      if (onChange) {
        onChange(row.key, value);
      }
    };

    // Debounced onChange (for text inputs)
    const handleDebouncedChange = (value: any) => {
      // Update local state immediately (for UI responsiveness)
      setLocalValue(value);
      // Call debounced onChange (will execute after delay)
      debouncedOnChange(row.key, value);
    };

    // Editable String
    if (row.type === 'string') {
      return (
        <View style={styles.row}>
          <View style={[styles.contentMiddleRow, styles.paddingRight]}>
            <Text
              style={[styles.textName, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.label}
            </Text>
          </View>
          <View
            style={[
              styles.contentMiddleRow,
              styles.paddingLeft,
              styles.editableInput,
            ]}>
            <TextInput
              value={String(currentValue || '')}
              onChangeText={handleDebouncedChange}
              isDisabled={false}
              styleContainer={styles.inputContainer}
              styleInput={styles.inputStyle}
            />
          </View>
        </View>
      );
    }

    // Editable Number
    if (row.type === 'number') {
      return (
        <View style={styles.row}>
          <View style={[styles.contentMiddleRow, styles.paddingRight]}>
            <Text
              style={[styles.textName, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.label}
            </Text>
          </View>
          <View
            style={[
              styles.contentMiddleRow,
              styles.paddingLeft,
              styles.editableInput,
            ]}>
            <TextInput
              value={String(currentValue || '')}
              onChangeText={text => {
                const numValue = parseFloat(text);
                handleDebouncedChange(isNaN(numValue) ? 0 : numValue);
              }}
              keyboardType="numeric"
              isDisabled={false}
              styleContainer={styles.inputContainer}
              styleInput={styles.inputStyle}
            />
          </View>
        </View>
      );
    }

    // Editable Date
    if (row.type === 'date') {
      return (
        <View style={styles.row}>
          <View style={[styles.contentMiddleRow, styles.paddingRight]}>
            <Text
              style={[styles.textName, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.label}
            </Text>
          </View>
          <View
            style={[
              styles.contentMiddleRow,
              styles.paddingLeft,
              styles.editableInput,
            ]}>
            <DatePickerInput
              value={currentValue ? String(currentValue) : undefined}
              onChangeText={handleDebouncedChange}
              isDisabled={false}
              size="small"
              language="es-ES"
              dateFormat="DD/MM/YYYY"
            />
          </View>
        </View>
      );
    }

    // Editable Boolean
    if (row.type === 'boolean') {
      return (
        <Pressable
          style={styles.row}
          onPress={() => handleChange(!currentValue)}>
          <View style={[styles.contentMiddleRow, styles.paddingRight]}>
            <Text
              style={[styles.textName, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.label}
            </Text>
          </View>
          <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
            {DOTS}
          </Text>
          <View style={[styles.contentMiddleRow, styles.paddingLeft]}>
            {currentValue ? (
              <CheckSquareicon style={styles.check} fill={PRIMARY_100} />
            ) : (
              <SquareIcon style={styles.check} fill={PRIMARY_100} />
            )}
          </View>
        </Pressable>
      );
    }
  }

  if (row.type !== 'string' && row.type) {
    return (
      <View style={styles.row}>
        <View style={[styles.contentMiddleRow, styles.paddingRight]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
          {DOTS}
        </Text>
        <View style={[styles.contentMiddleRow, styles.paddingLeft]}>
          {getIconByType({ row, item, color, disabled })}
          {!['boolean', 'status'].includes(row.type) && (
            <Text
              style={[styles.textValue, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.key ? item[row.key] : ''}
            </Text>
          )}
        </View>
      </View>
    );
  }

  if (shouldUseColumnLayout) {
    return (
      <View style={[styles.column]}>
        <Text
          style={[styles.textName, color]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {row?.label}
        </Text>
        <Text
          style={[styles.textValueLong, color]}
          ellipsizeMode="tail"
          numberOfLines={row?.numberOfLines ?? 2}>
          {row?.key ? item[row.key] : ''}
        </Text>
      </View>
    );
  } else {
    return (
      <View style={styles.row}>
        <View style={[styles.contentMiddleRow, styles.paddingRight]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
          {DOTS}
        </Text>
        <View style={[styles.contentMiddleRow, styles.paddingLeft]}>
          <Text style={[styles.textValueShort, color]} numberOfLines={1}>
            {row?.key ? item[row.key] : ''}
          </Text>
        </View>
      </View>
    );
  }
};

export default SwitchRowCard;
