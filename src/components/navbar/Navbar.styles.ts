import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
  },
  storiesContainer: {},
  itemMapContainer: {
    marginRight: 28,
    flexDirection: 'row',
  },
});
