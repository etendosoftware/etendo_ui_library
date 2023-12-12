import { StyleSheet } from 'react-native';
import { styles as modalBasicStyles } from '../minimizedView/MinimizedView.styles';

export const styles = StyleSheet.create({
  headerContainer: {
    ...modalBasicStyles.headerContainer,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  titleCloseContainer: {
    flexDirection: 'row',
  },
  modalTitle: {
    ...modalBasicStyles.modalTitle,
    paddingBottom: 0,
    alignSelf: 'center',
  },
  childrenModalContainer: {
    ...modalBasicStyles.childrenModalContainer,
    borderBottomWidth: 0,
    maxHeight: '90%',
  },
});
