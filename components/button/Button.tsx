import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import {ButtonSizeVariant, ButtonStyleVariant} from './Button.styles';
import addImageStyle from '../../helpers/image_utils';
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
      onPress={onPress}>
      {image?.imgRoute && (
        <Image
          source={image.imgRoute}
          style={[
            addImageStyle(image),
            {opacity: disabled ? 0.2 : 1},
            ButtonStyleVariant[typeStyle].imageColor,
          ]}
        />
      )}
      <Text style={[stateStyleText(), ButtonSizeVariant['medium'].buttonSize]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
