import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import {InputVariantsType, TypeInputStyleVariant} from './Input.types';
import {
  BLUE,
  GREY_10,
  GREY_40,
  GREY_5,
  GREY_60,
  GREY_BLUE,
  GREY_BLUE_50,
  PURPLE_50,
  RED,
  RED_10,
  WHITE,
} from '../../styles/colors';
import {arrowPickerVerticalIcon, searchIcon} from '../../assets/images/icons';

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
        imgRoute: searchIcon,
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
        imgRoute: searchIcon,
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
  storiesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  storiesInputContainer: {
    height: 100,
    width: '30%',
  },
  optionContainer: {
    paddingHorizontal: 9,
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
    paddingHorizontal: 15,
    paddingBottom: 5,
    height: 150,
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
