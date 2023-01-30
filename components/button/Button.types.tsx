import {
  ImageSourcePropType,
  ImageStyle,
  TextStyle,
  ViewStyle,
} from 'react-native';

export type ButtonStyleType =
  | 'primary'
  | 'secondary'
  | 'terciary'
  | 'whiteBorder'
  | 'white';

export type ButtonSizeType = 'small' | 'medium' | 'large';

export type buttonStyleVariant = Record<
  ButtonStyleType,
  {
    container: ViewStyle;
    text: TextStyle;
    containerDisabled: ViewStyle;
    textDisabled: TextStyle;
    imageColor: ImageStyle;
  }
>;

export type buttonSizeVariant = Record<
  ButtonSizeType,
  {
    buttonSize: TextStyle;
    containerSize: ViewStyle;
  }
>;

export type ImageType = {
  imgRoute?: ImageSourcePropType;
  imgWidth?: string | number;
  imgHeight?: string | number;
  imgMarginRight?: string | number;
};

export interface ButtonProps {
<<<<<<< HEAD
    onPress: () => void;
    text: string;
    typeStyle: ButtonStyleType,
    image?: ImageType,
    disabled?: boolean,
    fontSize: ButtonSizeType,
};
=======
  onPress: () => void;
  text: string;
  typeStyle: ButtonStyleType;
  image?: ImageType;
  disabled?: boolean;
  typeSize: ButtonSizeType;
  width?: number | string;
  height?: number | string;
}
>>>>>>> 1c1af782d80cf14592d82d6b8914d194436a09bc
