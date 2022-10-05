/* Imports */
import {NavbarStyleHorizontal, NavbarStyleVertical} from './Navbar.types';
import {
  BLUE,
  GREY_BLUE_30,
  LIGHT_BLUE_10,
  WHITE,
  YELLOW,
} from '../../styles/colors';
import {INTER_SEMIBOLD} from '../../styles/fonts';

/* Export of different styles */
export const NavbarHStyleVariant: NavbarStyleHorizontal = {
  /* Primary style */
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
      color: '#202452',
    },
    more: {
      width: 28,
      height: 28,
      marginLeft: '90%',
      position: 'absolute',
    },
  },
  // Tablet
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
      color: '#202452',
    },
    more: {
      width: 28,
      height: 28,
      marginLeft: '90%',
      position: 'absolute',
    },
  },
  // Desktop
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
      color: '#202452',
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
  /* Primary style */
  generic: {
    container: {
      flex: 1,
      marginTop: '20',
      marginBottom: '20',
      backgroundColor: '#202452',
    },
  },
};
