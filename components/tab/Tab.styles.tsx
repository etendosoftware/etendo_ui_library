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
      paddingLeft: 40,
    },
    tabs: {
      height: 35,
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
    itemText: {
      fontFamily: 'Poppins',
      textTransform: 'uppercase',
      fontWeight: '600',
      fontSize: 12,
      paddingHorizontal: 20,
      paddingVertical: 11,
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
