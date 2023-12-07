import { StyleSheet } from 'react-native';
import {
  NEUTRAL_300,
  NEUTRAL_400,
  NEUTRAL_800,
  PRIMARY_100,
} from '../../styles/colors';
import { isDeviceTablet } from '../../helpers/table_utils';

export const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  },
  modalContent: {
    backgroundColor: NEUTRAL_300,
    borderRadius: 28,
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'space-between',
    maxHeight: isDeviceTablet ? '100%' : '85%',
    maxWidth: '85%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: 'auto',
  },
  modalFullScreen: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '100%',
  },
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
  },
  imageHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 16,
  },
  modalTitle: {
    alignSelf: 'flex-start',
    color: PRIMARY_100,
    fontSize: 22,
    fontWeight: '500',
    maxWidth: '95%',
    paddingBottom: 12,
    textAlign: 'center',
  },
  modalSubtitle: {
    alignSelf: 'flex-start',
    color: NEUTRAL_800,
    fontSize: 14,
    fontWeight: '500',
    maxWidth: '95%',
    textAlign: 'left',
  },
  childrenModalContainer: {
    alignItems: 'center',
    borderBottomColor: NEUTRAL_400,
    borderBottomWidth: 1,
    borderTopColor: NEUTRAL_400,
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginVertical: 16,
    maxHeight: '60%',
    paddingVertical: 8,
  },
  buttonModalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: isDeviceTablet ? '40%' : '45%',
  },
});
export const stylesMaximized = StyleSheet.create({
  headerContainer: {
    ...styles.headerContainer,
    flexDirection: 'row',
    paddingTop: 16,
    justifyContent: 'space-between',
    width: '100%',
  },
  titleCloseContainer: {
    flexDirection: 'row',
  },
  modalTitle: {
    ...styles.modalTitle,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  childrenModalContainer: {
    ...styles.childrenModalContainer,
    borderBottomWidth: 0,
    maxHeight: '90%',
  },
});
