import { IInputBase } from '../InputBase.types';

interface UploadConfig {
    file: any;
    url: string;
    method: string;
    headers?: HeadersInit_;
}

export interface FileSearchInputProps extends IInputBase {
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: (message: string, file?: any) => void;
    placeholder: string;
    setFile?: (file: any) => void;
    onFileUploaded?: (fileId: string | number) => void;
    maxFileSize?: number;
    uploadConfig?: UploadConfig | undefined,
}