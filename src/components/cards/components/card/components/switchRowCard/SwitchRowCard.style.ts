import { StyleSheet } from 'react-native';
import {
  NEUTRAL_1000,
  NEUTRAL_400,
  NEUTRAL_800,
} from '../../../../../../styles/colors';

export const styles = StyleSheet.create({
  textName: {
    fontFamily: 'Inter',
    color: NEUTRAL_800,
    fontWeight: '700',
    fontSize: 14,
    lineHeight: 20,
  },
  selfSpace: { width: '50%' },
  textValue: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingBottom: 8,
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  check: {
    width: 16,
    height: 16,
    marginLeft: 8,
  },
  calendar: {
    width: 16,
    height: 16,
    marginRight: 4,
    marginLeft: 8,
  },
  dots: {
    flex: 1,
    letterSpacing: 8,
    color: NEUTRAL_400,
    fontWeight: '700',
  },
  rowWitchdotsContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  alignDotsRight: {
    textAlign: 'right',
  },
  alignDotsLeft: {
    textAlign: 'left',
  },
  paddingCalendar: {
    paddingRight: 16,
  },
});
