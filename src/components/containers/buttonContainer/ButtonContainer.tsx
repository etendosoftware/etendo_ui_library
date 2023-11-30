import React, { FC } from 'react';
import { View } from 'react-native';
import { DEFAULT_BUTTON_CONTAINER } from './ButtonContainer.default';
import { IButtonContainer } from './ButtonContainer.types';

const ButtonContainer: FC<IButtonContainer> = ({ components, style }) => {
  return (
    <View style={[DEFAULT_BUTTON_CONTAINER, style]}>
      {components.map((component, index) => (
        <View key={index}>{component}</View>
      ))}
    </View>
  );
};

export default ButtonContainer;
