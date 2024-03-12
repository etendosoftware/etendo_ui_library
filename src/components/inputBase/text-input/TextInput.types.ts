import { IInputBase } from '../InputBase.types';

export interface ITextInput extends IInputBase {
  validation?: 'success' | 'error' | 'none';
}
