import { StyleSheet } from 'react-native';
import {
  NEUTRAL_0,
  NEUTRAL_400,
  OVERLAY,
  PRIMARY_100,
  PRIMARY_400,
  PRIMARY_60,
  PRIMARY_80,
  QUATERNARY_10,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: 36,
    width: 140.09,
    marginBottom: 32,
  },
  openButton: {
    color: PRIMARY_100,
    fontWeight: 'bold',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundColor: OVERLAY,
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
    height: 104,
    marginHorizontal: 24,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: PRIMARY_80,
  },
  modalContent: {
    backgroundColor: PRIMARY_100,
    zIndex: 3,
    paddingTop: 60,
    paddingLeft: 24,
    marginRight: 12,
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
  modalCurrentLabel: {
    color: NEUTRAL_0,
    fontSize: 16,
  },
  modalSectionTitle: {
    color: NEUTRAL_400,
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  modalSectionContentContainer: { marginBottom: 20 },
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
    width: 24,
    height: 24,
    marginRight: 12,
  },
  modalSectionItemText: {
    color: NEUTRAL_0,
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
    paddingLeft: 16,
    marginLeft: 24,
    marginBottom: 20,
    marginTop: 12,
    borderLeftWidth: 1,
    borderColor: PRIMARY_400,
  },
  copyright: { color: NEUTRAL_400 },
  version: { color: NEUTRAL_400 },
});
