import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface ITitleContainer {
  buttons?: ReactNode[];
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<ViewStyle>;
  buttonsGap?: number;
  title: string;
}
