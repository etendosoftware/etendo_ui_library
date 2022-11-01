import React from 'react';
import {Image, Text, View} from 'react-native';
import {StatusBarStyleVariant} from './StatusBar.styles';

export const Component = () => {
  return (
    <>
      <Image
        source={require('../../assets/images/icons/calendar-secundary.png')}
        style={StatusBarStyleVariant.primary.activeComponentImage}
      />
      <View style={StatusBarStyleVariant.primary.activeStepContentRightSection}>
        <Text style={StatusBarStyleVariant.primary.textTopActiveStepContent}>
          Current Plan date
        </Text>
        <Text style={StatusBarStyleVariant.primary.textBottomActiveStepContent}>
          03 January, 2022
        </Text>
      </View>
    </>
  );
};
