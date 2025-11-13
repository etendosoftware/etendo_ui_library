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
  actionButton?: React.ReactNode;
}

const EditableStringField: React.FC<EditableStringFieldProps> = ({
  label,
  value,
  onChangeText,
  useInlineLayout,
  color,
  actionButton,
}) => {
  return (
    <FieldLayout
      label={label}
      color={color}
      useInlineLayout={useInlineLayout}
      actionButton={actionButton}>
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
