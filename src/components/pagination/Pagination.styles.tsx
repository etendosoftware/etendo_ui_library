import { QUATERNARY_50 } from '../../styles/colors';
import { PaginationStyleVariant } from './Pagination.types';
import { StyleSheet } from 'react-native';

export const paginationStyleVariant: PaginationStyleVariant = {
  primary: {
    container: {
      flex: 1,
      width: 120,
      height: 22,
      flexDirection: 'row',
      alignItems: 'center',
    },
    icon: {
      width: 22,
      height: 22,
    },
    pageNumberContainer: {
      backgroundColor: QUATERNARY_50,
      width: 25,
      height: 25,
      borderRadius: 3,
      justifyContent: 'center',
      alignSelf: 'center',
      marginHorizontal: 5,
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
  },
});
