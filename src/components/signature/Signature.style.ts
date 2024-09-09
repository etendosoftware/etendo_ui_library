import { StyleSheet } from 'react-native';
import { NEUTRAL_100, NEUTRAL_50 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 400,
    height: 360,
  },
  svgContainer: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: NEUTRAL_50,
    shadowColor: NEUTRAL_100,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    display: 'flex',
  },
  buttons: {
    display: 'flex',
    height: 60,
    flexDirection: 'row',
  },
  buttonContainer: {
    marginTop: 8,
    flex: 0.5,
  },
  buttonSpace: {
    marginRight: 4,
  },
});
