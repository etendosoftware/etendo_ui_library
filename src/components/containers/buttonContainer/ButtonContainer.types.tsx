import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface IButtonContainer {
  components: ReactNode[];
  style?: StyleProp<ViewStyle>;
}
