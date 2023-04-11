import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ButtonSizeVariant, ButtonStyleVariant} from './Button.styles';
import {ButtonProps} from './Button.types';

const Button = ({
  text,
  onPress,
  typeStyle,
  image,
  disabled,
  width,
  height,
}: ButtonProps) => {
  const stateStyleContainer = () => {
    if (disabled) {
      return ButtonStyleVariant[typeStyle].containerDisabled;
    }
    return ButtonStyleVariant[typeStyle].container;
  };

  const stateStyleText = () => {
    if (disabled) {
      return ButtonStyleVariant[typeStyle].textDisabled;
    }
    return ButtonStyleVariant[typeStyle].text;
  };

  return (
    <TouchableOpacity
      style={[stateStyleContainer(), {width: width, height: height}]}
      onPress={onPress}
    >
      <View>{image && image}</View>
      <Text style={[stateStyleText(), ButtonSizeVariant['medium'].buttonSize]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
