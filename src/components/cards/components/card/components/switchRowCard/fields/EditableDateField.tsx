import React from 'react';
import DatePickerInput from '../../../../../../inputBase/date-picker-input/DatePickerInput';
import FieldLayout from './FieldLayout';

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
  return (
    <FieldLayout label={label} color={color} useInlineLayout={useInlineLayout}>
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
