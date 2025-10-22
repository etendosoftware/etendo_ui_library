import React from 'react';
import { View, Text, Pressable } from 'react-native';
import TextInput from '../../../../../../inputBase/text-input/TextInput';
import DatePickerInput from '../../../../../../inputBase/date-picker-input/DatePickerInput';
import {
  CheckSquareicon,
  SquareIcon,
} from '../../../../../../../assets/images/icons';
import { PRIMARY_100 } from '../../../../../../../styles/colors';
import { styles } from '../SwitchTitleCard.style';
import { CardsMetadata } from '../../../../../Cards.types';

interface EditableTitleFieldProps {
  row: CardsMetadata;
  currentValue: any;
  handleChange: (value: any) => void;
  handleDebouncedChange: (value: any) => void;
  useInlineLayout: boolean;
  color: any;
  isDivisor: boolean;
}

const EditableTitleField: React.FC<EditableTitleFieldProps> = ({
  row,
  currentValue,
  handleChange,
  handleDebouncedChange,
  useInlineLayout,
  color,
  isDivisor,
}) => {
  const label = row?.label || '';

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

  // Inline layout (label and input on same row)
  if (useInlineLayout) {
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
        <View style={[styles.titleLabelContainer, styles.paddingLeft]}>
          {renderEditableInput()}
        </View>
      </View>
    );
  }

  // Column layout (label above input)
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
