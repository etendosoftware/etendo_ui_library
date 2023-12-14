import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    maxWidth: 428,
    alignItems: 'center',
  },
  containerFlex: {
    maxWidth: 428,
    marginTop: 12,
    flex: 1,
    paddingHorizontal: 14,
    marginHorizontal: 10,
  },
  titleContainer: {
    marginHorizontal: 24,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
