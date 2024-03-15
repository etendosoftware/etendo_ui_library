import { StyleSheet } from 'react-native';
import { NEUTRAL_100, NEUTRAL_50 } from '../../../../styles/colors';
export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: NEUTRAL_50,
    overflow: 'hidden',
    shadowColor: NEUTRAL_100,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowRadius: 8,
    elevation: 3,
    marginHorizontal: 12,
  },
  status: {
    height: 8,
  },
  spacingCard: {
    height: 8,
  },
});
