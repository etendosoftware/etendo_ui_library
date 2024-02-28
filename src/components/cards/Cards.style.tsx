import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 12,
    maxWidth: 428,
    display: 'flex',
  },
  containerFlex: {
    marginTop: 12,
    marginHorizontal: 12,
  },
  titleContainer: {
    paddingHorizontal: 12,
    height: 48,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
  },
  selectionModeContainer: {
    paddingHorizontal: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleTextContainer: {
    flexDirection: 'row',
  },
  titleTextSelectionModeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 20,
    lineHeight: 40,
    color: PRIMARY_100,
    flex: 1,
  },
  icon: { height: 16, width: 16 },
  buttonContainer: { alignItems: 'flex-end', flex: 1 },
});
