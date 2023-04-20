import {StyleSheet} from 'react-native';
import {NEUTRALS_0, NEUTRALS_10} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: NEUTRALS_0,
  },
  version: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    color: NEUTRALS_0,
    borderBottomWidth: 1,
    borderColor: NEUTRALS_10,
  },
  feature: {
    fontSize: 18,
    fontWeight: '600',
    color: NEUTRALS_0,
    marginBottom: 10,
  },
  items: {color: NEUTRALS_0, fontSize: 15, marginLeft: 20, marginBottom: 10},
});
