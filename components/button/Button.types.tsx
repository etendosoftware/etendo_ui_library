import {ImageSourcePropType, TextStyle, ViewStyle} from 'react-native'

export type ButtonStyleType = 'primary' | 'secondary' |'terciary' |'whiteBorder' | 'white' ;

export type ButtonSizeType = 'small' | 'medium' | 'large' ;

export type buttonStyleVariant= Record<
ButtonStyleType, {
    container: ViewStyle,
    text: TextStyle,
    containerDisabled: ViewStyle,
    textDisabled: TextStyle,
}> 

export type buttonSizeVariant = Record<
ButtonSizeType, {
    buttonSize: TextStyle,
    containerSize: ViewStyle,
}> 

export type ImageType = {
    imgRoute?: ImageSourcePropType;
    imgWidth?: string | number;
    imgHeight?: string | number;
    imgMarginRight?: string | number;
};

export interface ButtonProps {
    onPress: () => void;
    text: string;
    typeStyle: ButtonStyleType,
    image?: ImageType,
    disabled?: boolean,
    typeSize: ButtonSizeType,
};