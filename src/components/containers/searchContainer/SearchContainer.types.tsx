import { DimensionValue, StyleProp, ViewStyle } from 'react-native';
import { ISearchInput } from '../../inputBase/search-input/SearchInput.types';
import { RightButtons } from '../../inputBase/InputBase.types';

export interface ISearchContainer extends Omit<ISearchInput, 'styleContainer'>{
  buttons?: RightButtons;
  height?: number;
  onSubmit: (...params: any[]) => void;
  placeholder?: string;
  style?: StyleProp<ViewStyle>;
  value?: string;
  widthSearchInput?: DimensionValue;
  styleContainer?: ViewStyle;
  styleGridContainer?: ViewStyle;
  gridGapHorizontal?: number;
  gridGapVertical?: number;
}
