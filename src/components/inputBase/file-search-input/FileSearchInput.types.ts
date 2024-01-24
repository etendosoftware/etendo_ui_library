import { IInputBase } from '../InputBase.types';

export interface FileSearchInputProps extends IInputBase {
    value: string;
    placeholder: string;
    onChangeText: (text: string) => void;
    onSubmit?: (message: string, file?: any) => void;
    setFile: (file: any) => void;
    isSimulation: boolean;
    fetchData?: { file: any, url: string, method: string };
}
