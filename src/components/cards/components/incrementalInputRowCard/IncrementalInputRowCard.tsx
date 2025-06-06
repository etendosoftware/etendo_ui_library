import React, { useState } from 'react';
import { TextStyle, View, Text } from 'react-native';
import { CustomComponentProps } from '../../Cards.types';
import Button from '../../../button/Button';
import { styles } from './IncrementalInputRowCard.styles';
import { MinusIcon, PlusIcon } from '../../../../assets/images/icons';
import { TextInput } from '../../../inputBase';
import { NEUTRAL_500 } from '../../../../styles/colors';

interface IIncrementalInputRowCardProps extends CustomComponentProps {
  min?: number;
  max?: number;
  step?: number;
}

const IncrementalInputRowCard: React.FC<IIncrementalInputRowCardProps> = ({
  value,
  onChange,
  fieldKey,
  label,
  disabled,
  min = 0,
  max = 100,
  step = 1,
}) => {
  const [localValue, setLocalValue] = useState<number>(value ?? 0);

  const handleIncrement = () => {
    const newValue = Math.min(localValue + step, max);
    setLocalValue(newValue);
    if (onChange) {
      onChange(fieldKey, newValue);
    }
  };

  const handleDecrement = () => {
    const newValue = Math.max(localValue - step, min);
    setLocalValue(newValue);
    if (onChange) {
      onChange(fieldKey, newValue);
    }
  };

  const handleTextChange = (text: string) => {
    const numValue = parseInt(text, 10) || 0;
    const newValue = Math.max(Math.min(numValue, max), min);
    setLocalValue(newValue);
    if (onChange) {
      onChange(fieldKey, newValue);
    }
  };

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
      <View style={styles.container}>
        <Button
          onPress={handleDecrement}
          iconLeft={<MinusIcon />}
          disabled={disabled}
          typeStyle="terciary"
          paddingHorizontal={0}
          paddingVertical={0}
          height={40}
          width={40}
        />
        <View style={styles.inputContainer}>
          <TextInput
            isDisabled={disabled}
            value={localValue.toString()}
            onChangeText={handleTextChange}
            keyboardType="numeric"
            styleContainer={styles.textContainerStyle}
            styleInput={styles.textInputStyle}
          />
        </View>
        <Button
          onPress={handleIncrement}
          iconLeft={<PlusIcon />}
          disabled={disabled}
          typeStyle="terciary"
          paddingHorizontal={0}
          paddingVertical={0}
          height={40}
          width={40}
        />
      </View>
    </View>
  );
};

export default IncrementalInputRowCard;
