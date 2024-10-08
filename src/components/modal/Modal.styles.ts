import { StyleSheet } from 'react-native';
import { NEUTRAL_50 } from '../../styles/colors';
import { isDeviceTablet } from '../../helpers/table_utils';

export const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: NEUTRAL_50,
    borderRadius: 28,
    flexDirection: 'column',
    height: 'auto',
    justifyContent: 'space-between',
    maxHeight: isDeviceTablet ? '65%' : '85%',
    maxWidth: '85%',
    padding: 0,
    width: 'auto',
    minHeight: 230,
  },
  modalFullScreen: {
    height: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    width: '100%',
    borderRadius: 0,
    paddingTop: 0,
  },
});
