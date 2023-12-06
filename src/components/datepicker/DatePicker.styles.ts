import { Platform, StyleSheet } from 'react-native';
import {
  DESTRUCTIVE_10,
  DESTRUCTIVE_100,
  NEUTRAL_200,
  NEUTRAL_300,
  NEUTRAL_400,
  NEUTRAL_50,
  PRIMARY_100,
  QUATERNARY_50,
  TERTIARY_70,
} from '../../styles/colors';
import { AppPlatform } from '../../helpers/utilsTypes';
import { MODAL_CONTENT_WIDTH } from './DatePicker.utils';

// Height of the calendar
export const CALENDAR_HEIGHT = 260;

// StyleSheet for DatePicker
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: Platform.OS === AppPlatform.web ? 8 : 20,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    opacity: 0.2,
  },
  datePickerInput: {
    textAlign: 'left',
    fontSize: 18,
    outlineStyle: 'none',
    flex: 1,
  },
  inputContainerWrapper: {
    borderRadius: 8,
    height: Platform.OS === AppPlatform.web ? undefined : 50,
    borderWidth: 5,
    margin: -5,
    borderColor: 'transparent',
  },
  monthAndYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  monthAndYearContent: {
    flexDirection: 'row',
    marginHorizontal: 12,
    alignItems: 'center',
    gap: 8,
  },
  inputWrapperFocused: {
    backgroundColor: QUATERNARY_50,
  },
  invalidDateWrapperFocused: {
    backgroundColor: DESTRUCTIVE_10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      Platform.OS === AppPlatform.web ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: NEUTRAL_50,
    borderRadius: 8,
    borderColor: NEUTRAL_300,
    alignSelf: Platform.OS === AppPlatform.web ? undefined : 'center',
    width: Platform.OS === AppPlatform.web ? MODAL_CONTENT_WIDTH : '90%',
    marginTop: Platform.OS === AppPlatform.web ? 8 : undefined,
    boxShadow:
      Platform.OS === AppPlatform.web
        ? '0px 1px 1.41px rgba(0, 0, 0, 0.20)'
        : undefined,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 10,
  },
  monthText: {
    fontSize: 16,
    color: PRIMARY_100,
  },
  arrow: {
    fontSize: 24,
    color: NEUTRAL_400,
  },
  dayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  dayHeaderText: {
    width: '14.28%',
    textAlign: 'center',
    color: 'NEUTRAL_800',
  },
  notCurrentMonthStyle: {
    color: NEUTRAL_400,
  },
  calendarContainer: {
    height: CALENDAR_HEIGHT,
    paddingHorizontal: 10,
    backgroundColor: NEUTRAL_50,
  },
  dayItem: {
    width: '14.28%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  dayItemText: {
    padding: 8,
    marginVertical: 2,
    borderRadius: 100,
    textAlign: 'center',
    width: 34,
    height: 34,
  },
  dayItemTextHover: {
    backgroundColor: NEUTRAL_200,
  },
  todayItemTextHover: {
    backgroundColor: TERTIARY_70,
    borderWidth: 1,
    borderColor: PRIMARY_100,
  },
  selectedDayBackground: {
    backgroundColor: PRIMARY_100,
    borderRadius: 100,
    padding: 8,
    height: 34,
    width: 34,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayText: {
    color: 'white',
  },
  dayText: {
    color: 'black',
    textAlign: 'center',
  },
  currentDayBorder: {
    borderWidth: 1,
    borderColor: PRIMARY_100,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    height: CALENDAR_HEIGHT,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  item: {
    justifyContent: 'center',
    padding: 10,
    margin: 2,
  },
  yearText: {
    fontSize: 16,
    width: 40,
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
    backgroundColor: NEUTRAL_50,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  disabledButtonStyle: {
    opacity: 0.2,
  },
});
