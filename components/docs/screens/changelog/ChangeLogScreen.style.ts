import { StyleSheet } from 'react-native';
import { NEUTRAL_10, NEUTRAL_100 } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    color: NEUTRAL_100,
  },
  version: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 10,
    color: NEUTRAL_100,
    borderBottomWidth: 1,
    borderColor: NEUTRAL_10,
  },
  feature: {
    fontSize: 18,
    fontWeight: '600',
    color: NEUTRAL_100,
    marginBottom: 10,
  },
  items: { color: NEUTRAL_100, fontSize: 15, marginLeft: 20, marginBottom: 10 },
})