import { StyleSheet } from 'react-native';
import { NEUTRAL_0 } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 28,
    paddingRight: 36,
  },
  imageStar: {
    height: 40,
    width: 40,
    marginRight: 4,
  },
  titleWelcome: {
    color: NEUTRAL_0,
    lineHeight: 22,
    fontSize: 16,
    width: 187,
  },
  titleName: {
    fontSize: 22,
    color: NEUTRAL_0,
    lineHeight: 28,
    fontWeight: '800',
    width: 187,
  },
  titleContainer: {
    marginLeft: 10,
  },
});
