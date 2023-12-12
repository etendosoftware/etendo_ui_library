import { StyleSheet } from 'react-native';
import { NEUTRAL_300 } from '../../styles/colors';
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
    maxHeight: isDeviceTablet ? '65%' : '85%',
    maxWidth: '85%',
    padding: 24,
    width: 'auto',
  },
  modalFullScreen: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '100%',
    borderRadius: 0,
  },
});
