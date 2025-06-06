import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    maxWidth: 428,
    display: 'flex',
  },
  containerFlex: {
    flex: 1,
    marginTop: 12,
    marginHorizontal: 12,
  },
  titleContainer: {
    marginHorizontal: 24,
    maxWidth: 428,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  titleLeftContainer: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 8,
    flex: 1,
    marginRight: 8,
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
  iconCancel: { height: 20, width: 20 },
  buttonContainer: { alignItems: 'flex-end', flex: 1 },
});
