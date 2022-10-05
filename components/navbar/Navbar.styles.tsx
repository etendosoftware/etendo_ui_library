/* Imports */
import {NavbarStyleHorizontal, NavbarStyleVertical} from './Navbar.types';
import {BLUE} from '../../styles/colors';

/* Export of different styles */
export const NavbarHStyleVariant: NavbarStyleHorizontal = {
  // Mobile screen
  mobile: {
    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
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
  },
  // Desktop screen
  desktop: {
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
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
  },
};

export const NavbarVStyleVariant: NavbarStyleVertical = {
  // Generic screen
  generic: {
    container: {
      flex: 1,
      marginTop: '20',
      marginBottom: '20',
      backgroundColor: BLUE,
    },
  },
};
