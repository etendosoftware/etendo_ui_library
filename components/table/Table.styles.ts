import {StyleSheet} from 'react-native';
import {BLUE, GREY_10, GREY_40, GREY_BLUE_30} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: GREY_10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRightWidth: 0,
  },
  titleContainer: {
    backgroundColor: GREY_BLUE_30,
    borderColor: GREY_10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleText: {
    fontSize: 14,
    color: BLUE,
    textAlign: 'center',
  },
  headerContainer: {
    backgroundColor: GREY_BLUE_30,
    flexDirection: 'row',
  },
  headerCell: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
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
    textAlignVertical: 'center',
  },
  cellTextEdit: {
    fontSize: 14,
    fontWeight: '400',
    color: BLUE,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cellTextTitle: {
    fontSize: 14,
    color: BLUE,
    textAlign: 'center',
  },
  scrollCell: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
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
  imgEdit: {
    height: 13,
    width: 13,
    marginRight: 5,
  },
});
