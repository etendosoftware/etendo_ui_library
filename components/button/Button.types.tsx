import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type ButtonStyleType =
  | 'primary'
  | 'secondary'
  | 'terciary'
  | 'whiteBorder'
  | 'white';

export type ButtonSizeType = 'small' | 'medium' | 'large';

export type buttonStyleVariant = Record<
  ButtonStyleType,
  {
    container: ViewStyle;
    text: TextStyle;
    containerDisabled: ViewStyle;
    textDisabled: TextStyle;
    imageColor: ImageStyle;
  }
>;

export type buttonSizeVariant = Record<
  ButtonSizeType,
  {
    buttonSize: TextStyle;
    containerSize: ViewStyle;
  }
>;

export interface ButtonProps {
  onPress: () => void;
  text: string;
  typeStyle: ButtonStyleType;
  image?: React.ReactNode;
  disabled?: boolean;
  typeSize: ButtonSizeType;
  width?: number | string;
  height?: number | string;
}
