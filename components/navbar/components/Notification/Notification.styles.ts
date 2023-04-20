import {StyleSheet} from 'react-native';
import {
  INITIAL_100,
  NEUTRALS_0,
  NEUTRALS_10,
  NEUTRALS_100,
  NEUTRALS_40,
  NEUTRALS_5,
  PRIMARY_100,
  TERTIARY_100,
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
    backgroundColor: NEUTRALS_40,
    borderRadius: 5,
  },
  selectedOption: {
    fontSize: 12,
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: NEUTRALS_100,
    borderRadius: 5,
    zIndex: 2,
    width: 350,
  },
  optionsContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: NEUTRALS_10,
    padding: 15,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRALS_5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    color: NEUTRALS_0,
    marginBottom: 5,
    width: 300,
  },
  optionTimeText: {
    fontSize: 12,
    color: NEUTRALS_40,
  },
  optionMarkAllText: {color: INITIAL_100, fontSize: 12},
  optionNotificationText: {color: PRIMARY_100, fontWeight: '600', fontSize: 14},
  optionImage: {
    height: 8,
    width: 8,
    marginRight: 10,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  optionImageSize: {
    height: 8,
    width: 8,
  },
  optionViewAllText: {color: INITIAL_100, fontSize: 12},
  optionViewAllTextContainer: {padding: 15},
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const widthOptions = 325;
export const spaceBetween = 5;
