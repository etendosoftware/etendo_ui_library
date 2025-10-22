import React from 'react';
import { View, Text } from 'react-native';
import DropdownInput from '../../../../../../inputBase/dropdown-input/DropdownInput';
import { styles } from '../SwitchRowCard.style';

// Helper para extraer el valor a mostrar en el dropdown
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
          <DropdownInput
            value={getDisplayValue(value, displayKey)}
            onSelect={onSelect}
            staticData={staticData}
            displayKey={displayKey}
            onFetchData={onFetchData}
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
        <DropdownInput
          value={getDisplayValue(value, displayKey)}
          onSelect={onSelect}
          staticData={staticData}
          displayKey={displayKey}
          onFetchData={onFetchData}
          styleContainer={styles.inputContainer}
          styleInput={styles.inputStyle}
        />
      </View>
    </View>
  );
};

export default EditableSelectorField;
