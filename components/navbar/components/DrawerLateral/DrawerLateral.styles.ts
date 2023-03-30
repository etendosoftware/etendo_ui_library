import {StyleSheet} from 'react-native';
import {
  BLACK_TRANSPARENT,
  BLUE,
  BLUE_20,
  GREY_60,
  WHITE,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    color: 'blue',
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: BLACK_TRANSPARENT,
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
    height: 100,
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
    backgroundColor: BLUE_20,
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
    marginHorizontal: 20,
    marginTop: 30,
  },
  modalSectionItemContainer: {
    flexDirection: 'row',
    marginBottom: 30,
    display: 'flex',
    alignItems: 'center',
  },
  modalSectionItemNoMarginContainer: {
    flexDirection: 'row',

    display: 'flex',
    alignItems: 'center',
  },
  modalSectionItemImage: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  modalSectionItemText: {
    color: WHITE,
    fontSize: 16,
  },
  modalSectionMenuDropdownImage: {
    width: 8,
    height: 5,
    marginLeft: 15,
  },
  modalSectionSubMenuContainer: {
    display: 'flex',
    paddingLeft: 30,
    paddingTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    marginTop: 20,
    borderLeftWidth: 1,
    borderColor: GREY_60,
  },
  modalSectionSubItemContainer: {
    marginBottom: 20,
  },
  copyright: {color: GREY_60},
  version: {color: GREY_60},
});
