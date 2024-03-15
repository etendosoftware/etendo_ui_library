import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface IButtonContainer {
  buttons: ReactNode[];
  style?: StyleProp<ViewStyle>;
}
