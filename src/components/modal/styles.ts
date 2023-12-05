import { StyleSheet } from 'react-native';
import { PRIMARY_100 } from '../../styles/colors';
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
  modalText: {
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'center',
    color: PRIMARY_100,
    maxWidth: '95%',
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
    // alignItems: 'flex-end',
  },
  buttonContainer: {
    width: isDeviceTablet ? '40%' : '45%',
  },
});
