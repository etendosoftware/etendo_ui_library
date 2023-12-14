import React from 'react';
import { View, Text } from 'react-native';
import {
  CalendarIcon,
  CheckFalseIcon,
  CheckTrueIcon,
  TimeIcon,
} from '../../../../../../assets/images/icons';
import { styles } from './SwitchRowCard.style';
import { SwitchRowCardProps } from './SwitchRowCard.type';
const DOTS: string =
  '··································································································';

export const getIconByType = ({
  row,
  item,
  color = {},
}: SwitchRowCardProps) => {
  if (row?.key && item[row.key]) {
    switch (row.type) {
      case 'date':
        return <CalendarIcon style={styles.calendar} fill={color.color} />;
      case 'time':
        return <TimeIcon style={styles.calendar} fill={color.color} />;
      case 'boolean':
        return item[row.key] ? (
          <CheckTrueIcon
            style={styles.check}
            stroke={color.color}
            fill={'transparent'}
          />
        ) : (
          <CheckFalseIcon
            style={styles.check}
            stroke={color.color}
            fill={'transparent'}
          />
        );
      default:
        break;
    }
  }
};
const SwitchRowCard = ({ row, item, color = {} }: SwitchRowCardProps) => {
  if (!row) {
    return;
  }

  if (row.type !== 'string' && row.type) {
    return (
      <View style={styles.row}>
        <View style={styles.rowWitchdotsContainer}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
          <Text style={[styles.dots, styles.alignDotsRight]}>{DOTS}</Text>
        </View>
        <View style={styles.rowWitchdotsContainer}>
          <Text style={[styles.dots, styles.alignDotsLeft]}>{DOTS}</Text>
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
        numberOfLines={2}>
        {row?.key ? item[row.key] : ''}
      </Text>
    </View>
  );
};

export default SwitchRowCard;
