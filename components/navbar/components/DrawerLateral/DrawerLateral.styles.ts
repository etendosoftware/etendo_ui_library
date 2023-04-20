import {StyleSheet} from 'react-native';
import {
  NEUTRALS_0,
  NEUTRALS_60,
  PRIMARY_100,
  PRIMARY_80,
  QUATERNARY_10,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  openButton: {
    color: PRIMARY_100,
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
    backgroundColor: PRIMARY_100,
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
    borderTopColor: PRIMARY_80,
  },
  modalContent: {
    backgroundColor: PRIMARY_100,
    zIndex: 3,
    paddingTop: 50,
    paddingHorizontal: 25,
    flex: 1,
  },
  modalCurrentContainer: {
    marginVertical: 30,
    backgroundColor: QUATERNARY_10,
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
    color: NEUTRALS_0,
    fontSize: 16,
  },
  modalSectionsContainer: {},
  modalSection: {},
  modalSectionTitle: {
    color: NEUTRALS_60,
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
    color: NEUTRALS_0,
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
    borderColor: NEUTRALS_60,
  },
  copyright: {color: NEUTRALS_60},
  version: {color: NEUTRALS_60},
});
