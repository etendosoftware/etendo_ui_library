import { ReactElement, ReactNode } from 'react';

export interface IInputButtons {
  icon: ReactElement;
  onPress?: () => void;
}

export interface IInputBase {
  helperText?: string;
  icon?: IInputButtons;
  isDisabled?: boolean;
  isError?: boolean;
  isLoading?: boolean;
  onBlur?: () => void;
  onChangeText?: (value: string) => void;
  onSubmit?: (...params: any[]) => void;
  placeholder?: string;
  rightButtons?: ReactNode[];
  title?: string;
  value?: string;
  onPress?: () => void;
  keyboardType?: 'default' | 'numeric' | 'email-address' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password';
}
