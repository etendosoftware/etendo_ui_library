import { StyleSheet } from 'react-native';
import {
  INITIAL_100,
  NEUTRAL_0,
  NEUTRAL_10,
  NEUTRAL_100,
  NEUTRAL_40,
  NEUTRAL_5,
  OVERLAY,
  PRIMARY_100,
} from '../../../../styles/colors';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    zIndex: 2,
  },
  imageNotification: {
    height: 28,
    width: 28,
  },
  dropDowncontainer: {
    position: 'absolute',
    zIndex: 200,
  },
  selectedOptionContainer: {
    padding: 10,
    backgroundColor: NEUTRAL_40,
    borderRadius: 5,
  },
  selectedOption: {
    fontSize: 12,
  },
  optionsContainer: {
    position: 'absolute',
    backgroundColor: NEUTRAL_0,
    borderRadius: 5,
    zIndex: 2,
    width: 350,
  },
  optionsContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_10,
    padding: 15,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: NEUTRAL_5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    color: NEUTRAL_100,
    marginBottom: 5,
    width: 300,
  },
  optionTimeText: {
    fontSize: 12,
    color: NEUTRAL_40,
  },
  optionMarkAllText: { color: INITIAL_100, fontSize: 12 },
  optionNotificationText: {
    color: PRIMARY_100,
    fontWeight: '600',
    fontSize: 14,
  },
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
  optionViewAllText: { color: INITIAL_100, fontSize: 12 },
  optionViewAllTextContainer: { padding: 15 },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: OVERLAY,
  },
});

export const widthOptions = 325;
export const spaceBetween = 5;
