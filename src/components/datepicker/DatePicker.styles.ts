import { Platform, StyleSheet } from 'react-native';
import {
  NEUTRAL_400,
  NEUTRAL_600,
  PRIMARY_100,
  TERTIARY_100,
} from '../../styles/colors';

// StyleSheet for DatePicker
export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  datePickerButton: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: Platform.OS === 'web' ? 8 : 20,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Platform.OS === 'web' ? 8 : 20,
    paddingHorizontal: 16,
  },
  datePickerInput: {
    flex: 1,
    textAlign: 'left',
    fontSize: 18,
    outlineStyle: 'none',
  },
  calendarIcon: {
    width: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    width: Platform.OS === 'web' ? '100%' : '90%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  monthText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: NEUTRAL_600,
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
    color: TERTIARY_100,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  calendarContainer: {
    backgroundColor: 'white',
    height: 250,
  },
  dayItem: {
    width: '14.28%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
  },
  dayItemText: {
    padding: 8,
    borderRadius: 15,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  selectedDayBackground: {
    backgroundColor: PRIMARY_100,
    borderRadius: 100,
    padding: 8,
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedDayText: {
    color: 'white',
  },
  dayText: {
    color: 'black',
  },
  currentDayBorder: {
    borderWidth: 1,
    borderColor: NEUTRAL_400,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yearList: {
    height: 250,
  },
  yearItem: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    margin: 2,
  },
  yearText: {
    fontSize: 16,
  },
});
