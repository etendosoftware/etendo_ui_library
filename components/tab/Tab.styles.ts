import {StyleSheet} from 'react-native';
import {PRIMARY_100} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  tab: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: PRIMARY_100,
    borderTopWidth: 4,
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
});
