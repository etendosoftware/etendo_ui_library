/* Imports */
import {PaginationStyleRecord} from './Pagination.types';
import {PURPLE_50} from '../../styles/colors';
import { StyleSheet } from 'react-native';

/* Export of different styles */
export const PaginationStyleVariant: PaginationStyleRecord = {
  /* Primary style */
  primary: {
    container: {
      flex: 1,
      width: 120,
      height: 22,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    icon: {
      width: 22,
      height: 22,
      marginRight: 17,
    },
    pageNumberContainer: {
      backgroundColor: PURPLE_50,
      width: 25,
      height: 25,
      borderRadius: 3,
      justifyContent: 'center',
      alignSelf: 'center',
      marginRight: 12,
    },
    pageNumberText: {
      fontWeight: '500',
      fontSize: 12,
      alignSelf: 'center',
    },
  },
};

export const styles = StyleSheet.create({
  storiesContainer: {
    height: 50,
  }
});
