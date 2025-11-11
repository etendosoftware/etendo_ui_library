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
  textValue: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 4,
  },
  textValueLong: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  textValueShort: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 20,
  },
  row: {
    width: '100%',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 12,
    marginBottom: 8,
    gap: 8,
    alignItems: 'center',
  },

  column: {
    flexDirection: 'column',
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
    minWidth: 16,
    maxWidth: 16,
  },
  dots: {
    letterSpacing: 8,
    color: NEUTRAL_400,
    fontWeight: '700',
    overflow: 'hidden',
    lineHeight: 20,
    alignSelf: 'center',
    flex: 1,
    textAlignVertical: 'center',
    display: 'flex',
  },
  contentMiddleRow: {
    maxWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  paddingLeft: {
    paddingLeft: 8,
  },
  paddingRight: {
    paddingRight: 8,
  },
  statusContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  spaceLeft: {
    marginLeft: 12,
  },
  editableInput: {
    flex: 1,
    minWidth: 0,
  },
  inputContainer: {
    marginBottom: 0,
  },
  inputStyle: {
    fontSize: 14,
    padding: 8,
  },
  columnEditable: {
    flexDirection: 'column',
    paddingBottom: 8,
    paddingHorizontal: 12,
    flex: 1,
  },
  editableInputColumn: {
    flex: 1,
    marginTop: 4,
  },
  fieldWithActionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    gap: 3,
  },
  actionButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inlineInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    overflow: 'hidden',
  },
});
