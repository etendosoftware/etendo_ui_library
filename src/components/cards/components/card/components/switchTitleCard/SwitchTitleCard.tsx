import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './SwitchTitleCard.style';
import { SwitchTitleCardProps } from './SwitchTitleCard.type';
import { getIconByType } from '../switchRowCard/SwitchRowCard';

const SwitchTitleCard = ({
  row,
  item,
  color = {},
  isDivisor = false,
  disabled,
  onChange,
}: SwitchTitleCardProps) => {
  if (!row) {
    return <></>;
  }
  if (row.type === 'custom' && row.customComponent) {
    const CustomComponent = row.customComponent;

    return (
      <View style={[styles.rowTitle, !isDivisor && styles.noBorderBottom]}>
        <CustomComponent
          label={row?.label}
          value={row?.key ? item[row.key] : undefined}
          fieldKey={row.key || ''}
          onChange={onChange}
          disabled={disabled}
          {...row.customProps}
        />
      </View>
    );
  }

  return (
    <View style={[styles.row, !isDivisor && styles.noBorderBottom]}>
      <Text
        style={[styles.textName, color]}
        ellipsizeMode="tail"
        numberOfLines={1}>
        {row.label}
      </Text>
      <View style={styles.titleRowValue}>
        {getIconByType({ row, item, color, disabled })}
        {!['boolean', 'status'].includes(row.type) && (
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
