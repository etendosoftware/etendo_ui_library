import {StyleSheet} from 'react-native';
import {WHITE} from '../../../../styles/colors';
import {FONT_MEDIUM, FONT_REGULAR} from '../../../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
  },
  imageStar: {
    height: 36,
    width: 30,
  },
  titleWelcome: {
    color: WHITE,
    fontFamily: FONT_REGULAR,
  },
  titleName: {
    fontSize: 18,
    color: WHITE,
    fontWeight: '800',
    fontFamily: FONT_MEDIUM,
  },
});
