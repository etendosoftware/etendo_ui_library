import React, { useState, useEffect, useCallback } from 'react';
import { View, Text } from 'react-native';
import {
  CalendarIcon,
  CheckSquareicon,
  ClockIcon,
  SquareIcon,
  SearchIcon,
} from '../../../../../../assets/images/icons';
import { styles } from './SwitchRowCard.style';
import { SwitchRowCardProps } from './SwitchRowCard.type';
import { NEUTRAL_0, PRIMARY_100 } from '../../../../../../styles/colors';
import { useDebounce } from '../../../../../../hooks';
import { Button } from '../../../../../../components/button';
import EditableField from './fields/EditableField';
import ReadOnlyField from './fields/ReadOnlyField';

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
  const [localValue, setLocalValue] = useState<any>(null);

  // Check if string value should use column layout
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

  const memoizedOnChange = useCallback(
    (key: string | undefined, value: any) => {
      if (onChange && key) {
        onChange(key, value);
      }
    },
    [onChange],
  );

  const debouncedOnChange = useDebounce(memoizedOnChange, debounceDelay);

  if (!row) {
    return <></>;
  }

  // Custom component rendering
  if (row.type === 'custom' && row.customComponent) {
    const CustomComponent = row.customComponent;

    const customComponent = (
      <CustomComponent
        label={row?.label}
        value={row?.key ? item[row.key] : undefined}
        fieldKey={row.key || ''}
        onChange={onChange}
        disabled={disabled}
        {...row.customProps}
      />
    );

    // Agregar actionButton si existe
    if (row.actionButton && row.key) {
      const handleActionButtonPress = () => {
        row.actionButton!.onPress(item, row.key!);
      };

      const getActionButtonIcon = (): React.ReactElement | undefined => {
        if (row.actionButton!.icon) {
          if (typeof row.actionButton!.icon === 'string') {
            return (
              <Text style={styles.textValue}>{row.actionButton!.icon}</Text>
            );
          }
          if (React.isValidElement(row.actionButton!.icon)) {
            return row.actionButton!.icon;
          }
        }
        return <SearchIcon />;
      };

      return (
        <View style={[styles.row]}>
          <View style={{ flex: 1 }}>{customComponent}</View>
          <Button
            height={52}
            onPress={handleActionButtonPress}
            disabled={disabled}
            typeStyle="primary"
            iconLeft={getActionButtonIcon()}
          />
        </View>
      );
    }

    return customComponent;
  }

  // Editable field rendering
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
      <EditableField
        row={row}
        currentValue={currentValue}
        handleChange={handleChange}
        handleDebouncedChange={handleDebouncedChange}
        useInlineLayout={useInlineLayout}
        color={color}
        actionButton={row.actionButton}
        item={item}
      />
    );
  }

  // Read-only field rendering
  return (
    <ReadOnlyField
      row={row}
      item={item}
      color={color}
      disabled={disabled}
      shouldUseColumnLayout={shouldUseColumnLayout}
      actionButton={row.actionButton}
    />
  );
};

export default SwitchRowCard;
