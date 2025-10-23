import { useState, useRef } from 'react';
import { formatterDate, generateYearList, validateDate, adjustDateForMonth, parseDateString } from '../DatePickerInput.utils';

export const useDatePickerInput = (initialValue: any, dateFormat = 'MM/DD/YYYY') => {
    const yearListRef = useRef<any>(null);
    const monthListRef = useRef<any>(null);

    const [selectedDate, setSelectedDate] = useState<string>(initialValue || '');
    const [isPickerShow, setIsPickerShow] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [isMonthSelection, setIsMonthSelection] = useState(false);
    const [isYearSelection, setIsYearSelection] = useState(false);
    const [disabledYearSelection, setDisabledYearSelection] =
        useState<boolean>(false);
    const [disabledMonthSelection, setDisabledMonthSelection] =
        useState<boolean>(false);

    // Toggle date picker visibility
    const togglePicker = () => setIsPickerShow(!isPickerShow);

    // Go to next month
    const goToNextMonth = () => {
        if (!disabledMonthSelection) {
            currentMonth === 11
                ? changeMonthAndYear(0, currentYear + 1)
                : changeMonthAndYear(currentMonth + 1, currentYear);
        }
    };

    // Go to previous year
    const goToPreviousYear = () => {
        if (!disabledYearSelection) setCurrentYear(currentYear - 1);
    };

    // Go to next year
    const goToNextYear = () => {
        if (!disabledYearSelection) setCurrentYear(currentYear + 1);
    };

    // Change current month and year
    const changeMonthAndYear = (newMonth: any, newYear: any) => {
        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    // Toggle month selection
    const showMonthSelection = () => {
        setDisabledYearSelection(!isMonthSelection);
        setIsMonthSelection(!isMonthSelection);
    };

    const showYearSelection = () => {
        if (!isYearSelection) setDisabledMonthSelection(true);
        else setDisabledMonthSelection(false);

        setIsYearSelection(!isYearSelection);

        if (!isYearSelection) {
            const index = generateYearList().indexOf(currentYear);
            if (index !== -1 && yearListRef.current && yearListRef.current.scrollToIndex) {
                yearListRef.current.scrollToIndex({ animated: true, index });
            }
        }
    };

    // Set current month and update the selected date
    const selectMonth = (monthIndex: number) => {
        setCurrentMonth(monthIndex);
        setIsMonthSelection(false);
    };

    // Set current year and update the selected date
    const selectYear = (year: any) => {
        setCurrentYear(year);
        setIsYearSelection(false);
        // Parse selectedDate to Date object if it's a string
        const currentDateObj = typeof selectedDate === 'string' && selectedDate
            ? parseDateString(selectedDate, dateFormat)
            : new Date(year, currentMonth, 1);
        const adjustedDate = adjustDateForMonth(year, currentMonth, currentDateObj);
        const formattedDate = formatterDate(adjustedDate, dateFormat);
        setSelectedDate(formattedDate);
    };

    // Handle date change
    const handleDateChange = (date: any) => {
        const formattedDate = formatterDate(date, dateFormat);
        const isValidDate = validateDate(date, formattedDate, dateFormat);
        if (isValidDate) {
            setSelectedDate(formattedDate);
        }
        return { date: formattedDate, isValid: isValidDate };
    };

    // Go to previous month
    const goToPreviousMonth = () => {
        if (!disabledMonthSelection) {
            currentMonth === 0
                ? changeMonthAndYear(11, currentYear - 1)
                : changeMonthAndYear(currentMonth - 1, currentYear);
        }
    };

    return {
        selectedDate,
        isPickerShow,
        currentMonth,
        currentYear,
        isMonthSelection,
        isYearSelection,
        yearListRef,
        monthListRef,
        togglePicker,
        changeMonthAndYear,
        selectMonth,
        selectYear,
        setIsPickerShow,
        handleDateChange,
        setIsMonthSelection,
        setSelectedDate,
        setDisabledMonthSelection,
        disabledMonthSelection,
        showYearSelection,
        disabledYearSelection,
        setDisabledYearSelection,
        goToNextYear,
        goToPreviousMonth,
        goToNextMonth,
        goToPreviousYear,
        showMonthSelection,
        setCurrentMonth,
        setCurrentYear,
        setIsYearSelection,
    };
};
