import {StyleSheet} from 'react-native';
import {BLACK, GREY_40, GREY_5, WHITE} from '../../../../styles/colors';

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
    backgroundColor: '#f2f2f2',
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
