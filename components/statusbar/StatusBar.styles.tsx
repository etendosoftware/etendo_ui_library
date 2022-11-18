/* Imports */
import {BLUE, YELLOW, WHITE} from '../../styles/colors';
import {StatusBarStyleRecord} from './StatusBar.types';

/* Export of different styles */
export const StatusBarStyleVariant: StatusBarStyleRecord = {
  /* Primary style */
  primary: {
    // General container of the status bar
    statusBarContainer: {
      flex: 1,
      width: '100%',
      height: 45,
      backgroundColor: BLUE,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'relative',
    },

    rectangleTopLeftYellow: {
      width: 25,
      height: '50%',
      backgroundColor: YELLOW,
    },

    rectangleTopLeftBlue: {
      width: 25,
      height: '100%',
      backgroundColor: BLUE,
      borderTopEndRadius: 40,
    },

    activeStepContainer: {
      flex: 0.4,
      flexDirection: 'row',
      backgroundColor: YELLOW,
      borderBottomStartRadius: 31,
      borderTopEndRadius: 31,
    },

    activeStepContent: {
      marginLeft: '10%',
      alignSelf: 'center',
      flexDirection: 'row',
    },

    activeStepContentRightSection: {
      marginLeft: '12%',
    },

    disabledStep: {
      color: WHITE,
      fontWeight: '600',
      fontSize: 16,
      alignSelf: 'center',
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'Poppins',
    },

    disabledStepContainer: {
      flex: 0.15,
      flexDirection: 'row',
      backgroundColor: BLUE,
      borderBottomStartRadius: 20,
      borderTopEndRadius: 20,
    },

    activeStep: {
      color: BLUE,
      fontWeight: '600',
      fontSize: 16,
      alignSelf: 'center',
      flex: 1,
      textAlign: 'right',
      marginRight: '10%',
      fontFamily: 'Poppins',
    },

    rectangleBottomRightBlue: {
      width: 25,
      alignSelf: 'flex-end',
      height: '100%',
      backgroundColor: YELLOW,
      transform: [{rotate: '180deg'}],
    },

    rectangleBottomRightYellow: {
      width: 25,
      height: '100%',
      backgroundColor: BLUE,
      borderTopEndRadius: 20,
      borderColor: BLUE,
    },

    textTopActiveStepContent: {
      fontSize: 14,
      color: BLUE,
      fontWeight: '600',
      fontFamily: 'Poppins',
    },

    textBottomActiveStepContent: {
      fontSize: 11,
      color: BLUE,
      fontWeight: '500',
      marginTop: '2%',
      fontFamily: 'Poppins',
    },

    activeComponentImage: {
      alignSelf: 'center',
      width: 27,
      height: 27,
    },
  },
};
