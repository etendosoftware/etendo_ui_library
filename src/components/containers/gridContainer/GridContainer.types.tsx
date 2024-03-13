import { ReactNode } from 'react';
import { ViewStyle } from 'react-native';

export interface IGridContainer {
  gap?: number;
  components?: ReactNode[];
  stylesContainer?: ViewStyle;
}
