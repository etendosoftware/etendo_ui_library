/* Imports */
import {BLUE, YELLOW, WHITE} from '../../styles/colors';
import {StatusBarStyleRecord} from './StatusBar.types';

/* Export of different styles */
export const StatusBarStyleVariant: StatusBarStyleRecord = {
  /* Primary style */
  primary: {
    containerStatusBar: {
      flex: 1,
      width: '100%',
      height: 45,
      backgroundColor: YELLOW,
    },
    containerStatusBarMiddleBlueTop: {
      flex: 1,
      width: '100%',
      height: '50%',
      backgroundColor: BLUE,
    },

    containerStatusBarMiddleYellowBottom: {
      flex: 1,
      width: '100%',
      height: '50%',
      backgroundColor: YELLOW,
    },
    containerItemActive: {
      width: '75%',
      height: '100%',
      backgroundColor: YELLOW,
      borderTopEndRadius: 26,
      position: 'absolute',
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
    },

    containerItemDisabled: {
      left: '75%',
      width: '25%',
      height: '100%',
      backgroundColor: BLUE,
      position: 'absolute',
      borderBottomLeftRadius: 26,
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    textActive: {
      marginRight: 25,
      color: BLUE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    containerItemDisabledStep2Text: {
      marginRight: 30,
      color: WHITE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    containerItemDisabledStep3Text: {
      marginRight: 20,
      color: WHITE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    containerItemDisabledStep2: {
      width: '40%',
      height: '100%',
      backgroundColor: BLUE,
      position: 'absolute',
      borderTopEndRadius: 26,
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderTopRightRadius: 26,
    },

    containerItemActiveStep2: {
      left: '40%',
      width: '40.4%',
      height: '100%',
      backgroundColor: YELLOW,
      position: 'absolute',
      borderTopEndRadius: 26,
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomLeftRadius: 26,
      borderTopRightRadius: 26,
    },

    containerStatusBarMiddleOfMiddleHorizontalYellowTop: {
      position: 'absolute',
      width: '50%',
      height: '50%',
      backgroundColor: YELLOW,
    },

    containerStatusBarMiddleOfMiddleHorizontalBlueBottom: {
      width: '50%',
      height: '50%',
      backgroundColor: BLUE,
    },
    containerItemDisabledStep3Right: {
      left: '80.4%',
      width: '20%',
      height: '100%',
      backgroundColor: BLUE,
      position: 'absolute',
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomLeftRadius: 26,
    },

    containerStatusBarMiddleOfMiddleHorizontalBlueTop: {
      left: '80%',
      width: '20%',
      borderRadius: 26,
      height: '50%',
      backgroundColor: BLUE,
      position: 'absolute',
      zIndex: 1,
    },

    containerItemDisabledStep1Text: {
      marginLeft: 265,
      color: WHITE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    containerItemDisabledStep3TextRight: {
      marginRight: 90,
      color: WHITE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    // Step3

    containerItemDisabledStep1AndStep2: {
      width: '60%',
      height: '100%',
      backgroundColor: BLUE,
      borderTopEndRadius: 26,
      position: 'absolute',
      zIndex: 1,
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      flexDirection: 'row',
    },

    containerItemActiveStep3: {
      left: '60%',
      width: '40%',
      height: '100%',
      backgroundColor: YELLOW,
      position: 'absolute',
      borderBottomLeftRadius: 26,
      zIndex: 1,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },

    containerStatusBarMiddleYellowTop: {
      flex: 1,
      width: '100%',
      height: '50%',
      backgroundColor: BLUE,
    },

    containerStatusBarMiddleBlueBottom: {
      flex: 1,
      marginTop: 100,
      width: '100%',
      height: '50%',
      backgroundColor: YELLOW,
    },

    containerItemDisabledStep1TextSecundary: {
      marginRight: 70,
      color: WHITE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    containerItemDisabledStep2TextSecundary: {
      marginRight: 70,
      color: WHITE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    textActiveStep3: {
      color: BLUE,
      fontSize: 17,
      fontWeight: 'bold',
    },

    activeItemStep2LeftSection: {
      width: '35%',
      height: '80%',
      left: 0,
      marginRight: 45,
      flexDirection: 'row',
    },

    activeItemStep2TextTop: {
      fontSize: 14,
      fontWeight: 'bold',
      marginTop: 4,
      color: '#202452',
    },

    activeItemStep2Text: {
      marginLeft: 15,
      width: 250,
      height: 100,
    },

    activeItemStep2TextBottom: {
      fontSize: 10,
      fontWeight: '500',
      color: '#202452',
      marginTop: 2,
    },

    activeItemStep2TextRight: {
      fontWeight: 'bold',
      fontSize: 17,
      paddingLeft: 110,
      color: '#202452',
    },

    containerItemActiveStep3LeftSection: {
      height: '80%',
      width: 250,
    },

    activeItemStep3TextTop: {
      fontSize: 14,
      marginLeft: 15,
      marginTop: 4,
      fontWeight: 'bold',
      color: '#202452',
    },

    activeItemStep3TextBottom: {
      fontSize: 10,
      fontWeight: '500',
      color: '#202452',
      marginTop: 2,
      marginLeft: 15,
    },

    step2Image: {
      height: 28,
      width: 28,
      alignItems: 'center',
      marginTop: '4px',
    },

    step3Image: {
      height: 28,
      width: 28,
      alignItems: 'center',
      marginTop: '4px',
      marginLeft: '10px',
    },
  },
};
