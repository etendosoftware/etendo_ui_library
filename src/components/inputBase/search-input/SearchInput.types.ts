import { IInputBase } from '../InputBase.types';

export interface ISearchInput extends IInputBase {
  value?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: (text: string) => void;
}
