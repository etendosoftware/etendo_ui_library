import { ReactElement } from 'react';
import {
  ColorValue,
  ImageStyle,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';
import { ButtonProps } from '../button/Button.types';

export interface SvgImageProps {
  style?: ImageStyle;
  fill?: ColorValue;
}

export type RightButtons = ReactElement<ButtonProps | SvgImageProps>[];

export interface IInputBase {
  helperText?: string;
  icon?: ReactElement<SvgImageProps>;
  isDisabled?: boolean;
  isError?: boolean;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
  onSubmitEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  placeholder?: string;
  rightButtons?: RightButtons;
  title?: string;
  value?: string;
  onPress?: () => void;
  secureTextEntry?: boolean;
  keyboardType?:
    | 'default'
    | 'numeric'
    | 'email-address'
    | 'url'
    | 'number-pad'
    | 'phone-pad'
    | 'decimal-pad'
    | 'web-search'
    | 'visible-password';
  styleContainer?: ViewStyle;
  isFocusable?: boolean;
  refInputContainer?: any;
}
