import React from 'react';
import {View, Text, Image} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {StatusBarProps} from './StatusBar.types';

export const StatusBarStep3Active = ({data}: StatusBarProps) => {
  console.log(data);
  return (
    <View style={StatusBarStyleVariant.primary.containerStatusBar}>
      <View
        style={
          StatusBarStyleVariant.primary.containerStatusBarMiddleYellowBottom
        }
      />
      <View
        style={StatusBarStyleVariant.primary.containerStatusBarMiddleBlueTop}
      />

      <View
        style={StatusBarStyleVariant.primary.containerItemDisabledStep1AndStep2}
      >
        <Text
          style={
            StatusBarStyleVariant.primary
              .containerItemDisabledStep1TextSecundary
          }
        >
          {data[0].step}
        </Text>
        <Text
          style={
            StatusBarStyleVariant.primary
              .containerItemDisabledStep2TextSecundary
          }
        >
          {data[1].step}
        </Text>
      </View>
      <View style={StatusBarStyleVariant.primary.containerItemActiveStep3}>
        <Image
          source={require('../../assets/images/icons/calendar-secundary.png')}
          style={StatusBarStyleVariant.primary.step3Image}
        />
        <View
          style={
            StatusBarStyleVariant.primary.containerItemActiveStep3LeftSection
          }
        >
          <Text style={StatusBarStyleVariant.primary.activeItemStep3TextTop}>
            {data[2].activeTextTop}
          </Text>

          <Text style={StatusBarStyleVariant.primary.activeItemStep3TextBottom}>
            {data[2].activeTextBottom}
          </Text>
        </View>

        <Text style={StatusBarStyleVariant.primary.textActiveStep3}>
          {data[2].step}
        </Text>
      </View>
    </View>
  );
};
