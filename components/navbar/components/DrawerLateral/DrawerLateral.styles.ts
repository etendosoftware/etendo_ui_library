import {StyleSheet} from 'react-native';
import {
  BLUE,
  BLUE_80,
  GREY_60,
  PURPLE_10,
  WHITE,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    color: BLUE,
    fontWeight: 'bold',
  },
  modalMargin: {
    marginBottom: 32,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  modalContainer: {
    position: 'absolute',
    backgroundColor: BLUE,
    top: 0,
    bottom: 0,
    width: 280,
    zIndex: 2,
  },
  modalContainerUp: {
    flex: 1,
  },
  modalContainerDown: {
    height: 80,
    marginHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: BLUE_80,
  },
  modalContent: {
    backgroundColor: BLUE,
    zIndex: 3,
    paddingTop: 50,
    paddingHorizontal: 25,
    flex: 1,
  },
  modalCurrentContainer: {
    marginVertical: 30,
    backgroundColor: PURPLE_10,
    height: 40,
    alignItems: 'center',
    display: 'flex',
    paddingHorizontal: 20,
    flexDirection: 'row',
    borderRadius: 10,
  },
  modalCurrentImage: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  modalCurrentLabel: {
    color: WHITE,
    fontSize: 16,
  },
  modalSectionsContainer: {},
  modalSection: {},
  modalSectionTitle: {
    color: GREY_60,
    fontSize: 16,
  },
  modalSectionContentContainer: {
    marginTop: 20,
  },
  modalSectionItemContainer: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 16,
    borderRadius: 8,
  },
  modalSectionSubItemContainer: {
    flexDirection: 'row',
    height: 40,
    marginBottom: 20,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 8,
  },
  modalSectionItemImage: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  modalSectionItemText: {
    color: WHITE,
    fontSize: 16,
    width: 150,
  },
  modalSectionMenuDropdownImage: {
    width: 8,
    height: 5,
    marginLeft: 15,
  },
  modalSectionSubMenuContainer: {
    display: 'flex',
    paddingLeft: 15,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 5,
    borderLeftWidth: 1,
    borderColor: GREY_60,
  },
  copyright: {color: GREY_60},
  version: {color: GREY_60},
});
