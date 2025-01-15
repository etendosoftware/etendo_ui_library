import { StyleProp, TextStyle } from 'react-native';

export interface TextMessageProps {
    title?: string;
    text: string;
    files?: File[];
    time?: string;
    type?: 'left-user' | 'right-user' | 'error';
    backgroundColor?: string;
}