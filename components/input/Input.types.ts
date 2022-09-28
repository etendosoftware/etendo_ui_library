import {ColorValue, GestureResponderEvent, ImageSourcePropType, NativeSyntheticEvent, TextInputFocusEventData, TextStyle, ViewStyle} from 'react-native';

export type InputFieldType = 'textInput' | 'text';

export type InputTypeStyle = 'default' |'destructive' | 'disabled' | 'onlyRead'

export type InputFieldVariants =
  | 'onlyRead'
  | 'picker'
  | 'textInput'
  | 'textPressable'
  | 'searchTextInput'
  | 'searchPressable';

export type InputFieldConfigType = {
  type: InputFieldType;
  image?: ImageType;
  width?: string | number;
  height?: string | number;
  disabledField?: boolean;
  disabledSubmit?: boolean;
  backgroundColor?: ColorValue;
};

export type InputVariantsType =  Record<
InputFieldVariants,
{field: InputFieldConfigType}
> 

export type ImageType = {
  imgRoute?: ImageSourcePropType;
  imgWidth?: string | number;
  imgHeight?: string | number;
  imgMarginRight?: string | number;
};

export type TypeInputStyleVariant = Record<
InputTypeStyle,
  {fieldStyle: {field:ViewStyle,focus:ViewStyle ,textDefault: TextStyle,textPlaceholder: TextStyle},titleStyle: TextStyle, helperStyle: TextStyle }
>

//Props
export interface InputProps {
  titleLabel?: string;
  titleImage?: ImageType;
  value: string;
  helperText?: string;
  placeholder?: string;
  disabled?: boolean;
  isError?: boolean;
  maxLenght?:number;
  numberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
  onSubmit?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onFocus?: (event:  NativeSyntheticEvent<TextInputFocusEventData>)=> void;
  onBlur?: (event:  NativeSyntheticEvent<TextInputFocusEventData>)=> void;
  typeField: InputFieldVariants;
}

export interface InputTitleProps {
  title?: string;
  image?: ImageType;
  styleTitle: TextStyle;
  disabled?:boolean;
}

export interface InputHelperProps
{
  styleHelper: TextStyle;
  label?: string;
}

export interface InputFieldProps {
  disabled?: boolean;
  value?: string;
  placeholder?: string;
  configField: InputFieldConfigType;
  styleField: {field:ViewStyle,focus:ViewStyle ,textDefault: TextStyle,textPlaceholder: TextStyle}
  maxLenght?:number;
  numberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
  onSubmit?: (event: GestureResponderEvent) => void;
  onChangeText?: (text: string) => void;
  onFocus:  (event:  NativeSyntheticEvent<TextInputFocusEventData>)=> void;
  onBlur: (event:  NativeSyntheticEvent<TextInputFocusEventData>) => void;
}
