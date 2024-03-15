import { StyleSheet } from 'react-native';
import { NEUTRAL_50 } from '../../../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 12,
    paddingBottom: 10,
    backgroundColor: NEUTRAL_50,
    elevation: 3,
    overflow: 'hidden',
    maxWidth: 380,
    marginHorizontal: 10,
  },
  skeletonItem: {
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  status: {
    height: 8,
    marginBottom: 12,
  },
});
