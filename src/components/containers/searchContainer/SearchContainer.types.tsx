import { ReactNode } from 'react';
import { DimensionValue, StyleProp, ViewStyle } from 'react-native';

export interface ISearchContainer {
  components: ReactNode[];
  style?: StyleProp<ViewStyle>;
  value?: string;
  onSubmit: (...params: any[]) => void;
  placeholder?: string;
  height?: number;
  widthSearchInput?: DimensionValue;
}
