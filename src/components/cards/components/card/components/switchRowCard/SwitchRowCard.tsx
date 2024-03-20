import React from 'react';
import { View, Text } from 'react-native';
import {
  CalendarIcon,
  CheckSquareicon,
  ClockIcon,
  SquareIcon,
} from '../../../../../../assets/images/icons';
import { styles } from './SwitchRowCard.style';
import { SwitchRowCardProps } from './SwitchRowCard.type';
const DOTS: string = '··························';

export const getIconByType = ({
  row,
  item,
  color = {},
}: SwitchRowCardProps) => {
  if (row?.key && (item[row.key] || item[row.key] === false)) {
    switch (row.type) {
      case 'date':
        return <CalendarIcon style={styles.calendar} fill={color.color} />;
      case 'time':
        return <ClockIcon style={styles.calendar} fill={color.color} />;
      case 'boolean':
        return item[row.key] ? (
          <CheckSquareicon style={styles.check} fill={color.color} />
        ) : (
          <SquareIcon style={styles.check} fill={color.color} />
        );
      default:
        break;
    }
  }
};
const SwitchRowCard = ({
  row,
  item,
  color = {},
  backgroundColor,
}: SwitchRowCardProps) => {
  if (!row) {
    return <></>;
  }

  if (row.type !== 'string' && row.type) {
    return (
      <View style={styles.row}>
        <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
          {DOTS}
        </Text>
        <View
          style={[
            styles.contentMiddleRow,
            styles.paddingRight,
            backgroundColor,
          ]}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
        </View>
        <View
          style={[
            styles.contentMiddleRow,
            styles.paddingLeft,
            backgroundColor,
          ]}>
          {getIconByType({ row, item, color })}
          {row.type !== 'boolean' && (
            <Text
              style={[styles.textValue, color]}
              ellipsizeMode="tail"
              numberOfLines={1}>
              {row?.key ? item[row.key] : ''}
            </Text>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.column}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {row?.label}
      </Text>
      <Text
        style={[styles.textValue, color]}
        ellipsizeMode="tail"
        numberOfLines={row?.numberOfLines ?? 2}>
        {row?.key ? item[row.key] : ''}
      </Text>
    </View>
  );
};

export default SwitchRowCard;
