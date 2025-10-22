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
    paddingHorizontal: 12,
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_300,
  },
  rowInline: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingBottom: 8,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_300,
  },
  rowTitle: {
    width: '100%',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_300,
  },
  titleRowValue: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 4,
  },
  check: { width: 16, height: 16, minWidth: 16, maxWidth: 16 },
  calendar: {
    width: 16,
    height: 16,
    marginRight: 3,
    minWidth: 16,
    maxWidth: 16,
  },
  noBorderBottom: { borderBottomWidth: 0 },
  titleColumnContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleLabelContainer: {
    maxWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleInputInline: {
    maxWidth: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  editableTitleColumn: {
    marginTop: 4,
    width: '100%',
  },
  titleInputContainer: {
    flex: 1,
    minHeight: 32,
    marginBottom: 0,
  },
  titleInputStyle: {
    fontFamily: 'Inter',
    color: NEUTRAL_1000,
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 24,
    padding: 8,
  },
  paddingLeft: {
    paddingLeft: 0,
  },
  paddingRight: {
    paddingRight: 8,
  },
});
