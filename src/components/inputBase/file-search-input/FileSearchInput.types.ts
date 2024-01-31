import { Animated } from 'react-native';
import { IInputBase } from '../InputBase.types';

export interface FileSearchInputProps extends IInputBase {
    value: string;
    setFile?: (file: any) => void;
    onChangeText: (text: string) => void;
    onSubmit: (message: string, file?: any) => void;
    placeholder: string;
    uploadFile?: (file: any) => Promise<void>;
    maxFileSize?: number;
    loadedFile?: boolean;
    setLoadedFile?: (loaded: boolean) => void;
}

export interface FileStatusDisplayProps {
    file: any;
    progressAnim: Animated.Value;
    handleDeleteFile: () => void;
}