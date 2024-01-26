import { Animated } from 'react-native';
import { IInputBase } from '../InputBase.types';

export type SendData = {
    file: any;
    url: string;
    method: string;
};

export interface FileSearchInputProps extends IInputBase {
    value: string;
    setFile: (file: any) => void;
    onChangeText: (text: string) => void;
    onSubmit: (message: string, file?: any) => void;
    placeholder: string;
    sendData?: SendData;
    maxFileSize?: number;
}

export interface FileStatusDisplayProps {
    file: any;
    progressAnim: Animated.Value;
    handleDeleteFile: () => void;
}