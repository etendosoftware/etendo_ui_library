import { StyleSheet } from 'react-native';
import {
  NEUTRAL_0,
  NEUTRAL_10,
  NEUTRAL_100,
  NEUTRAL_40,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: NEUTRAL_100,
  },
  description: { color: NEUTRAL_100, marginBottom: 20 },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_10,
    color: NEUTRAL_100,
  },
  clipboardContainer: { alignItems: 'flex-start' },
  clipboardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    color: NEUTRAL_100,
  },
  clipboardContent: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: NEUTRAL_10,
    padding: 15,
    paddingBottom: 0,
    paddingRight: 0,
  },
  clipboardText: {
    fontSize: 15,
    color: NEUTRAL_100,
    letterSpacing: 1,
    width: 400,
  },
  clipboardCopyContainer: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: NEUTRAL_10,
    padding: 2,
  },
  clipboardCopyText: {
    fontWeight: '600',
    paddingHorizontal: 10,
    color: NEUTRAL_100,
  },
});
