import React from 'react';
import TextInput from '../../../../../../inputBase/text-input/TextInput';
import { styles } from '../SwitchRowCard.style';
import FieldLayout from './FieldLayout';

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
  return (
    <FieldLayout label={label} color={color} useInlineLayout={useInlineLayout}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        isDisabled={false}
        styleContainer={styles.inputContainer}
        styleInput={styles.inputStyle}
      />
    </FieldLayout>
  );
};

export default EditableStringField;
