import { StyleSheet } from 'react-native';
import { NEUTRAL_800, PRIMARY_100 } from '../../styles/colors';
import { isDeviceTablet } from '../../helpers/table_utils';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: '100%',
    width: '100%',
  },
  modalContent: {
    width: 'auto',
    height: 'auto',
    maxHeight: '70%',
    maxWidth: isDeviceTablet ? '90%' : '95%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  modalFullScreen: {
    width: '100%',
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  imageHeaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingBottom: 16,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: '500',
    textAlign: 'center',
    color: PRIMARY_100,
    maxWidth: '95%',
    alignSelf: 'flex-start',
    paddingBottom: 12,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
    color: NEUTRAL_800,
    maxWidth: '95%',
    alignSelf: 'flex-start',
    paddingBottom: 16,
  },
  childrenModalContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    maxHeight: '70%',
  },
  buttonModalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: isDeviceTablet ? '40%' : '45%',
  },
});
