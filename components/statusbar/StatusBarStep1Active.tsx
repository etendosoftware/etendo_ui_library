import React from 'react';
import {View, Text} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {StatusBarProps} from './StatusBar.types';

export const StatusBarStep1Active = ({data}: StatusBarProps) => {
  return (
    <View style={StatusBarStyleVariant.primary.containerStatusBar}>
      <View
        style={StatusBarStyleVariant.primary.containerStatusBarMiddleBlueTop}
      />
      <View
        style={
          StatusBarStyleVariant.primary.containerStatusBarMiddleYellowBottom
        }
      />

      <View style={StatusBarStyleVariant.primary.containerItemActive}>
        <Text style={StatusBarStyleVariant.primary.textActive}>
          {data[0].step}
        </Text>
      </View>
      <View style={StatusBarStyleVariant.primary.containerItemDisabled}>
        <Text
          style={StatusBarStyleVariant.primary.containerItemDisabledStep2Text}
        >
          {data[1].step}
        </Text>
        <Text
          style={StatusBarStyleVariant.primary.containerItemDisabledStep3Text}
        >
          {data[2].step}
        </Text>
      </View>
    </View>
  );
};
