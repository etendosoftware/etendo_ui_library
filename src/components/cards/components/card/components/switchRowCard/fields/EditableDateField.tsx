import React from 'react';
import DatePickerInput from '../../../../../../inputBase/date-picker-input/DatePickerInput';
import FieldLayout from './FieldLayout';

interface EditableDateFieldProps {
  label: string;
  value: string | undefined;
  onChangeText: (value: any) => void;
  useInlineLayout: boolean;
  color: any;
  actionButton?: React.ReactNode;
}

const EditableDateField: React.FC<EditableDateFieldProps> = ({
  label,
  value,
  onChangeText,
  useInlineLayout,
  color,
  actionButton,
}) => {
  return (
    <FieldLayout label={label} color={color} useInlineLayout={useInlineLayout} actionButton={actionButton}>
      <DatePickerInput
        value={value}
        onChangeText={onChangeText}
        isDisabled={false}
        size="small"
        language="es-ES"
        dateFormat="DD/MM/YYYY"
      />
    </FieldLayout>
  );
};

export default EditableDateField;
