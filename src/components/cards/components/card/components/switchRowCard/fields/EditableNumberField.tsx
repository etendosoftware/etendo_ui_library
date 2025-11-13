import React from 'react';
import TextInput from '../../../../../../inputBase/text-input/TextInput';
import { styles } from '../SwitchRowCard.style';
import FieldLayout from './FieldLayout';

interface EditableNumberFieldProps {
  label: string;
  value: string;
  onChangeText: (value: number) => void;
  useInlineLayout: boolean;
  color: any;
  actionButton?: React.ReactNode;
}

const EditableNumberField: React.FC<EditableNumberFieldProps> = ({
  label,
  value,
  onChangeText,
  useInlineLayout,
  color,
  actionButton,
}) => {
  const handleTextChange = (text: string) => {
    const numValue = parseFloat(text);
    onChangeText(isNaN(numValue) ? 0 : numValue);
  };

  return (
    <FieldLayout label={label} color={color} useInlineLayout={useInlineLayout} actionButton={actionButton}>
      <TextInput
        value={value}
        onChangeText={handleTextChange}
        keyboardType="numeric"
        isDisabled={false}
        styleContainer={styles.inputContainer}
        styleInput={styles.inputStyle}
      />
    </FieldLayout>
  );
};

export default EditableNumberField;
