import React, { useCallback } from 'react';
import { Text } from 'react-native';
import EditableStringField from './EditableStringField';
import EditableNumberField from './EditableNumberField';
import EditableDateField from './EditableDateField';
import EditableBooleanField from './EditableBooleanField';
import EditableSelectorField from './EditableSelectorField';
import { SwitchRowCardProps } from '../SwitchRowCard.type';
import { SearchIcon } from '../../../../../../../assets/images/icons';
import { Button } from '../../../../../../../components/button';
import { styles } from '../SwitchRowCard.style';

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

  const handleActionButtonPress = useCallback(() => {
    if (actionButton?.onPress && row?.key && item) {
      actionButton.onPress(item, row.key);
    }
  }, [actionButton, item, row?.key]);

  const getActionButtonIcon = (): React.ReactElement | undefined => {
    if (actionButton?.icon) {
      if (typeof actionButton.icon === 'string') {
        return <Text style={styles.textValue}>{actionButton.icon}</Text>;
      }
      if (React.isValidElement(actionButton.icon)) {
        return actionButton.icon;
      }
    }

    // Default icon (magnifying glass)
    return <SearchIcon />;
  };

  const renderActionButton = () => (
    <Button
      onPress={handleActionButtonPress}
      typeStyle="primary"
      width={32}
      height={32}
      paddingHorizontal={0}
      paddingVertical={0}
      iconLeft={getActionButtonIcon()}
    />
  );

  const actionButtonNode = actionButton ? renderActionButton() : undefined;

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
