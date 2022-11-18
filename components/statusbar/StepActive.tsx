import React from 'react';
import {Text, View} from 'react-native';
import {ItemProp} from './StatusBar.types';
import {StatusBarStyleVariant} from './StatusBar.styles';

export const StepActive = ({item, step}: ItemProp) => {
  return (
    <>
      <View
        style={StatusBarStyleVariant.primary.rectangleTopLeftYellow}
        key={item.key}
      >
        <View style={StatusBarStyleVariant.primary.rectangleTopLeftBlue} />
      </View>

      <View style={StatusBarStyleVariant.primary.activeStepContainer}>
        {step !== 1 && (
          <View style={StatusBarStyleVariant.primary.activeStepContent}>
            {item.componentActive}
          </View>
        )}
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
