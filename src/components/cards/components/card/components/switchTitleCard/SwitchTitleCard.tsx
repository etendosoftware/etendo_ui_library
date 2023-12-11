import React from 'react';
import { View, Text } from 'react-native';
import {
  CalendarIcon,
  CheckFalseIcon,
  CheckTrueIcon,
} from '../../../../../../assets/images/icons';
import { styles } from './SwitchTitleCard.style';
import { SwitchTitleCardProps } from './SwitchTitleCard.type';

const SwitchTitleCard = ({ row, item, color = {} }: SwitchTitleCardProps) => {
  if (!row) {
    return;
  }
  const renderContent = () => {
    if (row.type === 'boolean') {
      return (
        <View style={styles.titleRowValue}>
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
      );
    }

    if (row.type === 'date') {
      return (
        <View style={styles.titleRowValue}>
          {row?.key && item[row.key] ? (
            <CalendarIcon style={styles.calendar} fill={color.color} />
          ) : null}
          <Text
            style={[styles.textValueBold, color]}
            ellipsizeMode="tail"
            numberOfLines={1}>
            {row?.key ? item[row.key] : ''}
          </Text>
        </View>
      );
    }
    return (
      <Text
        style={[styles.textValueBold, color]}
        ellipsizeMode="tail"
        numberOfLines={2}>
        {row?.key ? item[row.key] : ''}
      </Text>
    );
  };
  return (
    <View style={styles.row}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {row.label}
      </Text>
      {renderContent()}
    </View>
  );
};

export default SwitchTitleCard;
