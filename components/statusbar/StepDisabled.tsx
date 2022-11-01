import React from 'react';
import {Text, View} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {ItemProp} from './StatusBar.types';

export const StepDisabled = ({item}: ItemProp) => {
  return (
    <View style={StatusBarStyleVariant.primary.disabledStepContainer}>
      <Text style={StatusBarStyleVariant.primary.disabledStep}>
        {item.step}
      </Text>
    </View>
  );
};
