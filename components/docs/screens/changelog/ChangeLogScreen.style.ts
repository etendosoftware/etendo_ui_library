import {StyleSheet} from 'react-native';
import {NEUTRALS_10, NEUTRALS_100} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: NEUTRALS_100,
  },
  version: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    color: NEUTRALS_100,
    borderBottomWidth: 1,
    borderColor: NEUTRALS_10,
  },
  feature: {
    fontSize: 18,
    fontWeight: '600',
    color: NEUTRALS_100,
    marginBottom: 10,
  },
  items: {color: NEUTRALS_100, fontSize: 15, marginLeft: 20, marginBottom: 10},
});
