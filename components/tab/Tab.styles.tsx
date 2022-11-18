/* Imports */
import {TabStyleRecord} from './Tab.types';
import {
  BLUE,
  GREY_BLUE_30,
  LIGHT_BLUE_10,
  WHITE,
  YELLOW,
} from '../../styles/colors';

/* Export of different styles */
export const TabStyleVariant: TabStyleRecord = {
  /* Primary style */
  primary: {
    container: {
      flexDirection: 'row',
      backgroundColor: GREY_BLUE_30,
      borderBottomColor: BLUE,
      borderBottomWidth: 3,
      flex: 1,
      paddingLeft: 50,
    },
    containerSecundary: {
      flexDirection: 'row',
      backgroundColor: GREY_BLUE_30,
      borderBottomColor: BLUE,
      borderBottomWidth: 3,
      flex: 1,
    },
    tabs: {
      height: 35,
      backgroundColor: GREY_BLUE_30,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 4,
      borderTopColor: 'transparent',
    },
    tabsSecundary: {
      height: 40,
      width: 184,
      backgroundColor: GREY_BLUE_30,
      justifyContent: 'center',
      alignItems: 'center',
      borderTopWidth: 4,
      borderTopColor: 'transparent',
    },
    tabsActive: {
      backgroundColor: BLUE,
      borderTopWidth: 4,
      borderTopColor: YELLOW,
    },
    tabsActiveSecundary: {
      width: 184,
      backgroundColor: BLUE,
      borderTopWidth: 4,
      borderTopColor: YELLOW,
    },
    itemText: {
      fontFamily: 'Poppins',
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: 12,
      paddingHorizontal: 20,
      paddingVertical: 11,
    },
    itemTextSecundary: {
      fontFamily: 'Poppins',
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: 12,
      paddingVertical: 100,
      paddingHorizontal: 100,
    },
  },
  /* Secondary style */
  secondary: {
    container: {
      flexDirection: 'row',
    },
    containerTabs: {
      borderRadius: 10,
      backgroundColor: WHITE,
      paddingHorizontal: 11,
      height: 62,
    },
    tabs: {
      marginHorizontal: 11,
      paddingHorizontal: 20,
      height: 37,
      backgroundColor: LIGHT_BLUE_10,
      borderBottomColor: BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },

    tabsActive: {backgroundColor: YELLOW},
    itemText: {
      // fontFamily: INTER_SEMIBOLD,
      textTransform: 'uppercase',
      fontWeight: '500',
    },
  },
};
