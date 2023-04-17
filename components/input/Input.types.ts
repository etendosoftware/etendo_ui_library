import {
  ColorValue,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TargetedEvent,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type InputFieldType = 'textInput' | 'text';

export type InputTypeStyle =
  | 'default'
  | 'destructive'
  | 'disabled'
  | 'readOnly';

export type InputFieldVariants =
  | 'readOnly'
  | 'picker'
  | 'textInput'
  | 'textInputSearch'
  | 'textInputPassword'
  | 'pressableText'
  | 'pressableSearch';

export type KeyboardTypes = 'text' | 'number';

export type InputFieldConfigType = {
  type: InputFieldType;
  image?: React.ReactElement;
  width?: string | number;
  height?: string | number;
  disabledField?: boolean;
  disabledSubmit?: boolean;
  backgroundColor?: ColorValue;
};

export type InputVariantsType = Record<
  InputFieldVariants,
  {field: InputFieldConfigType}
>;

export type TypeInputStyleVariant = Record<
  InputTypeStyle,
  {
    fieldStyle: {
      field: ViewStyle | ViewStyle[];
      focus: ViewStyle | ViewStyle[];
      textDefault: TextStyle | TextStyle[];
      textPlaceholder: TextStyle | TextStyle[];
    };
    titleStyle: TextStyle | TextStyle[];
    helperStyle: TextStyle | TextStyle[];
  }
>;

export interface InputProps {
  titleLabel?: string;
  titleImage?: React.ReactElement;
  value: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  maxLength?: number;
  centerText?: boolean;
  typeField: InputFieldVariants;
  keyboardType?: KeyboardTypes;
  onPress?: (event: GestureResponderEvent) => void;
  onSubmit?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onFocus?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur?: (event: NativeSyntheticEvent<TargetedEvent>) => void;
}

export interface InputTitleProps {
  titleLabel?: string;
  titleImage?: React.ReactElement;
  styleTitle: TextStyle | TextStyle[];
  disabled?: boolean;
}

export interface InputHelperProps {
  styleHelper: TextStyle | TextStyle[];
  label?: string;
}

export interface InputFieldProps {
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  configField: InputFieldConfigType;
  keyboardType?: KeyboardTypes;
  styleField: {
    field: ViewStyle | ViewStyle[];
    focus: ViewStyle | ViewStyle[];
    textDefault: TextStyle | TextStyle[];
    textPlaceholder: TextStyle | TextStyle[];
  };
  type: InputFieldVariants;
  maxLength?: number;
  centerText?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  onSubmit?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onFocus: (event: NativeSyntheticEvent<TargetedEvent>) => void;
  onBlur: (event: NativeSyntheticEvent<TargetedEvent>) => void;
}

export interface InputHelperProps {
  styleHelper: TextStyle | TextStyle[];
  label?: string;
}
