import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLACK_TRANSPARENT,
  BLUE,
  GREY_10,
  GREY_40,
  GREY_5,
  GREY_60,
  PURPLE_50,
  PURPLE_60,
  WHITE,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginLeft: 32,
  },
  imageProfile: {
    height: 40,
    width: 40,
  },
  nameText: {
    position: 'absolute',
    fontSize: 25,
    fontWeight: '600',
    color: PURPLE_60,
    zIndex: 3,
  },
  optionsContainer: {
    position: 'absolute',
    top: 40,
    right: 60,
    backgroundColor: WHITE,
    borderRadius: 5,
    zIndex: 2,
    width: 350,
    overflow: 'hidden',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: GREY_5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionLogOut: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    color: BLACK,
    marginBottom: 5,
  },
  optionTimeText: {
    fontSize: 12,
    color: GREY_40,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: BLACK_TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImageSize: {
    width: 40,
    height: 40,
  },
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: PURPLE_50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
  },
  optionsHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: GREY_10,
    padding: 10,
  },
  optionsHeaderTextContainer: {
    marginLeft: 10,
  },
  optionsHeaderTextName: {
    color: BLUE,
    fontWeight: '600',
    fontSize: 14,
    width: 180,
  },
  optionsHeaderTextEmail: {
    color: GREY_60,
    fontWeight: '500',
    fontSize: 12,
    width: 180,
  },
  optionsItemsText: {
    color: BLUE,
    fontWeight: '500',
    fontSize: 14,
    textAlignVertical: 'center',
    width: 180,
  },
  optionItemContainer: {
    flexDirection: 'row',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  optionItemImageSize: {
    height: 20,
    width: 20,
  },
  optionItemImage: {
    marginRight: 10,
    height: 20,
    width: 20,
  },
  optionLogOutContainer: {padding: 10},
});

export const widthOptions = 256;
export const spaceBetween = 5;
