import { StyleSheet } from 'react-native';
import { NEUTRAL_0, NEUTRAL_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 400,
    backgroundColor: NEUTRAL_0,
    borderRadius: 8,
    display: 'flex',
    shadowColor: NEUTRAL_100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  svg: {
    display: 'flex',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: { flex: 0.5, marginTop: 8 },
  buttonSpace: {
    marginRight: 4,
  },
});
