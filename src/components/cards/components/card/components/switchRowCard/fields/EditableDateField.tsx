import React from 'react';
import { View, Text } from 'react-native';
import DatePickerInput from '../../../../../../inputBase/date-picker-input/DatePickerInput';
import { styles } from '../SwitchRowCard.style';

interface EditableDateFieldProps {
  label: string;
  value: string | undefined;
  onChangeText: (value: any) => void;
  useInlineLayout: boolean;
  color: any;
}

const EditableDateField: React.FC<EditableDateFieldProps> = ({
  label,
  value,
  onChangeText,
  useInlineLayout,
  color,
}) => {
  if (useInlineLayout) {
    return (
      <View style={styles.row}>
        <View style={[styles.contentMiddleRow, styles.paddingRight]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {label}
          </Text>
        </View>
        <View
          style={[
            styles.contentMiddleRow,
            styles.paddingLeft,
            styles.editableInput,
          ]}>
          <DatePickerInput
            value={value}
            onChangeText={onChangeText}
            isDisabled={false}
            size="small"
            language="es-ES"
            dateFormat="DD/MM/YYYY"
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.columnEditable}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {label}
      </Text>
      <View style={styles.editableInputColumn}>
        <DatePickerInput
          value={value}
          onChangeText={onChangeText}
          isDisabled={false}
          size="small"
          language="es-ES"
          dateFormat="DD/MM/YYYY"
        />
      </View>
    </View>
  );
};

export default EditableDateField;
