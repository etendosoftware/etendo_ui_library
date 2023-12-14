import { Dimensions, StyleSheet } from 'react-native';
import {
  NEUTRAL_400,
  NEUTRAL_800,
  PRIMARY_100,
} from '../../../../styles/colors';
import { isDeviceTablet } from '../../../../helpers/table_utils';

const DIFFERENCE_HEIGHT = 500;

export const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 24,
    width: '100%',
  },
  imageHeaderContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 12,
  },
  modalTitle: {
    alignSelf: 'flex-start',
    color: PRIMARY_100,
    fontSize: 22,
    fontWeight: '500',
    maxWidth: '100%',
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
    marginBottom: 16,
  },
  childrenModalContainer: {
    alignItems: 'center',
    borderBottomColor: NEUTRAL_400,
    borderBottomWidth: 1,
    borderTopColor: NEUTRAL_400,
    borderTopWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: Dimensions.get('window').height - DIFFERENCE_HEIGHT,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  buttonModalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    height: 'auto',
    padding: 12,
  },
  buttonContainer: {
    width: isDeviceTablet ? '40%' : '45%',
  },
});
