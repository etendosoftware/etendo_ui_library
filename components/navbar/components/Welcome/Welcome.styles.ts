import {StyleSheet} from 'react-native';
import {NEUTRALS_0} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 32,
  },
  imageStar: {
    height: 40,
    width: 40,
    marginRight: 10,
  },
  titleWelcome: {
    color: NEUTRALS_0,
    height: 18,
    fontSize: 14,
  },
  titleName: {
    fontSize: 18,
    color: NEUTRALS_0,
    fontWeight: '800',
    width: 150,
  },
});
