import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './SwitchTitleCard.style';
import { SwitchTitleCardProps } from './SwitchTitleCard.type';
import { getIconByType } from '../switchRowCard/SwitchRowCard';

const SwitchTitleCard = ({
  row,
  item,
  color = {},
  isEmptyData = false,
}: SwitchTitleCardProps) => {
  if (!row) {
    return;
  }
  return (
    <View style={[styles.row, isEmptyData && { borderBottomWidth: 0 }]}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {row.label}
      </Text>
      <View style={styles.titleRowValue}>
        {getIconByType({ row, item, color })}
        {row.type !== 'boolean' && (
          <Text
            style={[styles.textValueBold, color]}
            ellipsizeMode="tail"
            numberOfLines={2}>
            {row?.key ? item[row.key] : ''}
          </Text>
        )}
      </View>
    </View>
  );
};

export default SwitchTitleCard;
