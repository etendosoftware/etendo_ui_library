import React from 'react';
import {Text, View} from 'react-native';
import {Info, ItemProp} from './StatusBar.types';
import {StatusBarStyleVariant} from './StatusBar.styles';

export const StepActive = ({item}: ItemProp) => {
  return (
    <>
      <View
        style={StatusBarStyleVariant.primary.rectangleTopLeftYellow}
        key={item.key}
      >
        <View style={StatusBarStyleVariant.primary.rectangleTopLeftBlue} />
      </View>

      <View style={StatusBarStyleVariant.primary.activeStepContainer}>
        <View style={StatusBarStyleVariant.primary.activeStepContent}>
          {item.componentActive}
        </View>
        <Text style={StatusBarStyleVariant.primary.activeStep}>
          {item.step}
        </Text>
      </View>

      <View style={StatusBarStyleVariant.primary.rectangleBottomRightBlue}>
        <View
          style={StatusBarStyleVariant.primary.rectangleBottomRightYellow}
        />
      </View>
    </>
  );
};
