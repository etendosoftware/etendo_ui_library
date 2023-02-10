import {StyleSheet} from 'react-native';
import {GREY_10, LIGHT_BLACK} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: '600',
    marginBottom: 20,
    color: LIGHT_BLACK,
  },
  description: {color: LIGHT_BLACK, marginBottom: 20},
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    borderBottomWidth: 1,
    borderBottomColor: GREY_10,
    color: LIGHT_BLACK,
  },
  clipboardContainer: {alignItems: 'flex-start'},
  clipboardTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginTop: 20,
    color: LIGHT_BLACK,
  },
  clipboardContent: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: GREY_10,
    padding: 15,
    paddingBottom: 0,
    paddingRight: 0,
  },
  clipboardText: {
    fontSize: 15,
    color: LIGHT_BLACK,
    letterSpacing: 1,
    width: 400,
  },
  clipboardCopyContainer: {
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: GREY_10,
    padding: 2,
  },
  clipboardCopyText: {
    fontWeight: '600',
    paddingHorizontal: 10,
    color: LIGHT_BLACK,
  },
});
