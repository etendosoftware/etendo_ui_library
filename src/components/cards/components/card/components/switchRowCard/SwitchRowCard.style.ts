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
    marginLeft: 12,
  },
  textValue: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 12,
  },
  row: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 12,
    marginBottom: 8,
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
    paddingRight: 12,
    paddingBottom: 8,
  },
  check: {
    width: 16,
    height: 16,
    minWidth: 16,
    maxWidth: 16,
  },
  calendar: {
    width: 16,
    height: 16,
    marginRight: 4,
    minWidth: 16,
    maxWidth: 16,
  },
  dots: {
    letterSpacing: 8,
    color: NEUTRAL_400,
    fontWeight: '700',
    position: 'absolute',
    overflow: 'hidden',
    lineHeight: 20,
    alignSelf: 'center',
    textAlignVertical: 'center',
    display: 'flex',
  },
  contentMiddleRow: {
    maxWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 20,
  },
  paddingLeft: {
    paddingLeft: 8,
  },
  paddingRight: {
    paddingRight: 8,
  },
});
