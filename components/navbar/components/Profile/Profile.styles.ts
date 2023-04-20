import {StyleSheet} from 'react-native';
import {
  INITIAL_100,
  NEUTRALS_0,
  NEUTRALS_10,
  NEUTRALS_100,
  NEUTRALS_40,
  NEUTRALS_5,
  NEUTRALS_60,
  PRIMARY_100,
  QUATERNARY_50,
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
    color: INITIAL_100,
    zIndex: 3,
  },
  optionsContainer: {
    position: 'absolute',
    top: 40,
    right: 60,
    backgroundColor: NEUTRALS_0,
    borderRadius: 5,
    zIndex: 2,
    width: 350,
    overflow: 'hidden',
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRALS_5,
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
    color: NEUTRALS_100,
    marginBottom: 5,
  },
  optionTimeText: {
    fontSize: 12,
    color: NEUTRALS_40,
  },
  modalBackground: {
    flex: 1,
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
    backgroundColor: QUATERNARY_50,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    overflow: 'hidden',
  },
  optionsHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: NEUTRALS_10,
    padding: 10,
  },
  optionsHeaderTextContainer: {
    marginLeft: 10,
  },
  optionsHeaderTextName: {
    color: PRIMARY_100,
    fontWeight: '600',
    fontSize: 14,
    width: 180,
  },
  optionsHeaderTextEmail: {
    color: NEUTRALS_60,
    fontWeight: '500',
    fontSize: 12,
    width: 180,
  },
  optionsItemsText: {
    color: PRIMARY_100,
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
