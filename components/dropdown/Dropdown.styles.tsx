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
    container: {
      width: '17%',
      padding: 5,
    },
    dropDownButton: {
      flex: 1,
      backgroundColor: BLUE,
      padding: 11,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 10,
    },
    dropDownButtonText: {
      color: WHITE,
      fontSize: 18,
      fontWeight: '500',
      flex: 1,
      textAlign: 'center',
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
      top: -6,
    },
    option: {
      backgroundColor: GREY_5,
      borderBottomWidth: 1.5,
      borderBottomColor: GREY_BLUE_50,
      justifyContent: 'center',
    },
    textOption: {
      margin: 10,
      //   fontSize: 18,
      textAlign: 'left',
      fontWeight: '500',
    },
  },
};
