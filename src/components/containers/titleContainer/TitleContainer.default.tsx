import { StyleSheet } from 'react-native';
import { isDeviceTablet } from '../../../helpers/table_utils';
import { PRIMARY_100 } from '../../../styles/colors';

export const DEFAULT = StyleSheet.create({
  TITLE_STYLE: {
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'left',
    marginBottom: 6,
    color: PRIMARY_100,
  },
  TITLE_CONTAINER: {
    display: 'flex',
    flexDirection: isDeviceTablet ? 'row' : 'column',
    justifyContent: isDeviceTablet ? 'space-between' : 'flex-start',
    alignItems: 'flex-start',
  },
  BUTTON_CONTAINER: {
    width: 24,
  },
});
