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
    borderRadius: 8,
    borderColor: PRIMARY_100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerInput: {
    flexDirection: 'row',
    borderRadius: 7,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  textInput: {
    backgroundColor: NEUTRAL_50,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    letterSpacing: -0.16,
    lineHeight: 26,
    color: PRIMARY_100,
    flex: 1,
    textAlignVertical: 'center',
  },
  helperText: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 24,
    letterSpacing: -0.14,
  },
  gridContainer: {
    alignItems: 'center',
    backgroundColor: NEUTRAL_50,
    height: '100%',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: NEUTRAL_50,
    height: '100%',
  },
  icon: {
    width: 24,
    height: 24,
  },
});
export const heightTextInput = 52;
export const paddingTopTextInputMultiline = 13;
export const paddingHorizontalTextInput = 8;
