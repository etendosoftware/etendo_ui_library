import React from 'react';
import { View, Text } from 'react-native';
import {
  CalendarIcon,
  CheckFalseIcon,
  CheckTrueIcon,
} from '../../../../../../assets/images/icons';
import { styles } from './SwitchRowCard.style';
import { SwitchRowCardProps } from './SwitchRowCard.type';
const DOTS: string =
  '··································································································';

const SwitchRowCard = ({ row, item, color = {} }: SwitchRowCardProps) => {
  if (!row) {
    return;
  }
  if (row.type === 'boolean') {
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
          <Text style={[styles.dots, styles.alignDotsLeft]}>{DOTS} </Text>
          {row?.key && item[row.key] ? (
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
          )}
        </View>
      </View>
    );
  }
  if (row.type === 'date') {
    return (
      <View style={styles.row}>
        <View style={styles.rowWitchdotsContainer}>
          <Text
            style={[styles.textName, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.label}
          </Text>
          <Text style={[styles.dots, styles.alignDotsRight]}>{DOTS} </Text>
        </View>
        <View style={styles.rowWitchdotsContainer}>
          <Text style={[styles.dots, styles.alignDotsLeft]}>{DOTS} </Text>
          {row?.key && item[row.key] ? (
            <CalendarIcon style={styles.calendar} fill={color.color} />
          ) : null}
          <Text
            style={[styles.textValue, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.key ? item[row.key] : ''}
          </Text>
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
