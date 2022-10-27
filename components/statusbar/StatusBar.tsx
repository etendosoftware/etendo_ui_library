import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {RED} from '../../styles/colors';
import {StatusBarStyleVariant} from './StatusBar.styles';
import {StatusBarProps} from './StatusBar.types';

export const StatusBar = ({data, step}: StatusBarProps) => {
  if (step === 1) {
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
  } else if (step === 2) {
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
              .containerStatusBarMiddleOfMiddleHorizontalBlueBottom
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
          <View
            style={StatusBarStyleVariant.primary.activeItemStep2LeftSection}
          >
            <Image
              source={data[1].activeImage}
              style={StatusBarStyleVariant.primary.step2Image}
            />
            <View style={StatusBarStyleVariant.primary.activeItemStep2Text}>
              <Text
                style={StatusBarStyleVariant.primary.activeItemStep2TextTop}
              >
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
  } else if (step === 3) {
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
          style={
            StatusBarStyleVariant.primary.containerItemDisabledStep1AndStep2
          }
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

            <Text
              style={StatusBarStyleVariant.primary.activeItemStep3TextBottom}
            >
              {data[2].activeTextBottom}
            </Text>
          </View>

          <Text style={StatusBarStyleVariant.primary.textActiveStep3}>
            {data[2].step}
          </Text>
        </View>
      </View>
    );
  } else {
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
  }
};
