import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {FONT_MEDIUM, FONT_REGULAR} from '../../styles/fonts';
import {InputVariantsType, TypeInputStyleVariant} from './Input.types';
import {
  BLUE,
  GREY_5,
  GREY_60,
  GREY_BLUE,
  GREY_BLUE_50,
  PURPLE_50,
  RED,
  RED_10,
} from '../../styles/colors';
import {arrowPickerVerticalIcon} from '../../assets/images/icons';

export const inputVariants: InputVariantsType = {
  onlyRead: {
    field: {
      type: 'text',
      disabledField: true,
      disabledSubmit: true,
    },
  },
  picker: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: true,
      image: {
        imgHeight: 8,
        imgWidth: 12,
        imgRoute: arrowPickerVerticalIcon,
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
      disabledField: true,
      disabledSubmit: false,
      image: {
        imgHeight: 15,
        imgWidth: 15,
        imgRoute: require('../../assets/images/icons/search.png'),
      },
    },
  },
  searchPressable: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
      image: {
        imgHeight: 15,
        imgWidth: 15,
        imgRoute: require('../../assets/images/icons/search.png'),
      },
    },
  },
};

const defaultTitle: TextStyle = {
  color: BLUE,
  fontSize: 14,
  marginTop: 10,
};

const defaultField: ViewStyle = {
  borderWidth: 1,
  borderColor: BLUE,
  marginVertical: 5,
  borderRadius: 5,
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: 3,
};

const defaultText: TextStyle = {
  width: '100%',
  padding: 10,
  color: BLUE,
  fontSize: 14,
  fontWeight: '500',
};

const defaultTextPlaceholder: TextStyle = {
  width: '100%',
  fontSize: 14,
  padding: 10,
  color: GREY_BLUE,
  fontWeight: '500',
};

const defaultHelperText: TextStyle = {
  color: GREY_60,
  fontSize: 14,
  fontFamily: FONT_REGULAR,
};

export const inputStyleVariants: TypeInputStyleVariant = {
  default: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: defaultField,
      focus: {
        borderColor: PURPLE_50,
      },
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: defaultHelperText,
  },
  destructive: {
    titleStyle: defaultTitle,
    fieldStyle: {
      focus: {
        borderColor: RED_10,
      },
      field: [defaultField, {borderColor: RED}],
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: [defaultHelperText, {color: RED}],
  },
  disabled: {
    titleStyle: [defaultTitle, {color: GREY_BLUE_50}],
    fieldStyle: {
      focus: {},
      field: [defaultField, {borderColor: GREY_BLUE_50}],
      textDefault: [defaultText, {color: GREY_BLUE_50}],
      textPlaceholder: [defaultTextPlaceholder, {color: GREY_BLUE_50}],
    },
    helperStyle: [defaultHelperText, {color: GREY_BLUE_50}],
  },
  onlyRead: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: [defaultField, {backgroundColor: GREY_5}],
      focus: {},
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: defaultHelperText,
  },
};

export const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  rowInputTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowHelperText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainerInputField: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  passwordContainer: {
    right: 20,
    position: 'absolute',
    alignSelf: 'center',
    marginLeft: 10,
  },
  showImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    position: 'absolute',
    right: 10,
  },
  passwordImage: {
    height: 22,
    width: 22,
  },
});
