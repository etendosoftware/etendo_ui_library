import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {ButtonSizeVariant, ButtonStyleVariant} from './Button.styles';
import {addImageStyle} from '../../helpers/image_utils';
import {ButtonProps} from './Button.types';

const Button = ({
  text,
  onPress,
  typeStyle,
  image,
  disabled,
<<<<<<< HEAD
  fontSize,
=======
  width,
  height,
>>>>>>> 1c1af782d80cf14592d82d6b8914d194436a09bc
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
<<<<<<< HEAD
    <View>
      <TouchableOpacity
        style={[
          stateStyleContainer(),
          ButtonSizeVariant[fontSize].containerSize,
        ]}
        onPress={onPress}
      >
        {image?.imgRoute && (
          <Image
            source={image.imgRoute}
            style={[
              addImageStyle(image),
              {opacity: disabled ? 0.2 : 1},
              ButtonStyleVariant[typeStyle].imageColor,
            ]}
          ></Image>
        )}
        <Text
          style={[stateStyleText(), ButtonSizeVariant[fontSize].buttonSize]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </View>
=======
    <TouchableOpacity
      style={[stateStyleContainer(), {width: width, height: height}]}
      onPress={onPress}
    >
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
>>>>>>> 1c1af782d80cf14592d82d6b8914d194436a09bc
  );
};

export default Button;
