import React from 'react';
import EditableStringField from './EditableStringField';
import EditableNumberField from './EditableNumberField';
import EditableDateField from './EditableDateField';
import EditableBooleanField from './EditableBooleanField';
import EditableSelectorField from './EditableSelectorField';
import ActionButton from './ActionButton';
import { SwitchRowCardProps } from '../SwitchRowCard.type';

interface EditableFieldProps {
  row: NonNullable<SwitchRowCardProps['row']>;
  currentValue: any;
  handleChange: (value: any) => void;
  handleDebouncedChange: (value: any) => void;
  useInlineLayout: boolean;
  color: any;
  actionButton?: {
    icon?: React.ReactNode | string;
    onPress: (cardData: any, fieldKey: string) => void;
  };
  item?: any;
}

const EditableField: React.FC<EditableFieldProps> = ({
  row,
  currentValue,
  handleChange,
  handleDebouncedChange,
  useInlineLayout,
  color,
  actionButton,
  item,
}) => {
  const label = row?.label || '';

  const actionButtonNode = actionButton ? (
    <ActionButton actionButton={actionButton} row={row} item={item} />
  ) : undefined;

  switch (row.type) {
    case 'string':
      return (
        <EditableStringField
          label={label}
          value={String(currentValue || '')}
          onChangeText={handleDebouncedChange}
          useInlineLayout={useInlineLayout}
          color={color}
          actionButton={actionButtonNode}
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
          actionButton={actionButtonNode}
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
          actionButton={actionButtonNode}
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
          actionButton={actionButtonNode}
        />
      );

    case 'selector':
      return (
        <EditableSelectorField
          label={label}
          value={currentValue}
          onSelect={handleChange}
          useInlineLayout={useInlineLayout}
          color={color}
          staticData={row.staticData}
          displayKey={row.displayKey}
          onFetchData={row.onFetchData}
          actionButton={actionButtonNode}
        />
      );

    default:
      return null;
  }
};

export default EditableField;
