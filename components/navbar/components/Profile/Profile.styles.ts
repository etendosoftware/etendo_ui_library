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
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: GREY_5,
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
  roundImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: PURPLE_50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
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
  optionsHeaderTextName: {color: BLUE, fontWeight: '600', fontSize: 14},
  optionsHeaderTextEmail: {color: GREY_60, fontWeight: '500', fontSize: 12},
  optionsItemsText: {
    color: BLUE,
    fontWeight: '500',
    fontSize: 14,
    textAlignVertical: 'center',
  },
  optionItemContainer: {
    flexDirection: 'row',
    padding: 10,
    display: 'flex',
    alignItems: 'center',
  },
  optionItemImage: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
  optionLogOutContainer: {padding: 10},
});

export const widthOptions = 310;
export const spaceBetween = 5;
