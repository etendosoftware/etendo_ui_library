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
  WHITE,
} from '../../styles/colors';

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
        imgHeight: 4,
        imgWidth: 6,
        imgRoute: require('../../assets/images/icons/arrowPicker.png'),
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
        imgHeight: 12,
        imgWidth: 13,
        imgRoute: require('../../assets/images/icons/search.png'),
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
        imgRoute: require('../../assets/images/icons/search.png'),
        imgMarginRight: 5,
      },
    },
  },
};

const defaultTitle:TextStyle = {
  color: BLUE,
  fontSize: 10,
  fontFamily: FONT_MEDIUM,
  marginBottom:5,
}

const defaultField:ViewStyle = 
{
  backgroundColor: WHITE,
  borderWidth: 1,
  borderColor: BLUE,
  borderRadius: 3,
  flexDirection: 'row',
  alignItems:'center'
}

const defaultText:TextStyle =
{
  flex: 1,
  paddingVertical: 5,
  paddingLeft: 7,
  color: BLUE,
  fontSize: 10,
  fontWeight: '500',
  fontFamily: FONT_MEDIUM,
}

const defaultTextPlaceholder:TextStyle =
{
  flex: 1,
  paddingVertical: 5,
  paddingLeft: 7,
  color: GREY_BLUE,
  fontSize: 10,
  fontWeight: '500',
  fontFamily: FONT_MEDIUM,
}

const defaultHelperText:TextStyle =
{
  color: GREY_60,
  fontSize: 10,
  fontFamily: FONT_REGULAR,
}

export const inputStyleVariants: TypeInputStyleVariant = {
  default: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: defaultField,
      focus: {
        borderColor: PURPLE_50,
      },
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder
    },
    helperStyle: defaultHelperText,
  },
  destructive: {
    titleStyle: defaultTitle,
    fieldStyle: {
      focus: {
        borderColor: RED_10,
      },
      field: [defaultField,{borderColor: RED}],
      textDefault: defaultText,
      textPlaceholder: defaultTextPlaceholder
    },
    helperStyle: [defaultHelperText,{color: RED,}]
  },
  disabled: {
    titleStyle: [defaultTitle,{color: GREY_BLUE_50}],  
    fieldStyle: {
      focus: {},
      field: [defaultField,{borderColor: GREY_BLUE_50}],
      textDefault: [defaultText,{color:GREY_BLUE_50}],
      textPlaceholder: [defaultTextPlaceholder,{color:GREY_BLUE_50}]
    },
    helperStyle: [defaultHelperText,{color: GREY_BLUE_50}]
  },
  onlyRead: {
    titleStyle: defaultTitle,
    fieldStyle: {
      field: [defaultField,{backgroundColor:GREY_5}],
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
    marginTop: 5,
  },
  buttonContainerInputField: {
    alignSelf: 'flex-start',
    paddingHorizontal: 7,
    justifyContent: 'center',
    height:'100%',
  },
});
