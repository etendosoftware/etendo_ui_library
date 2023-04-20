import React from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {InputVariantsType, TypeInputStyleVariant} from './Input.types';
import {
  BLUE,
  GREY_10,
  GREY_5,
  GREY_60,
  GREY_BLUE,
  GREY_BLUE_50,
  PURPLE_50,
  RED,
  RED_10,
  WHITE,
} from '../../styles/colors';
import {ArrowDown} from '../../assets/images/icons/ArrowDown';
import {SearchIcon} from '../../assets/images/icons/SearchIcon';
import {ShowPassword} from '../../assets/images/icons/ShowPassword';

export const inputVariants: InputVariantsType = {
  readOnly: {
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
      image: <ArrowDown style={{height: 10, width: 10}} />,
    },
  },
  textInput: {
    field: {
      type: 'textInput',
      disabledField: true,
      disabledSubmit: false,
    },
  },
  pressableText: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
    },
  },
  textInputSearch: {
    field: {
      type: 'textInput',
      disabledField: true,
      disabledSubmit: false,
      image: <SearchIcon style={{height: 15, width: 15}} />,
    },
  },
  pressableSearch: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
      image: <SearchIcon style={{height: 15, width: 15}} />,
    },
  },
  textInputPassword: {
    field: {
      type: 'textInput',
      image: <ShowPassword style={{height: 15, width: 15}} />,
      disabledField: true,
      disabledSubmit: false,
    },
  },
};

const defaultTitle: TextStyle = {
  color: BLUE,
  fontSize: 16,
};

const defaultField: ViewStyle = {
  overflow: 'hidden',
  height: 50,
  borderWidth: 2,
  borderColor: BLUE,
  borderRadius: 5,
  flexDirection: 'row',
  display: 'flex',
  alignItems: 'center',
  paddingRight: 15,
};

const defaultFocus: ViewStyle = {
  borderWidth: 5,
  borderColor: 'transparent',
  borderRadius: 10,
};

const defaultText: TextStyle = {
  color: BLUE,
  fontSize: 14,
  fontWeight: '500',
  flex: 1,
  alignItems: 'center',
  paddingLeft: 15,
  minWidth: 0,
  height: 50,
  display: 'flex',
  textAlignVertical: 'center',
};
const defaultTextPlaceholder: TextStyle = {
  color: GREY_BLUE,
  fontSize: 14,
  fontWeight: '500',
  flex: 1,
  alignItems: 'center',
  paddingLeft: 15,
  minWidth: 0,
  height: 50,
  display: 'flex',
  textAlignVertical: 'center',
};

const defaultHelperText: TextStyle = {
  color: GREY_60,
  fontSize: 14,
};

export const inputStyleVariants: TypeInputStyleVariant = {
  default: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: defaultField,
      focus: [
        defaultFocus,
        {
          borderColor: PURPLE_50,
        },
      ],
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: defaultHelperText,
  },
  destructive: {
    titleStyle: defaultTitle,
    fieldStyle: {
      focus: [
        defaultFocus,
        {
          borderColor: RED_10,
        },
      ],
      field: [defaultField, {borderColor: RED}],
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: [defaultHelperText, {color: RED}],
  },
  disabled: {
    titleStyle: [defaultTitle, {color: GREY_BLUE_50}],
    fieldStyle: {
      focus: defaultFocus,
      field: [defaultField, {borderColor: GREY_BLUE_50}],
      textDefault: [defaultText, {color: GREY_BLUE_50}],
      textPlaceholder: [defaultTextPlaceholder, {color: GREY_BLUE_50}],
    },
    helperStyle: [defaultHelperText, {color: GREY_BLUE_50}],
  },
  readOnly: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: [defaultField, {backgroundColor: GREY_5}],
      focus: defaultFocus,
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: defaultHelperText,
  },
};

export const styles = StyleSheet.create({
  inputContainer: {},
  inputImageSize: {
    height: 15,
    width: 15,
  },
  rowInputTitleImg: {
    height: 10,
    width: 10,
    marginRight: 5,
  },
  rowInputTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    height: 29,
    marginLeft: 5,
  },
  rowInputTitleText: {
    fontSize: 16,
    color: BLUE,
  },
  rowHelperText: {
    height: 25,
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginLeft: 5,
  },
  buttonContainerInputField: {
    alignSelf: 'flex-start',
    width: 35,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  passwordContainer: {
    right: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  showImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
  },
  passwordImage: {
    height: 22,
    width: 22,
  },
  storiesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storiesInputContainer: {
    height: 115,
    width: 300,
  },
  optionContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 35,
  },
  optionText: {
    color: BLUE,
    fontSize: 16,
  },
  optionFilterText: {
    color: BLUE,
    fontSize: 16,
    height: 35,
    padding: 0,
    width: '100%',
    paddingLeft: 10,
  },
  optionOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: WHITE,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: GREY_10,
    zIndex: 2,
  },
  optionsItemsContainer: {
    maxHeight: 140,
  },
  optionFilterContainer: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: GREY_10,
    marginHorizontal: 9,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
  },
  optionFilterImg: {
    width: 12,
    height: 12,
  },
});
