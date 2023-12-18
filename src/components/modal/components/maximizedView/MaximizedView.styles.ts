import { StyleSheet } from 'react-native';
import { styles as modalBasicStyles } from '../minimizedView/MinimizedView.styles';
import { NEUTRAL_400 } from '../../../../styles/colors';

export const styles = StyleSheet.create({
  headerContainer: {
    ...modalBasicStyles.headerContainer,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    paddingTop: 0,
    paddingHorizontal: 12,
  },
  titleCloseContainer: {
    flexDirection: 'row',
    paddingRight: 20,
  },
  modalTitle: {
    ...modalBasicStyles.modalTitle,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  childrenModalContainer: {
    borderTopColor: NEUTRAL_400,
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 24,
    width: '100%',
    maxHeight: '97%',
  },
});
