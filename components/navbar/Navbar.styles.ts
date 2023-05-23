import {StyleSheet} from 'react-native';
import {PRIMARY_100} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY_100,
    height: 60,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    display: 'flex',
    width: '50%',
    paddingHorizontal: 32,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    display: 'flex',
    width: '50%',
    paddingHorizontal: 32,
  },
  storiesContainer: {},
});
