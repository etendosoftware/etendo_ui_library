import React, {useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {
  BLUE_90,
  GREEN_10,
  LIGHT_BLUE_10,
  PURPLE_10,
  RED,
  YELLOW_30,
} from '../../styles/colors';
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
        return BLUE_90;
      case 'secondary':
        return YELLOW_30;
      case 'terciary':
        return PURPLE_10;
      case 'white':
        return LIGHT_BLUE_10;
      case 'whiteBorder':
        return GREEN_10;
      default:
        return RED;
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
    return ButtonStyleVariant[typeStyle].text;
  };

  return (
    <Pressable
      onHoverIn={handleHoverIn}
      onHoverOut={handleHoverOut}
      style={[stateStyleContainer(), {height: height}]}
      onPress={onPress}
    >
      <View>{image && image}</View>
      <Text style={[stateStyleText()]}>{text}</Text>
    </Pressable>
  );
};

export default Button;
