import React, {useState} from 'react';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import {
  NEUTRAL_0,
  PRIMARY_100,
  PRIMARY_80,
  QUATERNARY_10,
  QUATERNARY_100,
  SECONDARY_50,
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
        return PRIMARY_80;
      case 'secondary':
        return SECONDARY_50;
      case 'terciary':
        return QUATERNARY_10;
      case 'whiteBorder':
        return PRIMARY_100;
    }
  };
  const getHoveredTextColorAndViewColor = (typeStyle: ButtonStyleType) => {
    switch (typeStyle) {
      case 'white':
        return QUATERNARY_100;
      case 'whiteBorder':
        return NEUTRAL_0;
      case 'primary':
        return NEUTRAL_0;
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

  return (
    <TouchableOpacity>
      <Pressable
        onHoverIn={handleHoverIn}
        onHoverOut={handleHoverOut}
        style={({pressed}) => [
          stateStyleContainer(pressed),
          {height: height, width: width},
        ]}
        onPress={onPress}
      >
        <View>
          {image &&
            React.cloneElement(image, {
              fill: isHovered
                ? getHoveredTextColorAndViewColor(typeStyle)
                : ButtonStyleVariant[typeStyle].imageColor,
            })}
        </View>
        <Text style={[stateStyleText()]}>{text}</Text>
      </Pressable>
    </TouchableOpacity>
  );
};

export default Button;
