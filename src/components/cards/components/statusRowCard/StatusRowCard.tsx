import { View, Text, TextStyle } from 'react-native';
import React from 'react';
import { styles } from './StatusRowCard.styles';
import { CustomComponentProps } from '../../Cards.types';
import { NEUTRAL_0, NEUTRAL_500 } from '../../../../styles/colors';

const DOTS: string = '··························';

interface ValueStyleConfig {
  backgroundColor: string;
  textColor: string;
  label?: string;
}

interface IStatusRowCardProps
  extends Omit<CustomComponentProps, 'onChange' | 'fieldKey'> {
  styleConfigByValue?: Record<string, ValueStyleConfig>;
}

const StatusRowCard = ({
  value,
  label,
  disabled,
  styleConfigByValue = {},
}: IStatusRowCardProps) => {
  const opacity = disabled ? 0.2 : 1;
  const styleForValue = styleConfigByValue[value] ??
    styleConfigByValue.default ?? {
      backgroundColor: NEUTRAL_500,
      textColor: NEUTRAL_0,
    };
  const displayValue = styleForValue.label ?? value;

  const changeTextColor = (): TextStyle | {} => {
    if (disabled) {
      return { color: NEUTRAL_500 };
    }
    return {};
  };

  return (
    <View style={styles.row}>
      <View style={[styles.contentMiddleRow, styles.paddingRight]}>
        <Text
          style={[styles.textName, changeTextColor()]}
          ellipsizeMode="tail"
          numberOfLines={1}>
          {label}
        </Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode="clip" style={styles.dots}>
        {DOTS}
      </Text>
      <View
        style={[
          styles.contentMiddleRow,
          styles.statusContainer,
          {
            opacity: opacity,
            backgroundColor: styleForValue.backgroundColor,
          },
        ]}>
        <Text style={{ color: styleForValue.textColor }}>{displayValue}</Text>
      </View>
    </View>
  );
};

export default StatusRowCard;
