import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    maxWidth: 428,
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 9,
  },
  containerFlex: {
    maxWidth: 428,
    marginTop: 12,
    paddingHorizontal: 15,
    width: '100%',
  },
  titleContainer: {
    paddingHorizontal: 15,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  titleTextContainer: {
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 28,
    color: PRIMARY_100,
  },
  plus: { height: 16, width: 16 },
  buttonContainer: { alignItems: 'flex-end', flex: 1 },
});
