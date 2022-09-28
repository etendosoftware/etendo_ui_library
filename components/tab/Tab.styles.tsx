/* Imports */
import {TabStyleRecord} from './Tab.types';
import {
  BLUE,
  GREY_10,
  GREY_BLUE_30,
  LIGHT_BLUE_10,
  WHITE,
  YELLOW,
} from '../../styles/colors';
import {INTER_SEMIBOLD} from '../../styles/fonts';

/* Export of different styles */
export const TabStyleVariant: TabStyleRecord = {
  primary: {
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    tabs: {
      marginTop: 50,
      paddingHorizontal: 20,
      height: 45,
      backgroundColor: GREY_BLUE_30,
      borderBottomWidth: 3,
      borderBottomColor: BLUE,
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
      fontFamily: INTER_SEMIBOLD,
      textTransform: 'uppercase',
    },
  },
  secondary: {
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: GREY_10,
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
      marginTop: 50,
      backgroundColor: LIGHT_BLUE_10,
      borderBottomColor: BLUE,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
    },
    tabsActive: {backgroundColor: YELLOW},
    itemText: {
      fontFamily: INTER_SEMIBOLD,
      textTransform: 'uppercase',
    },
  },
};
