/* Imports */
import {PaginationStyleRecord} from './Pagination.types';
import {PURPLE_50} from '../../styles/colors';

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
      width: 18,
      height: 18,
      borderRadius: 3,
      justifyContent: 'center',
      alignSelf: 'center',
      marginRight: 12,
    },
    pageNumberText: {
      fontWeight: '500',
      fontFamily: 'Poppins',
      fontSize: 9.5,
      alignSelf: 'center',
    },
  },
};
