import React from 'react';
import DropdownInput from '../../../../../../inputBase/dropdown-input/DropdownInput';
import { styles } from '../SwitchRowCard.style';
import FieldLayout from './FieldLayout';

const getDisplayValue = (value: any, displayKey?: string): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object' && displayKey) {
    return String(value[displayKey] || '');
  }
  return String(value);
};

interface EditableSelectorFieldProps {
  label: string;
  value: any;
  onSelect: (option: any) => void;
  useInlineLayout: boolean;
  color: any;
  staticData?: any[];
  displayKey?: string;
  onFetchData?: (
    currentPage: number,
    pageSize?: number,
    filterText?: string,
  ) => Promise<any[]>;
  actionButton?: React.ReactNode;
}

const EditableSelectorField: React.FC<EditableSelectorFieldProps> = ({
  label,
  value,
  onSelect,
  useInlineLayout,
  color,
  staticData,
  displayKey,
  onFetchData,
  actionButton,
}) => {
  return (
    <FieldLayout label={label} color={color} useInlineLayout={useInlineLayout} actionButton={actionButton}>
      <DropdownInput
        value={getDisplayValue(value, displayKey)}
        onSelect={onSelect}
        staticData={staticData}
        displayKey={displayKey}
        onFetchData={onFetchData}
        styleContainer={styles.inputContainer}
        styleInput={styles.inputStyle}
      />
    </FieldLayout>
  );
};

export default EditableSelectorField;
