import {ColorValue, ImageSourcePropType, ViewStyle} from 'react-native';
import {BLACK, WHITE} from '../../styles/colors';

export type InputFieldVariants =
  | 'onlyRead'
  | 'picker'
  | 'textInput'
  | 'textPressable'
  | 'searchTextInput'
  | 'searchPressable';

export type InputFieldConfigType = {
  type: InputFieldType;
  image?: InputImageType;
  width?: string | number;
  height?: string | number;
  styleType?: ViewStyle;
  disabledField?: boolean;
  disabledSubmit?: boolean;
  backgroundColor?: ColorValue;
};

export const inputVariants: Record<
  InputFieldVariants,
  {field: InputFieldConfigType}
> = {
  onlyRead: {
    field: {
      type: 'onlyRead',
      disabledField: true,
      disabledSubmit: true,
      backgroundColor: BLACK,
    },
  },
  picker: {
    field: {
      type: 'text',
      disabledField: true,
      disabledSubmit: false,
      image: {
        imgHeight: 7,
        imgWidth: 10,
        imgRoute: require('./assets/images/pickerArrow.png'),
      },
    },
  },
  textInput: {
    field: {
      type: 'textInput',
      disabledField: true,
      disabledSubmit: false,
    },
  },
  textPressable: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
    },
  },
  searchTextInput: {
    field: {
      type: 'textInput',
      disabledField: false,
      disabledSubmit: false,
      image: {
        imgHeight: 12,
        imgWidth: 13,
        imgRoute: require('./assets/images/search.png'),
        imgMarginRight: 5,
      },
    },
  },
  searchPressable: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
      image: {
        imgHeight: 12,
        imgWidth: 13,
        imgRoute: require('./assets/images/search.png'),
        imgMarginRight: 5,
      },
    },
  },
};

export type InputFieldType = 'onlyRead' | 'textInput' | 'text';
export type InputImageType = {
  imgRoute?: ImageSourcePropType;
  imgWidth?: string | number;
  imgHeight?: string | number;
  imgMarginRight?: string | number;
};
