import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

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
    imageColor: ImageStyle;
  }
>;

export interface ButtonProps {
  onPress: () => void;
  text: string;
  typeStyle: ButtonStyleType;
  image?: React.ReactNode;
  disabled?: boolean;
  width?: number | string | 'full';
  height?: number | string;
}
