import { StyleSheet } from 'react-native';
import {
  DANGER_700,
  NEUTRAL_0,
  NEUTRAL_1000,
  NEUTRAL_400,
  NEUTRAL_500,
  NEUTRAL_800,
  PRIMARY_100,
} from '../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
    letterSpacing: -0.16,
    color: NEUTRAL_800,
  },
  container: {
    backgroundColor: NEUTRAL_0,
    height: 48,
    borderRadius: 8,
    borderColor: PRIMARY_100,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerIsError: {
    borderColor: DANGER_700,
  },
  containerIsDisabled: {
    borderColor: NEUTRAL_400,
  },
  containerPlaceholder: {
    borderColor: NEUTRAL_400,
  },
  containerFocused: {
    borderColor: PRIMARY_100,
  },
  iconPlaceholder: {
    color: NEUTRAL_800,
  },
  iconIsDisabled: {
    color: NEUTRAL_500,
  },
  iconIsError: {
    color: NEUTRAL_800,
  },
  iconIsFocus: {
    color: NEUTRAL_1000,
  },
  textPlaceholder: {
    color: NEUTRAL_500,
  },
  textIsError: {
    color: DANGER_700,
  },
  textIsFocus: {
    color: NEUTRAL_800,
  },
  textIsDisabled: {
    color: NEUTRAL_500,
  },
  textInput: {
    paddingHorizontal: 0,
    height: 48,
    backgroundColor: 'white',
    fontFamily: 'Inter',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.16,
    color: PRIMARY_100,
    flex: 1,
    outlineStyle: 'none',
  },
  helperText: {
    fontFamily: 'Inter',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 22,
    letterSpacing: -0.14,
    color: NEUTRAL_800,
  },
  iconLeft: { width: 24, height: 24, marginRight: 12 },
  iconRight: { width: 24, height: 24, marginLeft: 12 },
});
