import {StyleSheet} from 'react-native';
import {
  NEUTRALS_10,
  NEUTRALS_40,
  PRIMARY_100,
  TERTIARY_10,
  TERTIARY_30,
} from '../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: NEUTRALS_10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderRightWidth: 0,
  },
  titleContainer: {
    backgroundColor: TERTIARY_30,
    borderColor: NEUTRALS_10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  titleText: {
    fontSize: 14,
    color: PRIMARY_100,
    textAlign: 'center',
  },
  headerContainer: {
    backgroundColor: TERTIARY_30,
    flexDirection: 'row',
  },
  headerCell: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderColor: NEUTRALS_10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  cell: {
    justifyContent: 'center',
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderColor: NEUTRALS_10,
  },
  cellText: {
    fontSize: 14,

    color: PRIMARY_100,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingVertical: 22.5,
  },
  cellTextEdit: {
    fontSize: 14,

    fontWeight: '400',
    color: PRIMARY_100,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  cellTextTitle: {
    fontSize: 14,
    color: PRIMARY_100,
    textAlign: 'center',
    paddingVertical: 10,
    fontWeight: '600',
  },
  scrollCell: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    paddingVertical: 5,
  },
  row: {
    flexDirection: 'row',
  },
  placeholderContainer: {
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: NEUTRALS_40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgEdit: {
    height: 13,
    width: 13,
    marginRight: 5,
  },
  cellEditContainer: {
    height: '100%',
  },
});
