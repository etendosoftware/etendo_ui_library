import { StyleSheet } from 'react-native';
import {
  BLUE,
  GREY_BLUE_50,
  PURPLE_10,
  PURPLE_50,
  WHITE,
  YELLOW,
  YELLOW_30,
} from '../../styles/colors';
import {buttonSizeVariant, buttonStyleVariant} from './Button.types';

export const ButtonStyleVariant: buttonStyleVariant = {
  primary: {
    container: {
      backgroundColor: BLUE,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      alignItems: 'center',
    },
    text: {
      color: WHITE,
      fontWeight: '600',
      fontSize: 16,
    },
    containerDisabled: {
      backgroundColor: GREY_BLUE_50,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: WHITE,
      fontWeight: 'bold',
    },
    imageColor: {
      tintColor: WHITE,
    },
  },
  secondary: {
    container: {
      backgroundColor: YELLOW,
      borderRadius: 5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: BLUE,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: YELLOW_30,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: GREY_BLUE_50,
      fontWeight: 'bold',
    },
    imageColor: {
      tintColor: BLUE,
    },
  },
  terciary: {
    container: {
      backgroundColor: PURPLE_50,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: BLUE,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: PURPLE_10,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: GREY_BLUE_50,
      fontWeight: 'bold',
    },
    imageColor: {
      tintColor: BLUE,
    },
  },
  whiteBorder: {
    container: {
      backgroundColor: WHITE,
      borderRadius: 5,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: BLUE,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: BLUE,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: WHITE,
      borderRadius: 5,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: GREY_BLUE_50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: GREY_BLUE_50,
      fontWeight: 'bold',
    },
    imageColor: {
      tintColor: BLUE,
    },
  },
  white: {
    container: {
      backgroundColor: WHITE,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: BLUE,
      fontWeight: 'bold',
    },
    containerDisabled: {
      backgroundColor: WHITE,
      borderRadius: 5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textDisabled: {
      color: GREY_BLUE_50,
      fontWeight: 'bold',
    },
    imageColor: {
      tintColor: BLUE,
    },
  },
};

export const ButtonSizeVariant:buttonSizeVariant = {
    small: {
        containerSize: {
            paddingVertical: 4,
            paddingHorizontal: 8,
        }, 
        buttonSize: {
            fontSize: 14,
        },
    },
    medium: {
        containerSize: {
            paddingVertical: 10,
            paddingHorizontal: 12,
        }, 
        buttonSize: {
            fontSize: 18,
        },
    },
    large: {
        containerSize: {
            paddingVertical: 14,
            paddingHorizontal: 18,
        }, 
        buttonSize: {
            fontSize: 20,
        },
    }
}

export const styles = StyleSheet.create({
  storiesContainer:{
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems:'flex-start',
    flex: 1,
    width: '100%',
    justifyContent: 'space-between',
  },
  storiesButtonContainer:{
    height: 100,
    width: '30%',
    }
})
