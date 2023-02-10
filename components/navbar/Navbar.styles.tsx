/* Imports */

import {NavbarStyleHorizontal, NavbarStyleVertical} from './Navbar.types';
import {BLUE, WHITE} from '../../styles/colors';
import { StyleSheet } from 'react-native';

/* Export of different styles */
export const NavbarHStyleVariant: NavbarStyleHorizontal = {
  // Mobile screen
  mobile: {
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    tinyLogo: {
      width: 112,
      height: 28,
    },
    tinyLogoImage: {
      width: 112,
      height: 28,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    navIcons: {
      width: 28,
      height: 28,
      marginRight: '25px',
    },
    user: {
      width: 28,
      height: 28,
      marginRight: '15px',
      marginLeft: '22px',
    },
    textUser: {
      fontSize: 15,
      fontWeight: 'bold',
      color: BLUE,
    },
    more: {
      width: 28,
      height: 28,
      marginLeft: '90%',
      position: 'absolute',
    },
    logout: {
      backgroundColor: BLUE,
      borderRadius: 5,
    },
    textLogout: {
      color: WHITE,
      alignSelf: 'center',
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,
      fontWeight: '700',
      fontSize: 12,
    },
  },
  // Tablet screen
  tablet: {
    container: {flex: 1, flexDirection: 'row', justifyContent: 'space-between'},
    containerImages: {
      width: 550,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },
    tinyLogo: {
      width: 112,
      height: 28,
    },
    tinyLogoImage: {
      width: 112,
      height: 28,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    navIcons: {
      width: 28,
      height: 28,
      marginRight: '25px',
    },
    user: {
      width: 28,
      height: 28,
      marginRight: '15px',
      marginLeft: '22px',
    },
    textUser: {
      fontSize: 16,
      fontWeight: 'bold',
      color: BLUE,
    },
    more: {
      width: 28,
      height: 28,
      marginLeft: '90%',
      position: 'absolute',
    },
    logout: {
      backgroundColor: BLUE,
      borderRadius: 5,
    },
    textLogout: {
      color: WHITE,
      alignSelf: 'center',
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,

      fontWeight: '700',
      fontSize: 12,
    },
  },
  // Desktop screen
  desktop: {
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    containerImages: {
      width: 550,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      flex: 1,
    },
    containerUser: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    tinyLogo: {
      width: 112,
      height: 28,
    },
    tinyLogoImage: {
      width: 112,
      height: 28,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
    },
    navIcons: {
      width: 25,
      height: 25,
      marginRight: '25px',
    },
    user: {
      width: 28,
      height: 28,
      marginRight: '15px',
      marginLeft: '22px',
    },
    textUser: {
      marginRight: 30,
      fontSize: 12,
      fontWeight: '700',
      color: BLUE,
    },
    more: {
      width: 28,
      height: 28,
      marginLeft: '90%',
      position: 'absolute',
    },
    logout: {
      backgroundColor: BLUE,
      borderRadius: 5,
    },
    textLogout: {
      color: WHITE,
      alignSelf: 'center',
      padding: 10,
      paddingLeft: 15,
      paddingRight: 15,

      fontWeight: '700',
      fontSize: 12,
    },
  },
};

export const NavbarVStyleVariant: NavbarStyleVertical = {
  // Generic screen
  generic: {
    container: {
      flex: 1,
      backgroundColor: BLUE,
    },
  },
};

export const styles = StyleSheet.create({
  storiesContainer: {
    width: 100, height: 355
  }
});
