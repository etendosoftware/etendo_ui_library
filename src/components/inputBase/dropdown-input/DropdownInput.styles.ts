import { StyleSheet } from 'react-native';
import { NEUTRAL_0, NEUTRAL_300, PRIMARY_100 } from '../../../styles/colors';

export const styles = StyleSheet.create({
  fullScreenTouchable: {
    position: 'absolute',
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: NEUTRAL_0,
    padding: 8,
    paddingBottom: 0,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: NEUTRAL_300,
  },
  option: {
    marginBottom: 8,
    flex: 1,
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 8,
    maxHeight: 40,
    minHeight: 40,
    backgroundColor: NEUTRAL_0,
  },
  optionText: {
    color: PRIMARY_100,
    fontSize: 16,
    letterSpacing: -0.16,
    fontWeight: '500',
  },
  loading: { marginBottom: 8, alignSelf: 'center', height: 40 },
  containerNative: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  searchContainer: { marginBottom: 8 },
});
