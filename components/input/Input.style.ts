import { BLUE, GREY_5, GREY_60, GREY_BLUE, GREY_BLUE_50, PURPLE_50, RED, RED_10, WHITE } from "../../styles/colors";
import { FONT_REGULAR } from "../../styles/fonts";
import { InputVariantsType, TypeInputStyleVariant } from "./Input.types";

export const inputVariants: InputVariantsType= {
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
        disabledField: true,
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

  export const inputStyleVariants:TypeInputStyleVariant = {
    default: {
      titleStyle: {
        color: BLUE,
        fontSize:14, 
        fontFamily: 'Inter-Regular', 
        fontWeight: '700',
        marginLeft:5
      },
      fieldStyle: {
        field:
        {
          alignItems:'flex-start',
          backgroundColor:WHITE,
          borderWidth: 2,
          borderColor: BLUE,
          borderRadius: 5,
          flexDirection:'row',
        },
        focus:
        {
          borderColor: PURPLE_50
        },
        textDefault:
        {
          padding:5,
          flex:1,
          color: BLUE,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        },
        textPlaceholder:
        {
          padding:5,
          flex:1,
          color: GREY_BLUE,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        }
      },
     
      helperStyle:{
        color: GREY_60,
        fontSize:12,
        fontFamily: FONT_REGULAR,
        marginLeft:5
      }
    },
    destructive: {
      titleStyle: {
        color: BLUE,
        fontSize:14, 
        fontFamily: FONT_REGULAR, 
        fontWeight: '700',
        marginLeft:5
      },
      fieldStyle: {
        focus:
        {
       borderColor: RED_10
        },
        field:
        {
          alignItems:'flex-start',
          backgroundColor:WHITE,
          borderWidth: 2,
          borderColor: RED,
          borderRadius: 5,
          flexDirection:'row',
        },
        textDefault:
        {
          flex:1,
          padding:5,
          color: BLUE,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        },
        textPlaceholder:
        {
          flex:1,
          padding:5,
          color: GREY_BLUE,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        }
      },
      helperStyle:{
        color: RED,
        fontSize:12,
        fontFamily: FONT_REGULAR,
        marginLeft:5
      }
    },
    disabled: {
      titleStyle: {
        color: GREY_BLUE_50,
        fontSize:14, 
        fontFamily: FONT_REGULAR, 
        fontWeight: '700',
        marginLeft:5
      },
      fieldStyle: {
        focus:
        {
  
        },
        field:
        {
          alignItems:'flex-start',
          backgroundColor:WHITE,
          borderWidth: 2,
          borderColor: GREY_BLUE_50,
          borderRadius: 5,
          flexDirection:'row',
        },
        textDefault:
        {
          flex:1,
          padding:5,
          color: GREY_BLUE_50,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        },
        textPlaceholder:
        {
          fontSize:12,
          color: GREY_BLUE_50,
          fontFamily: FONT_REGULAR,
        }
      },
      helperStyle:{
        color: GREY_BLUE_50,
        fontSize:12,
        fontFamily: FONT_REGULAR,
        marginLeft:5
      }
    },
    onlyRead: {
      titleStyle: {
        color: BLUE,
        fontSize:14, 
        fontFamily: FONT_REGULAR, 
        fontWeight: '700',
        marginLeft:5
      },
      fieldStyle: {
        field:
        {
          alignItems:'flex-start',
          backgroundColor:WHITE,
          borderWidth: 2,
          borderColor: BLUE,
          borderRadius: 5,
          flexDirection:'row',
        },
        focus:
        {
        
        },
        textDefault:
        {
          padding:5,
          color: BLUE,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        },
        textPlaceholder:
        {
          flex:1,
          padding:5,
          color: GREY_BLUE,
          fontSize:14,
          fontFamily: FONT_REGULAR,
        }
      },
     
      helperStyle:{
        color: GREY_60,
        fontSize:12,
        fontFamily: FONT_REGULAR,
        marginLeft:5
      }
    },
  }
  
  