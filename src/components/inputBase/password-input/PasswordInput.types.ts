import { IInputBase } from '../InputBase.types';

export interface IPasswordInput extends Omit<IInputBase, 'keyboardType'> {
  value?: string;
  onChangeText?: (text: string) => void;
}
