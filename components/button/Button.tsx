import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import { NEUTRALS_100, PRIMARY_100, PRIMARY_80, QUATERNARY_100, QUATERNARY_50, SECONDARY_50 } from '../../styles/colors';
import {ButtonStyleVariant} from './Button.styles';
import {ButtonProps, ButtonStyleType} from './Button.types';

const Button = ({
  text,
  onPress,
  typeStyle,
  image,
  disabled,
  width = 'auto',
  height,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getHoveredBackgroundColor = (backgroundColor: ButtonStyleType) => {
    switch (backgroundColor) {
      case 'primary':
        return PRIMARY_80;
      case 'secondary':
        return SECONDARY_50;
      case 'terciary':
        return QUATERNARY_50;
      case 'whiteBorder':
        return PRIMARY_100;
    }
  };
  const getHoveredTextColorAndViewColor = (typeStyle: ButtonStyleType) => {
    switch (typeStyle) {
      case 'white':
        return QUATERNARY_100;
      case 'whiteBorder':
        return NEUTRALS_100;
      case 'primary':
        return NEUTRALS_100;
      default:
        return PRIMARY_100;
    }
  };

  const stateStyleContainer = () => {
    if (disabled) {
      return ButtonStyleVariant[typeStyle].containerDisabled;
    }
    if (isHovered) {
      const hoveredBackgroundColor = getHoveredBackgroundColor(typeStyle);
      return {
        ...ButtonStyleVariant[typeStyle].container,
        backgroundColor: hoveredBackgroundColor,
        width: width === 'full' ? '100%' : width,
      };
    }
    return ButtonStyleVariant[typeStyle].container;
  };
  const handleHoverIn = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };

  const stateStyleText = () => {
    if (disabled) {
      return ButtonStyleVariant[typeStyle].textDisabled;
    }
    if (isHovered) {
      const hoveredTextColor = getHoveredTextColorAndViewColor(typeStyle);
      if (hoveredTextColor) {
        return {
          ...ButtonStyleVariant[typeStyle].text,
          color: hoveredTextColor,
        };
      }
    }
    return ButtonStyleVariant[typeStyle].text;
  };

  const newImage =
    image &&
    React.cloneElement(image, {
      fill: isHovered
        ? getHoveredTextColorAndViewColor(typeStyle)
        : ButtonStyleVariant[typeStyle].imageColor,
    });

  return (
    <Pressable
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      style={[stateStyleContainer(), {height: height, width: width}]}
      onPress={onPress}
    >
      <View>{image && newImage}</View>
      <Text style={[stateStyleText()]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
