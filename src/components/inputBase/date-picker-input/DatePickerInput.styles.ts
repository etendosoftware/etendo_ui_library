import { StyleSheet } from 'react-native';
import {
  DESTRUCTIVE_10,
  DESTRUCTIVE_100,
  NEUTRAL_0,
  NEUTRAL_200,
  NEUTRAL_300,
  NEUTRAL_400,
  NEUTRAL_50,
  NEUTRAL_800,
  PRIMARY_100,
  QUATERNARY_50,
  TERTIARY_70,
} from '../../../styles/colors';
import { isWebPlatform } from '../../../helpers/functions_utils';

export const sizeStyles = {
  small: {
    modalWidth: 280,
    calendarBody: 190,
    heightCalendar: 300,
    textFontSize: 14,
    itemHeight: 30,
    monthText: 12,
    yearText: 12,
    iconStyle: { width: 20, height: 20 },
    iconDownStyle: { width: 20, height: 20 },
    iconContainer: { padding: 8 },
    headerPadding: { paddingTop: 10 },
    headerDayPadding: { paddingVertical: 4 },
    dayText: { fontSize: 10 },
    dayItem: { marginVertical: 0 },
    currentDayBorder: { width: 24, height: 24 },
    dayHeaderText: { fontSize: 12 },
    dayItemText: { padding: 4, width: 27, height: 27 },
    list: {
      height: 180,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    listFontSize: 12,
    listItemPadding: 6,
  },
  medium: {
    modalWidth: 320,
    calendarBody: 240,
    heightCalendar: 353,
    textFontSize: 16,
    itemHeight: 40,
    monthText: 14,
    yearText: 14,
    iconStyle: { width: 24, height: 24 },
    iconDownStyle: { width: 22, height: 22 },
    iconContainer: { padding: 10 },
    headerPadding: { paddingTop: 12 },
    headerDayPadding: { paddingVertical: 8 },
    dayText: { fontSize: 13 },
    dayItem: { marginVertical: 1 },
    currentDayBorder: { width: 28, height: 28 },
    dayHeaderText: { fontSize: 14 },
    dayItemText: { width: 30, height: 30 },
    list: {
      height: 240,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    listFontSize: 14,
    listItemPadding: 8,
  },
  large: {
    modalWidth: 360,
    calendarBody: 300,
    heightCalendar: 431,
    textFontSize: 14,
    itemHeight: 50,
    monthText: 14,
    yearText: 14,
    iconStyle: { width: 26, height: 26 },
    iconDownStyle: { width: 24, height: 24 },
    iconContainer: { padding: 14 },
    headerPadding: { paddingTop: 14 },
    headerDayPadding: { paddingVertical: 8 },
    dayText: { fontSize: 14 },
    dayItem: { marginVertical: 2 },
    currentDayBorder: { width: 36, height: 36 },
    dayHeaderText: { fontSize: 14 },
    dayItemText: { width: 40, height: 40 },
    list: {
      height: 300,
      paddingHorizontal: 10,
      paddingVertical: 8,
    },
    listFontSize: 14,
    listItemPadding: 10,
  },
};

// StyleSheet for DatePicker
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 40,
  },
  invalidDateInputWrapper: {
    borderColor: DESTRUCTIVE_100,
  },
  disabledInput: {
    opacity: 0.3,
  },
  inputContainerWrapper: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'transparent',
    position: 'relative',
  },
  monthAndYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
  },
  iconStyle: {
    width: 26,
    height: 26,
  },
  monthAndYearContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    justifyContent: 'center',
  },
  inputWrapperFocused: {
    backgroundColor: QUATERNARY_50,
  },
  invalidDateWrapperFocused: {
    backgroundColor: DESTRUCTIVE_10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: isWebPlatform() ? undefined : 'center',
    alignItems: isWebPlatform() ? 'flex-end' : 'center',
    backgroundColor: isWebPlatform() ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: NEUTRAL_50,
    borderRadius: 8,
    borderColor: NEUTRAL_300,
    alignSelf: isWebPlatform() ? undefined : 'center',
    width: '90%',
    marginTop: isWebPlatform() ? 8 : undefined,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
  },
  monthText: {
    fontSize: 16,
    width: 30,
    color: PRIMARY_100,
  },
  arrow: {
    fontSize: 24,
    color: NEUTRAL_400,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayHeaderText: {
    width: '14.28%',
    textAlign: 'center',
    color: NEUTRAL_800,
  },
  notCurrentMonthStyle: {
    color: NEUTRAL_400,
  },
  calendarContainer: {
    paddingHorizontal: 10,
    backgroundColor: NEUTRAL_50,
  },
  dayItem: {
    width: '14.28%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayItemText: {
    borderRadius: 100,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dayItemTextHover: {
    backgroundColor: NEUTRAL_200,
  },
  todayItemTextHover: {
    backgroundColor: TERTIARY_70,
    borderWidth: 1,
    borderColor: PRIMARY_100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedDayBackground: {
    backgroundColor: PRIMARY_100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayText: {
    color: NEUTRAL_0,
  },
  dayText: {
    textAlign: 'center',
  },
  currentDayBorder: {
    borderRadius: 100,
    borderWidth: 1,
    borderColor: PRIMARY_100,
  },
  item: {
    justifyContent: 'center',
    width: '100%',
    margin: 2,
  },
  yearText: {
    fontSize: 16,
    width: 36,
    color: PRIMARY_100,
  },
  selectedItem: {
    backgroundColor: TERTIARY_70,
    borderRadius: 8,
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 4,
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: NEUTRAL_50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  disabledButtonStyle: {
    opacity: 0.3,
  },
});
