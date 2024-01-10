import { StyleSheet } from 'react-native';
import { NEUTRAL_100, NEUTRAL_50 } from '../../../../styles/colors';
export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: NEUTRAL_50,
    overflow: 'hidden',
    maxWidth: 380,
    width: '100%',
    shadowColor: NEUTRAL_100,
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowRadius: 8,
    elevation: 5,
  },
  status: {
    height: 8,
  },
  spacingCard: {
    height: 8,
  },
});
