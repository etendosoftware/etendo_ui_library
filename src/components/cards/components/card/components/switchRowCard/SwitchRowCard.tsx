import React, { useState, useEffect } from 'react';
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
const MAX_VALUE_LENGTH = 20;

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
  disabled,
  onChange,
}: SwitchRowCardProps) => {
  const [shouldUseColumnLayout, setShouldUseColumnLayout] = useState(false);

  useEffect(() => {
    if (row?.type === 'string' && row?.key && item[row.key]) {
      const valueText = String(item[row.key]);
      setShouldUseColumnLayout(valueText.length > MAX_VALUE_LENGTH);
    }
  }, [row, item]);

  if (!row) {
    return <></>;
  }

  if (row.type === 'custom' && row.customComponent) {
    const CustomComponent = row.customComponent;

    return (
      <CustomComponent
        label={row?.label}
        value={row?.key ? item[row.key] : undefined}
        fieldKey={row.key || ''}
        onChange={onChange}
        disabled={disabled}
        {...row.customProps}
      />
    );
  }

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
          {row?.key ? item[row.key] : ''}
        </Text>
      </View>
    );
  } else {
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
            {row?.key ? item[row.key] : ''}
          </Text>
        </View>
      </View>
    );
  }
};

export default SwitchRowCard;
