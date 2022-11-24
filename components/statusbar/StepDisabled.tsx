import React from 'react';
import {Text} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {ItemProp} from './StatusBar.types';
import {ViewEtendo as View} from '../viewEtendo/ViewEtendo';

export const StepDisabled = ({item}: ItemProp) => {
  return (
    <View style={StatusBarStyleVariant.primary.disabledStepContainer}>
      <Text style={StatusBarStyleVariant.primary.disabledStep}>
        {item.step}
      </Text>
    </View>
  );
};
