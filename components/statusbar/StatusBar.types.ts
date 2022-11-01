import {View} from 'react-native';
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
  routeNav: string;
  key: string;
  componentActive: any;
};

export interface StatusBarProps {
  data: Info[];
  step: number;
}

export type ItemProp = {
  item: Info;
};

/* Declaration of style types */
export type StatusBarStyleType = 'primary';

export type StatusBarStyleRecord = Record<
  StatusBarStyleType,
  {
    // General container of the status bar
    statusBarContainer: ViewStyle;

    activeStep: TextStyle;
    activeStepContainer: ViewStyle;
    rectangleTopLeftBlue: ViewStyle;
    rectangleTopLeftYellow: ViewStyle;
    rectangleBottomRightBlue: ViewStyle;
    rectangleBottomRightYellow: ViewStyle;
    disabledStep: TextStyle;
    disabledStepContainer: ViewStyle;
    activeStepContent: ViewStyle;
    activeStepContentRightSection: ViewStyle;

    activeComponentImage: ImageStyle;
    textTopActiveStepContent: TextStyle;
    textBottomActiveStepContent: TextStyle;
  }
>;
