import { StyleSheet } from 'react-native';
import { NEUTRAL_50, NEUTRAL_800, PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: NEUTRAL_800,
  },
  container: {
    backgroundColor: NEUTRAL_50,
    height: 48,
    borderRadius: 8,
    borderColor: PRIMARY_100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerInput: {
    height: 45,
    flex: 1,
  },
  textInput: {
    paddingHorizontal: 0,
    height: 48,
    backgroundColor: NEUTRAL_50,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.16,
    color: PRIMARY_100,
    flex: 1,
  },
  helperText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.14,
  },
  gridContainer: {
    alignItems: 'center',
    paddingLeft: 12,
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
