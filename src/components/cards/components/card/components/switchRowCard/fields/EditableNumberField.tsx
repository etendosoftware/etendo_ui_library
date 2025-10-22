import React from 'react';
import { View, Text } from 'react-native';
import TextInput from '../../../../../../inputBase/text-input/TextInput';
import { styles } from '../SwitchRowCard.style';

interface EditableNumberFieldProps {
  label: string;
  value: string;
  onChangeText: (value: number) => void;
  useInlineLayout: boolean;
  color: any;
}

const EditableNumberField: React.FC<EditableNumberFieldProps> = ({
  label,
  value,
  onChangeText,
  useInlineLayout,
  color,
}) => {
  const handleTextChange = (text: string) => {
    const numValue = parseFloat(text);
    onChangeText(isNaN(numValue) ? 0 : numValue);
  };

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
          <TextInput
            value={value}
            onChangeText={handleTextChange}
            keyboardType="numeric"
            isDisabled={false}
            styleContainer={styles.inputContainer}
            styleInput={styles.inputStyle}
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
        <TextInput
          value={value}
          onChangeText={handleTextChange}
          keyboardType="numeric"
          isDisabled={false}
          styleContainer={styles.inputContainer}
          styleInput={styles.inputStyle}
        />
      </View>
    </View>
  );
};

export default EditableNumberField;
