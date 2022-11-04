import {StyleSheet} from 'react-native';
import {BLUE, GREY_10, GREY_40, GREY_BLUE_30} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: GREY_10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleContainer: {
    backgroundColor: GREY_BLUE_30,
    padding: 7,
    borderColor: GREY_10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleText: {
    color: BLUE,
    fontSize: 14,
  },
  headerContainer: {
    backgroundColor: GREY_BLUE_30,
    flexDirection: 'row',
  },
  headerCell: {
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: GREY_10,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cell: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: GREY_10,
  },
  cellText: {
    fontSize: 14,
    color: BLUE,
    textAlign: 'center',
  },
  cellTextTitle: {
    fontSize: 14,
    color: BLUE,
    textAlign: 'center',
  },
  scrollCell: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  placeholderContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: GREY_40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
