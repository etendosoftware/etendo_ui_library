import React from 'react';
import {View, Text, Image} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {StatusBarProps} from './StatusBar.types';

export const StatusBarStep2Active = ({data}: StatusBarProps) => {
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

      <View
        style={
          StatusBarStyleVariant.primary
            .containerStatusBarMiddleOfMiddleHorizontalYellowTop
        }
      />

      <View
        style={
          StatusBarStyleVariant.primary
            .containerStatusBarMiddleOfMiddleHorizontalYellowBottom
        }
      />

      <View
        style={
          StatusBarStyleVariant.primary
            .containerStatusBarMiddleOfMiddleHorizontalBlueTop
        }
      />

      <View style={StatusBarStyleVariant.primary.containerItemDisabledStep2}>
        <Text
          style={StatusBarStyleVariant.primary.containerItemDisabledStep1Text}
        >
          {data[0].step}
        </Text>
      </View>
      <View style={StatusBarStyleVariant.primary.containerItemActiveStep2}>
        <View style={StatusBarStyleVariant.primary.activeItemStep2LeftSection}>
          <Image
            source={data[1].activeImage}
            style={StatusBarStyleVariant.primary.step2Image}
          />
          <View style={StatusBarStyleVariant.primary.activeItemStep2Text}>
            <Text style={StatusBarStyleVariant.primary.activeItemStep2TextTop}>
              {data[1].activeTextTop}
            </Text>
            <Text
              style={StatusBarStyleVariant.primary.activeItemStep2TextBottom}
            >
              {data[1].activeTextBottom}
            </Text>
          </View>
        </View>
        <Text style={StatusBarStyleVariant.primary.activeItemStep2TextRight}>
          {data[1].step}
        </Text>
      </View>
      <View
        style={StatusBarStyleVariant.primary.containerItemDisabledStep3Right}
      >
        <Text
          style={
            StatusBarStyleVariant.primary.containerItemDisabledStep3TextRight
          }
        >
          {data[2].step}
        </Text>
      </View>
    </View>
  );
};
