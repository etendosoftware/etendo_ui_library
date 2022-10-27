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

export type ArrayInfo = Array<Info>;

export interface StatusBarProps {
  data: Info[];
  step: number;
}

/* Declaration of style types */
export type StatusBarStyleType = 'primary';

export type StatusBarStyleRecord = Record<
  StatusBarStyleType,
  {
    containerStatusBar: ViewStyle;
    containerStatusBarMiddleYellowTop: ViewStyle;

    containerStatusBarMiddleBlueTop: ViewStyle;
    containerStatusBarMiddleYellowBottom: ViewStyle;

    containerItemDisabled: ViewStyle;
    containerItemActive: ViewStyle;
    containerItemDisabledStep2Text: TextStyle;
    containerItemDisabledStep3Text: TextStyle;

    textActive: TextStyle;

    containerItemActiveStep2: ViewStyle;
    containerItemDisabledStep2: ViewStyle;

    containerStatusBarMiddleOfMiddleHorizontalYellowTop: ViewStyle;
    containerStatusBarMiddleOfMiddleHorizontalBlueBottom: ViewStyle;
    containerItemDisabledStep3Right: ViewStyle;
    containerStatusBarMiddleOfMiddleHorizontalBlueTop: ViewStyle;

    containerItemDisabledStep1Text: TextStyle;
    containerItemDisabledStep3TextRight: TextStyle;

    activeItemStep2LeftSection: ViewStyle;

    containerItemDisabledStep1AndStep2: ViewStyle;
    containerItemActiveStep3: ViewStyle;
    containerStatusBarMiddleBlueBottom: ViewStyle;
    containerItemDisabledStep1TextSecundary: TextStyle;
    containerItemDisabledStep2TextSecundary: TextStyle;
    textActiveStep3: TextStyle;
    activeItemStep2Text: ViewStyle;
    activeItemStep2TextTop: TextStyle;
    activeItemStep2TextBottom: TextStyle;
    activeItemStep2TextRight: TextStyle;
    containerItemActiveStep3LeftSection: ViewStyle;
    activeItemStep3TextTop: TextStyle;
    activeItemStep3TextBottom: TextStyle;

    step2Image: ImageStyle;
    step3Image: ImageStyle;
  }
>;
