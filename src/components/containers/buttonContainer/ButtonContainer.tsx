import React, { FC } from 'react';
import { View } from 'react-native';
import { DEFAULT_BUTTON_CONTAINER } from './ButtonContainer.default';
import { IButtonContainer } from './ButtonContainer.types';

const ButtonContainer: FC<IButtonContainer> = ({ buttons, style }) => {
  return (
    <View style={[DEFAULT_BUTTON_CONTAINER, style]}>
      {buttons.map((button, index) => (
        <View key={index}>{button}</View>
      ))}
    </View>
  );
};

export default ButtonContainer;
