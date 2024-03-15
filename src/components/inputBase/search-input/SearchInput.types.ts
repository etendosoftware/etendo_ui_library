import { IInputBase } from '../InputBase.types';

export interface ISearchInput extends Omit<IInputBase, 'keyboardType' | 'secureTextEntry'>  {
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: (text: string) => void;
}
