import { StyleSheet } from 'react-native';
import { NEUTRAL_50 } from '../../../../styles/colors';
export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: NEUTRAL_50,
    overflow: 'hidden',
    elevation: 5,
    maxWidth: 380,
  },
  status: {
    height: 8,
    marginBottom: 8,
  },
});
