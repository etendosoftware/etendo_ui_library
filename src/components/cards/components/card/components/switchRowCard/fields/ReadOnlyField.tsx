import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../SwitchRowCard.style';
import { getIconByType } from '../SwitchRowCard';
import { SwitchRowCardProps } from '../SwitchRowCard.type';

const DOTS: string = '··························';

interface ReadOnlyFieldProps {
  row: NonNullable<SwitchRowCardProps['row']>;
  item: SwitchRowCardProps['item'];
  color: any;
  disabled?: boolean;
  shouldUseColumnLayout: boolean;
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
}) => {
  // Read-only non-string types (date, time, boolean, status, etc)
  if (row.type !== 'string' && row.type) {
    return (
      <View style={styles.row}>
        <View style={[styles.contentMiddleRow, styles.paddingRight]}>
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
      </View>
    );
  }

  // Read-only string type - column layout
  if (shouldUseColumnLayout) {
    return (
      <View style={[styles.column]}>
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
    );
  }

  // Read-only string type - row layout
  return (
    <View style={styles.row}>
      <View style={[styles.contentMiddleRow, styles.paddingRight]}>
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
        <Text style={[styles.textValueShort, color]} numberOfLines={1}>
          {row?.key ? getDisplayValue(item[row.key], row.displayKey) : ''}
        </Text>
      </View>
    </View>
  );
};

export default ReadOnlyField;
