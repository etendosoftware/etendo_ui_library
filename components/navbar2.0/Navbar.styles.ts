import {StyleSheet} from 'react-native';
import {BLUE} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: BLUE,
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
});
