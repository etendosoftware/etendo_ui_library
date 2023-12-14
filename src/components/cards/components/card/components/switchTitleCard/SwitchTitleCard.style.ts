import { StyleSheet } from 'react-native';
import {
  NEUTRAL_1000,
  NEUTRAL_300,
  NEUTRAL_700,
} from '../../../../../../styles/colors';

export const styles = StyleSheet.create({
  textName: {
    fontFamily: 'Inter',
    color: NEUTRAL_700,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 22,
  },
  textValueBold: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
  },
  row: {
    width: '100%',
    marginHorizontal: 12,
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_300,
  },
  titleRowValue: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  check: { width: 16, height: 16 },
  calendar: { width: 16, height: 16, marginRight: 3 },
});
