import {StyleSheet} from 'react-native';
import {
  BLACK,
  BLACK_TRANSPARENT,
  BLUE,
  GREY_10,
  GREY_40,
  GREY_5,
  LIGHT_BLUE,
  WHITE,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 2,
  },
  imageNotification: {
    height: 25,
    width: 25,
  },
  dropDowncontainer: {
    position: 'absolute',
    zIndex: 200,
  },
  selectedOptionContainer: {
    padding: 10,
    backgroundColor: GREY_40,
    borderRadius: 5,
  },
  selectedOption: {
    fontSize: 12,
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: WHITE,
    borderRadius: 5,
    zIndex: 2,
    width: 350,
  },
  optionsContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: GREY_10,
    padding: 15,
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
  optionMarkAllText: {color: LIGHT_BLUE, fontSize: 12},
  optionNotificationText: {color: BLUE, fontWeight: '600', fontSize: 14},
  optionImage: {
    height: 8,
    width: 8,
    marginRight: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  optionViewAllText: {color: LIGHT_BLUE, fontSize: 12},
  optionViewAllTextContainer: {padding: 15},
  modalBackground: {
    flex: 1,
    backgroundColor: BLACK_TRANSPARENT,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const widthOptions = 325;
export const spaceBetween = 5;
