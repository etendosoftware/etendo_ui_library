import {
  ColorValue,
  GestureResponderEvent,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type InputFieldType = 'textInput' | 'text';

export type InputTypeStyle =
  | 'default'
  | 'destructive'
  | 'disabled'
  | 'onlyRead';

export type InputFieldVariants =
  | 'onlyRead'
  | 'picker'
  | 'textInput'
  | 'textPressable'
  | 'searchTextInput'
  | 'searchPressable';

export type KeyboardTypes = 'text' | 'number';

export type InputFieldConfigType = {
  type: InputFieldType;
  image?: ImageType;
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

export type ImageType = {
  imgRoute?: string;
  imgWidth?: string | number;
  imgHeight?: string | number;
  imgMarginRight?: string | number;
};

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
  titleImage?: ImageType;
  value: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  maxLength?: number;
  centerText?: boolean;
  numberOfLines?: number;
  typeField: InputFieldVariants;
  keyboardType?: KeyboardTypes;
  fontSize?: number;
  height?: number | string;
  password?: boolean;
  dataPicker?: any;
  displayKey?: string;
  onPress?: (event?: GestureResponderEvent) => void;
  onSubmit?: (event?: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onFocus?: (event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onOptionSelected?: any;
}

export interface InputTitleProps {
  title?: string;
  image?: ImageType;
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
  numberOfLines?: number;
  fontSize?: number;
  height?: number | string;
  password?: boolean;
  dataPicker?: any;
  displayKey?: string;
  onOptionSelected?: any;
  onPress?: (event?: GestureResponderEvent) => void;
  onSubmit?: (event?: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onFocus: (event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur: (event?: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export interface InputHelperProps {
  styleHelper: TextStyle | TextStyle[];
  label?: string;
}

export interface InputOptionsProps {
  data: any;
  displayKey?: string;
  onOptionSelected: (item: any, index: number) => void;
  showOptions: boolean;
  positionModal: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
  onClose: (event?: GestureResponderEvent) => void;
  onChangeFilterText: (text: string) => void;
  filterValue: string;
}
