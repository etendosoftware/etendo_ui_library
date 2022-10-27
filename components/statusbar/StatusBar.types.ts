/* Imports */
import {
  ImageStyle,
  TextStyle,
  ViewStyle,
  ImageSourcePropType,
} from 'react-native';

/* Type declaration */
export type Info = {
  step: string;
  activeImage: ImageSourcePropType;
  activeTextTop?: string;
  activeTextBottom?: string;
};

export interface StatusBarProps {
  data: Info[];
  step: number;
}

/* Declaration of style types */
export type StatusBarStyleType = 'primary';

export type StatusBarStyleRecord = Record<
  StatusBarStyleType,
  {
    // General container of the status bar
    containerStatusBar: ViewStyle;

    // Containers the status bar with blue color
    containerStatusBarMiddleBlueTop: ViewStyle;
    containerStatusBarMiddleBlueBottom: ViewStyle;
    containerStatusBarMiddleOfMiddleHorizontalBlueTop: ViewStyle;

    // Containers the status bar with yellow color
    containerStatusBarMiddleYellowTop: ViewStyle;
    containerStatusBarMiddleYellowBottom: ViewStyle;
    containerStatusBarMiddleOfMiddleHorizontalYellowTop: ViewStyle;
    containerStatusBarMiddleOfMiddleHorizontalYellowBottom: ViewStyle;

    // Disabled items section containers
    containerItemDisabled: ViewStyle;
    containerItemDisabledStep2: ViewStyle;
    containerItemDisabledStep3Right: ViewStyle;
    containerItemDisabledStep1AndStep2: ViewStyle;

    // Active items section containers
    containerItemActive: ViewStyle;
    containerItemActiveStep2: ViewStyle;
    containerItemActiveStep3: ViewStyle;
    containerItemActiveStep3LeftSection: ViewStyle;
    activeItemStep2LeftSection: ViewStyle;

    // Disable texts
    containerItemDisabledStep1Text: TextStyle;
    containerItemDisabledStep2Text: TextStyle;
    containerItemDisabledStep3Text: TextStyle;
    containerItemDisabledStep3TextRight: TextStyle;
    containerItemDisabledStep1TextSecundary: TextStyle;
    containerItemDisabledStep2TextSecundary: TextStyle;

    // Active texts
    textActive: TextStyle;
    textActiveStep3: TextStyle;
    activeItemStep2Text: ViewStyle;
    activeItemStep2TextTop: TextStyle;
    activeItemStep2TextBottom: TextStyle;
    activeItemStep2TextRight: TextStyle;
    activeItemStep3TextTop: TextStyle;
    activeItemStep3TextBottom: TextStyle;

    // images based on the active step
    step2Image: ImageStyle;
    step3Image: ImageStyle;
  }
>;
