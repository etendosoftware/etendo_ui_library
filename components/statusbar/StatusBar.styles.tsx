/* Imports */
import { StyleSheet } from 'react-native';
import {StatusBarStyleRecord} from './StatusBar.types';
import { NEUTRALS_100, PRIMARY_100, SECONDARY_100 } from '../../styles/colors';

/* Export of different styles */
export const StatusBarStyleVariant: StatusBarStyleRecord = {
  /* Primary style */
  primary: {
    // General container of the status bar
    statusBarContainer: {
      flex: 1,
      width: '100%',
      height: 45,
      backgroundColor: PRIMARY_100,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      position: 'relative',
    },

    rectangleTopLeftYellow: {
      width: 25,
      height: '50%',
      backgroundColor: SECONDARY_100,
    },

    rectangleTopLeftBlue: {
      width: 25,
      height: '100%',
      backgroundColor: PRIMARY_100,
      borderTopEndRadius: 40,
      borderTopRightRadius: 40,
    },

    activeStepContainer: {
      flex: 0.4,
      flexDirection: 'row',
      backgroundColor: SECONDARY_100,
      borderBottomStartRadius: 31,
      borderBottomLeftRadius: 29,
      borderTopEndRadius: 31,
      borderTopRightRadius: 31,
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
      color: NEUTRALS_100,
      fontWeight: '600',
      fontSize: 16,
      alignSelf: 'center',
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
    },

    disabledStepContainer: {
      flex: 0.15,
      flexDirection: 'row',
      backgroundColor: PRIMARY_100,
      borderBottomStartRadius: 20,
      borderBottomLeftRadius: 20,
      borderTopRightRadius: 20,
    },

    activeStep: {
      color: PRIMARY_100,
      fontWeight: '600',
      fontSize: 16,
      alignSelf: 'center',
      flex: 1,
      textAlign: 'right',
      marginRight: '10%',
    },

    rectangleBottomRightBlue: {
      width: 25,
      alignSelf: 'flex-end',
      height: '100%',
      backgroundColor: SECONDARY_100,
      transform: [{rotate: '180deg'}],
    },

    rectangleBottomRightYellow: {
      width: 25,
      height: '100%',
      backgroundColor: PRIMARY_100,
      borderTopEndRadius: 20,
      borderBottomLeftRadius: 19,
      borderColor: PRIMARY_100,
    },

    textTopActiveStepContent: {
      fontSize: 14,
      color: PRIMARY_100,
      fontWeight: '600',
    },

    textBottomActiveStepContent: {
      fontSize: 11,
      color: PRIMARY_100,
      fontWeight: '500',
      marginTop: '2%',
    },

    activeComponentImage: {
      alignSelf: 'center',
      width: 27,
      height: 27,
    },
  },
};


export const styles = StyleSheet.create({
  storiesComponentContainer: {
    flexDirection:'row'
  },
  storiesContainer:{
    height: 50,
  }
});
