import { ReactElement, ReactNode } from 'react';

export interface IInputButtons {
  icon: ReactElement;
  onPress?: () => void;
}

export interface IInputBase {
  value?: string;
  placeholder?: string;
  title?: string;
  helperText?: string;
  isDisabled?: boolean;
  isError?: boolean;
  onChangeText?: (value: string) => void;
  icon?: IInputButtons;
  rightButtons?: ReactNode[];
  onSubmit?: (...params: any[]) => void;
}

