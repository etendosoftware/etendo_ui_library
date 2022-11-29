/* Imports */
import {DropdownStyleRecord} from './Dropdown.types';
import {
  BLUE,
  GREY_BLUE,
  GREY_5,
  GREY_BLUE_50,
  WHITE,
} from '../../styles/colors';

/* Export of different styles */
export const DropdownStyleVariant: DropdownStyleRecord = {
  /* Primary style */
  primary: {
    container: {flex: 1},
    dropDownButton: {
      backgroundColor: WHITE,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 34,
      zIndex: 50,
    },
    dropDownButtonText: {
      color: BLUE,
      fontSize: 13,
      fontFamily: 'Poppins',
      fontWeight: '500',
    },
    iconWithOptionsDisplayed: {
      width: 14,
      height: 14,
      tintColor: WHITE,
      transform: [{rotate: '180deg'}],
    },
    iconWithOptionsNotDisplayed: {
      width: 14,
      height: 14,
      tintColor: WHITE,
    },
    containerOptions: {
      marginTop: 2,
      borderWidth: 1,
      borderColor: GREY_BLUE,
      borderRadius: 3,
      width: '100%',
      zIndex: 50,
    },
    option: {
      backgroundColor: GREY_5,
      borderBottomWidth: 1.5,
      borderBottomColor: GREY_BLUE_50,
      justifyContent: 'center',
      borderRadius: 3,
    },
    textOption: {
      margin: 4,
      fontSize: 13,
      textAlign: 'left',
      fontWeight: '500',
      color: BLUE,
      fontFamily: 'Poppins',
    },
  },
};
