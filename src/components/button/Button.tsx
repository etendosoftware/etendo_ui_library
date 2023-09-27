import React, { useState } from 'react';
import { Pressable, Text, TouchableOpacity } from 'react-native';
import {
  NEUTRAL_50,
  PRIMARY_100,
  SECONDARY_300,
  TERTIARY_50,
  TERTIARY_800,
} from '../../styles/colors';
import { ButtonStyleVariant } from './Button.styles';
import { ButtonProps, ButtonStyleType } from './Button.types';

const Button = ({
  text,
  onPress,
  fontSize = 16,
  typeStyle,
  disabled,
  width = 'auto',
  height,
  iconLeft,
  iconRight,
}: ButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getHoveredBackgroundColor = (backgroundColor: ButtonStyleType) => {
    switch (backgroundColor) {
      case 'primary':
        return TERTIARY_800;
      case 'secondary':
        return SECONDARY_300;
      case 'terciary':
        return TERTIARY_50;
      case 'whiteBorder':
        return PRIMARY_100;
    }
  };
  const getHoveredTextColorAndViewColor = (typeStyle: ButtonStyleType) => {
    switch (typeStyle) {
      case 'white':
        return TERTIARY_800;
      case 'whiteBorder':
        return NEUTRAL_50;
      case 'primary':
        return NEUTRAL_50;
      default:
        return PRIMARY_100;
    }
  };

  const stateStyleContainer = (pressed: boolean) => {
    if (disabled) {
      return ButtonStyleVariant[typeStyle].containerDisabled;
    }
    if (pressed) {
      return {
        ...ButtonStyleVariant[typeStyle].container,

        opacity: 0.7,
        width: width === '100%' ? '100%' : width,
      };
    }
    if (isHovered) {
      const hoveredBackgroundColor = getHoveredBackgroundColor(typeStyle);
      return {
        ...ButtonStyleVariant[typeStyle].container,
        backgroundColor: hoveredBackgroundColor,
        width: width === '100%' ? '100%' : width,
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

  const stateStyleIcon = () => {
    if (disabled) {
      return ButtonStyleVariant[typeStyle].imageDisabled;
    }
    if (isHovered) {
      return isHovered
        ? getHoveredTextColorAndViewColor(typeStyle)
        : ButtonStyleVariant[typeStyle].imageColor;
    }
    return ButtonStyleVariant[typeStyle].imageColor;
  };
  const handleOnPress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity>
      <Pressable
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        style={({ pressed }) => [
          stateStyleContainer(pressed),
          { height: height, width: width },
        ]}
        onPress={handleOnPress}>
        {iconLeft &&
          React.cloneElement(iconLeft, {
            style: {
              width: iconLeft?.props?.style?.width || 16,
              height: iconLeft?.props?.style?.height || 16,
              marginRight: iconLeft?.props?.style?.marginRight || 8,
            },
            fill: stateStyleIcon(),
          })}
        <Text style={[stateStyleText(), { fontSize }]}>{text}</Text>
        {iconRight &&
          React.cloneElement(iconRight, {
            style: {
              width: iconRight?.props?.style?.width || 16,
              height: iconRight?.props?.style?.height || 16,
              marginLeft: iconRight?.props?.style?.marginLeft || 8,
            },
            fill: stateStyleIcon(),
          })}
      </Pressable>
    </TouchableOpacity>
  );
};

export default Button;
