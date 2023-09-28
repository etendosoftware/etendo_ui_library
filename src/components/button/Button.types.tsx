import { ColorValue, TextStyle, ViewStyle } from 'react-native';

export type ButtonStyleType =
  | 'primary'
  | 'secondary'
  | 'terciary'
  | 'whiteBorder'
  | 'white';

export type buttonStyleVariant = Record<
  ButtonStyleType,
  {
    container: ViewStyle;
    text: TextStyle;
    containerDisabled: ViewStyle;
    textDisabled: TextStyle;
    imageColor: ColorValue;
    imageDisabled: ColorValue;
  }
>;

export interface ButtonProps {
  onPress?: () => void;
  text?: string;
  typeStyle: ButtonStyleType;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
  fontSize?: number;
  paddingHorizontal?: number | string;
  paddingVertical?: number | string;
}
