/* Imports */
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

/* Type declaration */
export type Info = {
  name: string;
  route: string;
  key: string;
};

export interface DropdownProps {
  data: Info[];
  onChangeSelected: (Info: Info | undefined) => Info;
  text: string;
  style?: DropdownStyleType;
  typeSizeText: DropdownStyleFontSize;
}

export interface DropdownItemProps {
  item: Info;
  onPress: () => void;
  index: number;
  toggleItem: number;
  styleText?: DropdownStyleType;
  sizeText: DropdownStyleFontSize;
}

/* Declaration of style types */
export type DropdownStyleType = 'primary';
export type DropdownStyleFontSize = 'small' | 'medium' | 'large';

export type DropdownStyleRecord = Record<
  DropdownStyleType,
  {
    container: ViewStyle;
    dropDownButton?: ViewStyle;
    dropDownButtonText: TextStyle;
    iconWithOptionsDisplayed: StyleProp<ImageStyle>;
    iconWithOptionsNotDisplayed: StyleProp<ImageStyle>;
    containerOptions: ViewStyle;
    option: ViewStyle;
    textOption: TextStyle;
  }
>;

export type DropdownStyleText = Record<
  DropdownStyleFontSize,
  {
    fontSize: TextStyle;
  }
>;
