import {StyleSheet} from 'react-native';
import {
  NEUTRALS_0,
  NEUTRALS_10,
  NEUTRALS_100,
  NEUTRALS_40,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: NEUTRALS_100,
  },
  description: {color: NEUTRALS_100, marginBottom: 20},
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: NEUTRALS_10,
    color: NEUTRALS_100,
  },
  clipboardContainer: {alignItems: 'flex-start'},
  clipboardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    color: NEUTRALS_100,
  },
  clipboardContent: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: NEUTRALS_10,
    padding: 15,
    paddingBottom: 0,
    paddingRight: 0,
  },
  clipboardText: {
    fontSize: 15,
    color: NEUTRALS_100,
    letterSpacing: 1,
    width: 400,
  },
  clipboardCopyContainer: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: NEUTRALS_10,
    padding: 2,
  },
  clipboardCopyText: {
    fontWeight: '600',
    paddingHorizontal: 10,
    color: NEUTRALS_100,
  },
});
