/* Imports */
import {PaginationStyleRecord} from './Pagination.types';
import {BLUE, GREY_BLUE_30} from '../../styles/colors';

/* Export of different styles */
export const PaginationStyleVariant: PaginationStyleRecord = {
  /* Primary style */
  primary: {
    container: {
      flex: 1,
      width: 120,
      height: 22,
      flexDirection: 'row',
    },
    icon: {
      width: 20,
      height: 22,
      marginRight: 17,
    },
    pageNumberContainer: {
      backgroundColor: '#dddff6',
      width: 27,
      height: 27,
      borderRadius: 5,
      justifyContent: 'center',
      alignSelf: 'center',
      marginRight: 17,
    },
    pageNumberText: {
      // fontFamily: INTER_SEMIBOLD,
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  },
};
