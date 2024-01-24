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
  onChangeText?: (value: string) => void;
  onSubmit?: (...params: any[]) => void;
  placeholder?: string;
  rightButtons?: ReactNode[];
  title?: string;
  value?: string;
}
