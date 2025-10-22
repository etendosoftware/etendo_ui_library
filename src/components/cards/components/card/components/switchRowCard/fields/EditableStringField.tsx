import React from 'react';
import { View, Text } from 'react-native';
import TextInput from '../../../../../../inputBase/text-input/TextInput';
import { styles } from '../SwitchRowCard.style';

interface EditableStringFieldProps {
  label: string;
  value: string;
  onChangeText: (value: string) => void;
  useInlineLayout: boolean;
  color: any;
}

const EditableStringField: React.FC<EditableStringFieldProps> = ({
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
          <TextInput
            value={value}
            onChangeText={onChangeText}
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
          onChangeText={onChangeText}
          isDisabled={false}
          styleContainer={styles.inputContainer}
          styleInput={styles.inputStyle}
        />
      </View>
    </View>
  );
};

export default EditableStringField;
