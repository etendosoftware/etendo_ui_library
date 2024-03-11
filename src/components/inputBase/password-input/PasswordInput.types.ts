import { IInputBase } from '../InputBase.types';


export interface IPasswordInput extends IInputBase {
    value?: string;
    onChangeText?: (text: string) => void;
}