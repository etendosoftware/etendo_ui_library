import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  containerFlex: {
    marginTop: 12,
    flex: 1,
  },
  titleContainer: {
    marginHorizontal: 16,
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
