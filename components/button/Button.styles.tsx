import {StyleSheet} from 'react-native';
import { NEUTRALS_0, PRIMARY_100, QUATERNARY_10, QUATERNARY_50, SECONDARY_100, SECONDARY_30, TERTIARY_50 } from '../../styles/colors';
import {buttonStyleVariant} from './Button.types';

export const ButtonStyleVariant: buttonStyleVariant = {
  primary: {
    container: {
      backgroundColor: PRIMARY_100,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
      padding: 24,
    },
    text: {
      color: NEUTRALS_0,
      fontWeight: '600',
    },
    containerDisabled: {
      backgroundColor: QUATERNARY_50,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: NEUTRALS_0,
      fontWeight: 'bold',
    },
    imageColor: NEUTRALS_0,
  },
  secondary: {
    container: {
      backgroundColor: SECONDARY_100,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    text: {
      color: PRIMARY_100,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: SECONDARY_30,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: QUATERNARY_50,
      fontWeight: 'bold',
    },
    imageColor: PRIMARY_100,
  },
  terciary: {
    container: {
      backgroundColor: QUATERNARY_50,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    text: {
      color: PRIMARY_100,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: QUATERNARY_10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: TERTIARY_50,
      fontWeight: 'bold',
    },
    imageColor: PRIMARY_100,
  },
  whiteBorder: {
    container: {
      backgroundColor: NEUTRALS_0,
      borderRadius: 5,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: PRIMARY_100,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    text: {
      color: PRIMARY_100,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: NEUTRALS_0,
      borderRadius: 5,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: TERTIARY_50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: TERTIARY_50,
      fontWeight: 'bold',
    },
    imageColor: PRIMARY_100,
  },
  white: {
    container: {
      backgroundColor: NEUTRALS_0,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24,
    },
    text: {
      color: PRIMARY_100,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: NEUTRALS_0,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: TERTIARY_50,
      fontWeight: 'bold',
    },
    imageColor: PRIMARY_100,
  },
};

export const styles = StyleSheet.create({
  storiesContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    width: '100%',

    justifyContent: 'space-between',
  },
  storiesButtonContainer: {
    height: 100,
    width: '30%',
  },
});
