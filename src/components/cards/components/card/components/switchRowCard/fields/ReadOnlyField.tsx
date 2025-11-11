import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { styles } from '../SwitchRowCard.style';
import { getIconByType } from '../SwitchRowCard';
import { SwitchRowCardProps } from '../SwitchRowCard.type';
import { SearchIcon } from '../../../../../../../assets/images/icons';
import { Button } from '../../../../../../../components/button';

const DOTS: string = '··························';

interface ReadOnlyFieldProps {
  row: NonNullable<SwitchRowCardProps['row']>;
  item: SwitchRowCardProps['item'];
  color: any;
  disabled?: boolean;
  shouldUseColumnLayout: boolean;
  actionButton?: {
    icon?: React.ReactNode | string;
    onPress: (cardData: any, fieldKey: string) => void;
  };
}

const getDisplayValue = (value: any, displayKey?: string): string => {
  if (value === null || value === undefined) return '';
  if (typeof value === 'object' && displayKey) {
    return String(value[displayKey] || '');
  }
  return String(value);
};

const ReadOnlyField: React.FC<ReadOnlyFieldProps> = ({
  row,
  item,
  color,
  disabled,
  shouldUseColumnLayout,
  actionButton,
}) => {
  const handleActionButtonPress = useCallback(() => {
    if (actionButton?.onPress && row?.key) {
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

  const renderActionButton = () => {
    if (!actionButton) return null;
    return (
      <Button
        onPress={handleActionButtonPress}
        disabled={disabled}
        typeStyle="primary"
        width={32}
        height={32}
        paddingHorizontal={0}
        paddingVertical={0}
        iconLeft={getActionButtonIcon()}
      />
    );
  };

  // Read-only non-string types (date, time, boolean, status, etc)
  if (row.type !== 'string' && row.type) {
    return (
      <View style={styles.row}>
        <View style={[styles.contentMiddleRow]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
        </View>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
          {DOTS}
        </Text>
        <View style={[styles.contentMiddleRow, styles.paddingLeft]}>
          {getIconByType({ row, item, color, disabled })}
          {!['boolean', 'status'].includes(row.type) && (
            <Text
              style={[styles.textValue, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.key ? getDisplayValue(item[row.key], row.displayKey) : ''}
            </Text>
          )}
        </View>
        {renderActionButton()}
      </View>
    );
  }

  // Read-only string type - column layout
  if (shouldUseColumnLayout) {
    return (
      <View style={[styles.row]}>
        <View style={[styles.column, { flex: 1 }]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
          <Text
            style={[styles.textValueLong, color]}
            ellipsizeMode="tail"
            numberOfLines={row?.numberOfLines ?? 2}>
            {row?.key ? getDisplayValue(item[row.key], row.displayKey) : ''}
          </Text>
        </View>
        {renderActionButton()}
      </View>
    );
  }

  // Read-only string type - row layout
  return (
    <View style={styles.row}>
      <View style={[styles.contentMiddleRow]}>
        <Text
          style={[styles.textName, color]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {row?.label}
        </Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
        {DOTS}
      </Text>
      <View style={[styles.contentMiddleRow]}>
        <Text style={[styles.textValueShort, color]} numberOfLines={1}>
          {row?.key ? getDisplayValue(item[row.key], row.displayKey) : ''}
        </Text>
      </View>
    </View>
  );
};

export default ReadOnlyField;
