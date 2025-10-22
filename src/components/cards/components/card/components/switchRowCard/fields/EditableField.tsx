import React from 'react';
import EditableStringField from './EditableStringField';
import EditableNumberField from './EditableNumberField';
import EditableDateField from './EditableDateField';
import EditableBooleanField from './EditableBooleanField';
import { SwitchRowCardProps } from '../SwitchRowCard.type';

interface EditableFieldProps {
  row: NonNullable<SwitchRowCardProps['row']>;
  currentValue: any;
  handleChange: (value: any) => void;
  handleDebouncedChange: (value: any) => void;
  useInlineLayout: boolean;
  color: any;
}

const EditableField: React.FC<EditableFieldProps> = ({
  row,
  currentValue,
  handleChange,
  handleDebouncedChange,
  useInlineLayout,
  color,
}) => {
  const label = row?.label || '';

  switch (row.type) {
    case 'string':
      return (
        <EditableStringField
          label={label}
          value={String(currentValue || '')}
          onChangeText={handleDebouncedChange}
          useInlineLayout={useInlineLayout}
          color={color}
        />
      );

    case 'number':
      return (
        <EditableNumberField
          label={label}
          value={String(currentValue || '')}
          onChangeText={handleDebouncedChange}
          useInlineLayout={useInlineLayout}
          color={color}
        />
      );

    case 'date':
      return (
        <EditableDateField
          label={label}
          value={currentValue ? String(currentValue) : undefined}
          onChangeText={handleDebouncedChange}
          useInlineLayout={useInlineLayout}
          color={color}
        />
      );

    case 'boolean':
      return (
        <EditableBooleanField
          label={label}
          value={currentValue}
          onPress={() => handleChange(!currentValue)}
          useInlineLayout={useInlineLayout}
          color={color}
        />
      );

    default:
      return null;
  }
};

export default EditableField;
