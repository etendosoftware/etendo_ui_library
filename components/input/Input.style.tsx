import React from 'react';
import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {InputVariantsType, TypeInputStyleVariant} from './Input.types';

import {ArrowDown} from '../../assets/images/icons/ArrowDown';
import {SearchIcon} from '../../assets/images/icons/SearchIcon';
import {ShowPassword} from '../../assets/images/icons/ShowPassword';
import {
  DESTRUCTIVE_10,
  DESTRUCTIVE_100,
  NEUTRAL_0,
  NEUTRAL_10,
  NEUTRAL_5,
  NEUTRAL_60,
  PRIMARY_100,
  QUATERNARY_50,
  TERTIARY_100,
} from '../../styles/colors';

export const inputVariants: InputVariantsType = {
  readOnly: {
    field: {
      type: 'text',
      disabledField: true,
      disabledSubmit: true,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
  picker: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: true,
      image: <ArrowDown style={{height: 10, width: 10}} />,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
  textInput: {
    field: {
      type: 'textInput',
      disabledField: true,
      disabledSubmit: false,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
  pressableText: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
  textInputSearch: {
    field: {
      type: 'textInput',
      disabledField: true,
      disabledSubmit: false,
      image: <SearchIcon style={{height: 15, width: 15}} />,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
  pressableSearch: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
      image: <SearchIcon style={{height: 15, width: 15}} />,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
  textInputPassword: {
    field: {
      type: 'textInput',
      image: <ShowPassword style={{height: 15, width: 15}} />,
      disabledField: true,
      disabledSubmit: false,
      placeholderStyle: {
        fontSize: 14,
        lineHeight: 22,
        letterSpacing: -1,
      },
    },
  },
};

const defaultTitle: TextStyle = {
  color: PRIMARY_100,
  fontSize: 16,
};

const defaultField: ViewStyle = {
  overflow: 'hidden',
  height: 50,
  borderWidth: 2,
  borderColor: PRIMARY_100,
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
  color: PRIMARY_100,
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
  color: TERTIARY_100,
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
  color: NEUTRAL_60,
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
          borderColor: QUATERNARY_50,
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
          borderColor: DESTRUCTIVE_10,
        },
      ],
      field: [defaultField, {borderColor: DESTRUCTIVE_100}],
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: [defaultHelperText, {color: DESTRUCTIVE_100}],
  },
  disabled: {
    titleStyle: [defaultTitle, {color: QUATERNARY_50}],
    fieldStyle: {
      focus: defaultFocus,
      field: [defaultField, {borderColor: QUATERNARY_50}],
      textDefault: [defaultText, {color: QUATERNARY_50}],
      textPlaceholder: [defaultTextPlaceholder, {color: QUATERNARY_50}],
    },
    helperStyle: [defaultHelperText, {color: QUATERNARY_50}],
  },
  readOnly: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: [defaultField, {backgroundColor: NEUTRAL_5}],
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
    height: 22,
    width: 22,
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
    color: PRIMARY_100,
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
    color: PRIMARY_100,
    fontSize: 16,
  },
  optionFilterText: {
    color: PRIMARY_100,
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
    backgroundColor: NEUTRAL_0,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: NEUTRAL_10,
    zIndex: 2,
  },
  optionsItemsContainer: {
    maxHeight: 140,
  },
  optionFilterContainer: {
    height: 35,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_10,
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
