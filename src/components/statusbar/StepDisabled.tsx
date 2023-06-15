import React from 'react';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {ItemProp} from './StatusBar.types';
import {ViewEtendo as View} from '../viewEtendo/ViewEtendo';
import {Text} from 'react-native';

export const StepDisabled = ({item}: ItemProp) => {
  return (
    <View style={StatusBarStyleVariant.primary.disabledStepContainer}>
      <Text style={StatusBarStyleVariant.primary.disabledStep}>
        {item.step}
      </Text>
    </View>
  );
};
