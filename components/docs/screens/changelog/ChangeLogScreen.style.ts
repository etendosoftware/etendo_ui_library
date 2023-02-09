import {StyleSheet} from 'react-native';
import {GREY_10, LIGHT_BLACK} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: LIGHT_BLACK,
  },
  version: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    color: LIGHT_BLACK,
    borderBottomWidth: 1,
    borderColor: GREY_10,
  },
  feature: {
    fontSize: 18,
    fontWeight: '600',
    color: LIGHT_BLACK,
    marginBottom: 10,
  },
  items: {color: LIGHT_BLACK, fontSize: 15, marginLeft: 20, marginBottom: 10},
});
