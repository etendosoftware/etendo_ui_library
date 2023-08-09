import React from 'react';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { InputVariantsType, TypeInputStyleVariant } from './Input.types';

import { ArrowDown } from '../../assets/images/icons/ArrowDown';
import { SearchIcon } from '../../assets/images/icons/SearchIcon';
import { ShowPassword } from '../../assets/images/icons/ShowPassword';
import {
  DESTRUCTIVE_10,
  DESTRUCTIVE_100,
  NEUTRAL_0,
  NEUTRAL_10,
  NEUTRAL_5,
  NEUTRAL_500,
  NEUTRAL_60,
  NEUTRAL_600,
  PRIMARY_100,
  QUATERNARY_50,
} from '../../styles/colors';

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
      image: <ArrowDown style={{ height: 10, width: 10 }} />,
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
      image: <SearchIcon style={{ height: 15, width: 15 }} />,
    },
  },
  pressableSearch: {
    field: {
      type: 'text',
      disabledField: false,
      disabledSubmit: false,
      image: <SearchIcon style={{ height: 15, width: 15 }} />,
    },
  },
  textInputPassword: {
    field: {
      type: 'textInput',
      image: <ShowPassword style={{ height: 15, width: 15 }} />,
      disabledField: true,
      disabledSubmit: false,
    },
  },
};

const defaultTitle: TextStyle = {
  color: PRIMARY_100,
  fontSize: 18,
  fontWeight: '600',
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
  fontSize: 18,
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
  color: NEUTRAL_600,
  fontSize: 18,
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
  fontSize: 16,
  fontWeight: '500',
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
      field: [defaultField, { borderColor: DESTRUCTIVE_100 }],
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder,
    },
    helperStyle: [defaultHelperText, { color: DESTRUCTIVE_100 }],
  },
  disabled: {
    titleStyle: [defaultTitle, { color: QUATERNARY_50 }],
    fieldStyle: {
      focus: defaultFocus,
      field: [defaultField, { borderColor: QUATERNARY_50 }],
      textDefault: [defaultText, { color: QUATERNARY_50 }],
      textPlaceholder: [defaultTextPlaceholder, { color: QUATERNARY_50 }],
    },
    helperStyle: [defaultHelperText, { color: QUATERNARY_50 }],
  },
  readOnly: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: [defaultField, { backgroundColor: NEUTRAL_5 }],
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
  hideContainer: {
    height: 22,
    width: 22,
  },
  showContainer: {
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
    width: 49,
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
    paddingHorizontal: 8,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 8,
  },
  optionText: {
    color: PRIMARY_100,
    fontSize: 18,
  },
  optionFilterText: {
    color: PRIMARY_100,
    fontSize: 18,
    height: 40,
    padding: 0,
    flex: 1,
    fontWeight: '500',
    alignItems: 'center',
    display: 'flex',
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
    borderColor: NEUTRAL_500,
    zIndex: 2,
  },
  optionsItemsContainer: {
    maxHeight: 392,
  },
  optionFilterContainer: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 13,
  },
  optionFilterImg: {
    width: 15,
    height: 15,
  },
  cancelFilterImg: {
    width: 12,
    height: 12,
  },
  cancelContainer: {
    marginRight: 4,
  },
  scrollOptions: {
    marginVertical: 8,
  },
  searchContainer: { marginHorizontal: 8 },
  spaceInOptionsAndInput: { height: 5 },
  offSet: { height: 26 },
});
