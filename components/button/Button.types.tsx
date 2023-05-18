import {ColorValue, TextStyle, ViewStyle} from 'react-native';

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
  }
>;

export interface ButtonProps {
  onPress: () => void;
  text: string;
  typeStyle: ButtonStyleType;
  image?: React.ReactElement;
  disabled?: boolean;
  width?: number | string;
  height?: number | string;
}
