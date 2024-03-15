import { ReactNode } from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';

export interface ISearchContainer {
  buttons: ReactNode[];
  height?: number;
  onSubmit: (...params: any[]) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  widthSearchInput?: DimensionValue;
}
