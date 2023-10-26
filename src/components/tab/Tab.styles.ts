import {
  NEUTRAL_0,
  NEUTRAL_50,
  NEUTRAL_500,
  NEUTRAL_600,
  PRIMARY_100,
} from '../../styles/colors';
import { tabStyleVariant } from './Tab.types';
import { ViewStyle } from 'react-native';

const commonTabStyles: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'center',
};

export const mapContainerViewStyle: ViewStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
}; 


export const TabStyleVariants: tabStyleVariant = {
  primary: {
    container: {
      ...commonTabStyles,
    },
    tab: {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 3,
      flex: 1,
      height: 40,
      paddingHorizontal: 8,
    },
    text: {
      color: PRIMARY_100,
      fontWeight: '600',
    },
    textDisabled: {
      color: NEUTRAL_500,
      fontWeight: 'bold',
    },
  },
  secondary: {
    container: {
      ...commonTabStyles,
      backgroundColor: NEUTRAL_50,
      paddingHorizontal: 16,
      paddingVertical: 12,
    },
    tab: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
      height: 40,
      borderRadius: 6,
      marginHorizontal: 8,
      paddingHorizontal: 8,
    },
    text: {
      color: PRIMARY_100,
      fontWeight: '600',
    },
    textDisabled: {
      color: NEUTRAL_600,
      fontWeight: 'bold',
    },
  },
  terciary: {
    container: {
      ...commonTabStyles,
    },
    tab: {
      justifyContent: 'center',
      alignItems: 'center',
      borderBottomWidth: 3,
      borderBottomColor: PRIMARY_100,
      borderTopWidth: 4,
      height: 40,
      paddingHorizontal: 10,
    },
    text: {
      color: NEUTRAL_0,
    },
    textDisabled: {
      color: PRIMARY_100,
    },
  },
};
