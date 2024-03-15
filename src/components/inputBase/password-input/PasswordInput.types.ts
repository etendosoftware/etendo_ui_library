import { IInputBase } from '../InputBase.types';

export interface IPasswordInput extends Omit<IInputBase, 'keyboardType' | 'secureTextEntry'> {
  value?: string;
  onChangeText?: (text: string) => void;
}
