import {StyleSheet} from 'react-native';
import {PRIMARY_100} from '../../styles/colors';
import {isTablet} from '../../helpers/table_utils';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_100,
    height: isTablet() ? 80 : 72,
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
    paddingLeft: isTablet() ? 32 : 24,
    width: isTablet() ? 465 : 124,
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
export const marginIncomponents = isTablet() ? 32 : 24;
