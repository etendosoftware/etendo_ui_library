import { Platform, StyleSheet } from 'react-native';
import {
    DESTRUCTIVE_10,
    DESTRUCTIVE_100,
    NEUTRAL_200,
    NEUTRAL_300,
    NEUTRAL_400,
    NEUTRAL_50,
    NEUTRAL_800,
    PRIMARY_100,
    QUATERNARY_50,
    TERTIARY_70,
} from '../../../styles/colors';
import { AppPlatform } from '../../../helpers/utilsTypes';
import { CALENDAR_HEIGHT, MODAL_CONTENT_WIDTH } from './DatePickerInput.constants';

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
        color: PRIMARY_100,
        fontWeight: '500',
        flex: 1,
        paddingVertical: 0,
        paddingHorizontal: 0,
    },
    inputContainerWrapper: {
        borderRadius: 8,
        borderWidth: 5,
        borderColor: 'transparent',
        position: 'relative',
    },
    monthAndYearContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: "center",
    },
    iconStyle: {
        width: 16,
        height: 16,
    },
    monthAndYearContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        justifyContent: "center",
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
        paddingTop: 16,
        paddingBottom: 12,
    },
    monthText: {
        fontSize: 16,
        width: 36,
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
        color: NEUTRAL_800,
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
        padding: 12,
        marginVertical: 2,
        borderRadius: 100,
        textAlign: 'center',
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
        height: 36,
        width: 36,
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
        borderRadius: 100,
        borderWidth: 1,
        borderColor: PRIMARY_100,
        padding: 8,
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        height: CALENDAR_HEIGHT,
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
    item: {
        justifyContent: 'center',
        padding: 10,
        width: "100%",
        margin: 2,
    },
    yearText: {
        fontSize: 16,
        width: 44,
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
        backgroundColor: NEUTRAL_50,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    disabledButtonStyle: {
        opacity: 0.2,
    },
});