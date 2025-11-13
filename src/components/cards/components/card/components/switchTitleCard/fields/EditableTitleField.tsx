import React, { useCallback } from 'react';
import { View, Text, Pressable } from 'react-native';
import TextInput from '../../../../../../inputBase/text-input/TextInput';
import DatePickerInput from '../../../../../../inputBase/date-picker-input/DatePickerInput';
import DropdownInput from '../../../../../../inputBase/dropdown-input/DropdownInput';
import {
  CheckSquareicon,
  SquareIcon,
  SearchIcon,
} from '../../../../../../../assets/images/icons';
import { PRIMARY_100 } from '../../../../../../../styles/colors';
import { Button } from '../../../../../../../components/button';
import { styles } from '../SwitchTitleCard.style';
import { CardsMetadata } from '../../../../../Cards.types';

const getDisplayValue = (value: any, displayKey?: string): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object' && displayKey) {
    return String(value[displayKey] || '');
  }
  return String(value);
};

interface EditableTitleFieldProps {
  row: CardsMetadata;
  currentValue: any;
  handleChange: (value: any) => void;
  handleDebouncedChange: (value: any) => void;
  useInlineLayout: boolean;
  color: any;
  isDivisor: boolean;
  disabled?: boolean;
  actionButton?: {
    icon?: React.ReactNode | string;
    onPress: (cardData: any, fieldKey: string) => void;
  };
  item?: any;
}

const EditableTitleField: React.FC<EditableTitleFieldProps> = ({
  row,
  currentValue,
  handleChange,
  handleDebouncedChange,
  useInlineLayout,
  color,
  isDivisor,
  disabled,
  actionButton,
  item,
}) => {
  const label = row?.label || '';

  const handleActionButtonPress = useCallback(() => {
    if (actionButton?.onPress && row?.key && item) {
      actionButton.onPress(item, row.key);
    }
  }, [actionButton, item, row?.key]);

  const getActionButtonIcon = (): React.ReactElement | undefined => {
    if (actionButton?.icon) {
      if (typeof actionButton.icon === 'string') {
        return <Text style={styles.textValueBold}>{actionButton.icon}</Text>;
      }
      if (React.isValidElement(actionButton.icon)) {
        return actionButton.icon;
      }
    }
    return <SearchIcon />;
  };

  const renderActionButton = () => (
    <Button
      onPress={handleActionButtonPress}
      typeStyle="primary"
      width={32}
      height={32}
      paddingHorizontal={0}
      paddingVertical={0}
      disabled={disabled}
      iconLeft={getActionButtonIcon()}
    />
  );

  const actionButtonNode = actionButton ? renderActionButton() : undefined;

  // Render editable input based on type
  const renderEditableInput = () => {
    switch (row.type) {
      case 'string':
        return (
          <TextInput
            value={String(currentValue || '')}
            onChangeText={handleDebouncedChange}
            isDisabled={false}
            styleContainer={styles.titleInputContainer}
            styleInput={styles.titleInputStyle}
          />
        );

      case 'number':
        return (
          <TextInput
            value={String(currentValue || '')}
            onChangeText={text => {
              const numValue = parseFloat(text);
              handleDebouncedChange(isNaN(numValue) ? 0 : numValue);
            }}
            keyboardType="numeric"
            isDisabled={false}
            styleContainer={styles.titleInputContainer}
            styleInput={styles.titleInputStyle}
          />
        );

      case 'date':
        return (
          <DatePickerInput
            value={currentValue ? String(currentValue) : undefined}
            onChangeText={handleDebouncedChange}
            isDisabled={false}
            size="small"
            language="es-ES"
            dateFormat="DD/MM/YYYY"
          />
        );

      case 'boolean':
        const CheckboxIcon = currentValue ? CheckSquareicon : SquareIcon;
        return (
          <Pressable onPress={() => handleChange(!currentValue)}>
            <CheckboxIcon style={styles.check} fill={PRIMARY_100} />
          </Pressable>
        );

      case 'selector':
        return (
          <DropdownInput
            value={getDisplayValue(currentValue, row.displayKey)}
            onSelect={handleChange}
            staticData={row.staticData}
            displayKey={row.displayKey}
            onFetchData={row.onFetchData}
            styleContainer={styles.titleInputContainer}
            styleInput={styles.titleInputStyle}
          />
        );

      default:
        return (
          <Text
            style={[styles.textValueBold, color]}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {String(currentValue || '')}
          </Text>
        );
    }
  };

  // Force inline layout if actionButton exists
  const shouldUseInlineLayout = actionButton ? true : useInlineLayout;

  // Inline layout (label and input on same row)
  if (shouldUseInlineLayout) {
    return (
      <View style={[styles.rowInline, !isDivisor && styles.noBorderBottom]}>
        <View style={[styles.titleLabelContainer, styles.paddingRight]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {label}
          </Text>
        </View>
        <View style={[{ flex: 1 }]}>{renderEditableInput()}</View>
        {actionButtonNode && (
          <View style={{ paddingLeft: 8 }}>{actionButtonNode}</View>
        )}
      </View>
    );
  }

  // Column layout (label above input) - only used when no actionButton
  return (
    <View style={[styles.row, !isDivisor && styles.noBorderBottom]}>
      <View style={styles.titleColumnContainer}>
        <Text
          style={[styles.textName, color]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {label}
        </Text>
        <View style={styles.editableTitleColumn}>{renderEditableInput()}</View>
      </View>
    </View>
  );
};

export default EditableTitleField;
