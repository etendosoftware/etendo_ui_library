import { StyleSheet } from 'react-native';
import { NEUTRAL_800 } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
    marginTop: 4,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  textName: {
    fontFamily: 'Inter',
    color: NEUTRAL_800,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12,
  },
  row: {
    width: '100%',
    paddingRight: 12,
    display: 'flex',
    marginBottom: 8,
  },
  paddingRight: {
    paddingRight: 8,
  },
  contentMiddleRow: {
    maxWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginHorizontal: 8,
    minWidth: 40,
    textAlign: 'center',
    fontSize: 16,
  },
  inputContainer: { width: 100, marginHorizontal: 8 },
  textContainerStyle: { height: 40, flex: 1 },
  textInputStyle: { textAlign: 'center' },
});
