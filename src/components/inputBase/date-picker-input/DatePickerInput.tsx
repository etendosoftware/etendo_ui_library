import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Modal,
    TouchableWithoutFeedback,
    Platform,
    TouchableOpacity,
    Text,
    ScrollView,
    Pressable,
    FlatList,
} from 'react-native';
import InputBase from '../InputBase';
import { ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon, CalendarIcon } from '../../../assets/images/icons';
import { Button } from '../../button';
import { NEUTRAL_300, NEUTRAL_400, PRIMARY_100 } from '../../../styles/colors';

import { adjustDateForMonth, buildMonth, convertDateToEtendoERPFormat, formatterDate, generateYearList, parseDateString, validateDate } from './DatePickerInput.utils';
import { styles } from './DatePickerInput.styles';
import { AppPlatform } from '../../../helpers/utilsTypes';
import { translations } from '../../datepicker/DatePicker.translations';
import { DayItem, MonthItemProps } from '../../datepicker/DatePicker.types';
import { useDatePickerInput } from './hooks/useDatePickerInput';
import { ITEM_HEIGHT, MODAL_CONTENT_WIDTH, MODAL_POSITION_TOP } from './DatePickerInput.constants';
import { DatePickerInputProps } from './DatePickerInput.types';

const DatePickerInput = ({
    placeholder,
    title,
    helperText,
    isDisabled,
    isError,
    value,
    onChangeText,
    onSubmit,
    icon,
    isLoading,
    language = 'en-US',
    dateFormat = 'MM/DD/YYYY',
    ...props
}: DatePickerInputProps) => {
    const {
        selectedDate,
        isPickerShow,
        isMonthSelection,
        yearListRef,
        monthListRef,
        togglePicker,
        setIsPickerShow,
        setSelectedDate,
        showYearSelection,
        goToNextMonth,
        goToNextYear,
        goToPreviousMonth,
        goToPreviousYear,
        disabledMonthSelection,
        disabledYearSelection,
        setDisabledMonthSelection,
        setDisabledYearSelection,
        showMonthSelection,
        currentMonth,
        currentYear,
        setCurrentYear,
        selectMonth,
    } = useDatePickerInput(value, dateFormat);
    const inputRef = useRef<any>(null);

    // Get short day names and month names based on language
    const DAYS_SHORT_NAMES = translations[language].daysShort;
    const MONTHS_SHORT_NAMES = translations[language].monthsShort;
    const MONTHS_FULL_NAMES = translations[language].monthNames;

    const [hoveredDay, setHoveredDay] = useState<any>(null);
    const [isYearSelection, setIsYearSelection] = useState<boolean>(false);

    // Define the right button for the input (Calendar Icon)
    const rightButtons = [
        <Button
            key="calendar"
            width={48}
            typeStyle="white"
            onPress={togglePicker}
            iconLeft={<CalendarIcon style={{ width: 24, height: 24 }} fill={PRIMARY_100} />}
            disabled={isDisabled || isLoading}
        />,
    ];

    const [modalPosition, setModalPosition] = useState<any>({
        top: 0,
        bottom: 0,
    });

    // Function for the button 'Accept'
    const onAccept = () => {
        if (selectedDate && typeof onChangeText === 'function') {
            const dateObject = parseDateString(selectedDate, dateFormat);
            const formattedDateForERP = convertDateToEtendoERPFormat(dateObject);
            onChangeText(formattedDateForERP);
        }
        setIsPickerShow(false);
    };


    // Function for the button 'Cancel'
    const onCancel = () => {
        setIsPickerShow(false);
    };

    // Year selection list
    const yearList = generateYearList();
    useEffect(() => {
        const index = yearList.indexOf(currentYear);
        if (index !== -1 && yearListRef.current) {
            const offset = index * ITEM_HEIGHT;
            yearListRef.current.scrollTo({ y: offset, animated: false });
        }
    }, [currentYear, yearList]);

    useEffect(() => {
        if (Platform.OS === 'web' && isPickerShow && inputRef.current) {
            const rect = inputRef.current.getBoundingClientRect();
            setModalPosition({
                top: rect.bottom,
                left: rect.left,
            });
        }
    }, [isPickerShow]);


    // Render item for year selection
    const renderYearItem = ({ item }: { item: number }) => (
        <TouchableOpacity
            style={[styles.item, item === currentYear ? styles.selectedItem : null]}
            onPress={() => {
                selectYear(item);
                setDisabledMonthSelection(false);
            }}>
            <Text style={styles.yearText}>{item}</Text>
        </TouchableOpacity>
    );

    // Set current year and update the selected date
    const selectYear = (year: number) => {
        setCurrentYear(year);
        setIsYearSelection(false);
        const adjustedDate = adjustDateForMonth(year, currentMonth, selectedDate);
        setSelectedDate(adjustedDate);
    };


    // Render year selection list
    const renderYearSelection = () => {
        return (
            <ScrollView
                ref={yearListRef}
                style={styles.list}
            >
                {yearList.map((year) => (
                    <View key={year.toString()} style={{ height: ITEM_HEIGHT }}>
                        {renderYearItem({ item: year })}
                    </View>
                ))}
            </ScrollView>
        );
    };

    // Render item for month selection
    const renderMonthItem = ({ item, index }: MonthItemProps) => (
        <TouchableOpacity
            style={[styles.item, index === currentMonth && styles.selectedItem]}
            onPress={() => {
                selectMonth(index);
                setDisabledYearSelection(false);
            }}>
            <Text style={{ fontSize: 16, color: PRIMARY_100, }}>{item}</Text>
        </TouchableOpacity>
    );

    // Render month selection list
    const renderMonthSelection = () => {
        return (
            <ScrollView
                ref={monthListRef}
                style={styles.list}
            >
                {MONTHS_FULL_NAMES.map((month: string, index: number) => (
                    <View key={index.toString()} style={{ height: ITEM_HEIGHT }}>
                        {renderMonthItem({ item: month, index })}
                    </View>
                ))}
            </ScrollView>
        );
    };

    // Handle date selection from the calendar
    const onDateSelected = (date: Date) => {
        const formattedDateForDisplay = formatterDate(date, dateFormat);
        const formattedDateForERP = convertDateToEtendoERPFormat(date);

        setSelectedDate(formattedDateForDisplay);

        if (onChangeText) {
            onChangeText(formattedDateForERP);
        }
    };

    const handleTextChange = (text: string) => {
        let processedText = text.replace(/\D/g, '').substring(0, 8);

        if (processedText.length > 4) {
            processedText = `${processedText.substring(0, 2)}/${processedText.substring(2, 4)}/${processedText.substring(4)}`;
        } else if (processedText.length > 2) {
            processedText = `${processedText.substring(0, 2)}/${processedText.substring(2)}`;
        }

        const parts = processedText.split('/');
        if (parts.length === 3) {
            const parsedDate = new Date(parseInt(parts[2]), parseInt(parts[0]) - 1, parseInt(parts[1]));
            if (!isNaN(parsedDate.getTime())) {
                setSelectedDate(formatterDate(parsedDate, dateFormat));
                if (onChangeText) {
                    onChangeText(processedText);
                }
            }
        } else if (onChangeText) {
            onChangeText(processedText);
        }
    };

    // Render individual day item
    const renderDayItem = ({ date, isCurrentMonth }: DayItem) => {
        const isToday =
            date.getDate() === new Date().getDate() &&
            date.getMonth() === new Date().getMonth() &&
            date.getFullYear() === new Date().getFullYear();

        const isSelectedDate =
            isCurrentMonth &&
            date.getDate() === new Date(selectedDate).getDate() &&
            date.getMonth() === new Date(selectedDate).getMonth() &&
            date.getFullYear() === new Date(selectedDate).getFullYear();

        const notCurrentMonthStyle: any = {
            color: NEUTRAL_400,
        };

        // Determine if the date is part of the current month
        const isPartOfCurrentMonth = date.getMonth() === currentMonth;

        const dayKey = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        const isHovered = hoveredDay === dayKey && !isSelectedDate;
        const isTodayHovered = isToday && isHovered;

        return (
            <Pressable
                onPress={() => isPartOfCurrentMonth && onDateSelected(date)}
                onHoverIn={() => setHoveredDay(dayKey)}
                onHoverOut={() => setHoveredDay(null)}
                style={[
                    styles.dayItem,
                    isPartOfCurrentMonth ? null : notCurrentMonthStyle,
                ]}>
                <View
                    style={[
                        styles.dayItemText,
                        isSelectedDate ? styles.selectedDayBackground : {},
                        isToday && !isSelectedDate ? styles.currentDayBorder : {},
                        !isCurrentMonth ? notCurrentMonthStyle : {},
                        isHovered ? styles.dayItemTextHover : {},
                        isTodayHovered ? styles.todayItemTextHover : {},
                    ]}>
                    <Text
                        style={[
                            styles.dayText,
                            isSelectedDate ? styles.selectedDayText : {},
                            !isCurrentMonth ? notCurrentMonthStyle : {},
                            isPartOfCurrentMonth ? null : notCurrentMonthStyle,
                            isTodayHovered && { color: PRIMARY_100 },
                        ]}>
                        {date.getDate()}
                    </Text>
                </View>
            </Pressable>
        );
    };

    // Render calendar view
    const renderCalendar = () => {
        const daysInMonth = buildMonth(currentYear, currentMonth);

        return (
            <View style={styles.calendarContainer}>
                <View style={styles.dayHeader}>
                    {DAYS_SHORT_NAMES.map((day: string) => (
                        <Text key={day} style={styles.dayHeaderText}>
                            {day}
                        </Text>
                    ))}
                </View>
                <FlatList
                    data={daysInMonth}
                    numColumns={7}
                    renderItem={({ item }) =>
                        item && renderDayItem({ date: item, isCurrentMonth: true })
                    }
                    keyExtractor={(_: any, index: number) => index.toString()}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    };

    return (
        <View ref={inputRef}>
            <InputBase
                value={selectedDate}
                placeholder={placeholder}
                title={title}
                helperText={helperText}
                isDisabled={isDisabled}
                isError={isError}
                onChangeText={handleTextChange}
                icon={icon}
                rightButtons={rightButtons}
                onSubmit={onSubmit}
                isLoading={isLoading}
                {...props}
            />
            {isPickerShow && (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={isPickerShow}
                    onRequestClose={() => setIsPickerShow(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setIsPickerShow(false)}>
                        <View style={styles.modalContainer}>
                            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
                                <View
                                    style={[
                                        styles.modalContent,
                                        { width: MODAL_CONTENT_WIDTH },
                                        {
                                            position: Platform.OS === AppPlatform.web ? 'absolute' : 'relative',
                                            top: Platform.OS === AppPlatform.web ? modalPosition.top + MODAL_POSITION_TOP : undefined,
                                            left: Platform.OS === AppPlatform.web ? modalPosition.left : undefined,
                                        },
                                    ]}
                                >
                                    <View
                                        style={[
                                            styles.header,
                                            (isMonthSelection || isYearSelection) && {
                                                borderBottomWidth: 1,
                                                borderBottomColor: NEUTRAL_300,
                                            },
                                        ]}>
                                        <TouchableOpacity
                                            style={[
                                                styles.monthAndYearContainer,
                                                disabledMonthSelection && styles.disabledButtonStyle,
                                            ]}
                                            disabled={disabledMonthSelection}
                                            onPress={showMonthSelection}>
                                            <TouchableOpacity style={[styles.iconContainer, { alignItems: "flex-start", padding: 16, paddingLeft: 4, }]} onPress={goToPreviousMonth}>
                                                <ArrowLeftIcon style={styles.iconStyle} />
                                            </TouchableOpacity>
                                            <View style={[styles.monthAndYearContent]}>
                                                <Text style={styles.monthText}>
                                                    {MONTHS_SHORT_NAMES[currentMonth]}
                                                </Text>
                                                <ArrowDownIcon
                                                    style={{
                                                        width: 8,
                                                        transform: [
                                                            { rotate: isMonthSelection ? '180deg' : '0deg' },
                                                        ],
                                                    }}
                                                />
                                            </View>
                                            <TouchableOpacity style={[styles.iconContainer, { alignItems: "flex-start", padding: 16, }]} onPress={goToNextMonth}>
                                                <ArrowRightIcon style={styles.iconStyle} />
                                            </TouchableOpacity>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            style={[
                                                styles.monthAndYearContainer,
                                                disabledYearSelection && styles.disabledButtonStyle,
                                            ]}
                                            disabled={disabledYearSelection}
                                            onPress={showYearSelection}>
                                            <TouchableOpacity style={[styles.iconContainer, { alignItems: "flex-start", padding: 16, }]} onPress={goToPreviousYear}>
                                                <ArrowLeftIcon style={styles.iconStyle} />
                                            </TouchableOpacity>
                                            <View style={styles.monthAndYearContent}>
                                                <Text style={styles.yearText}>
                                                    {currentYear}
                                                </Text>
                                                <ArrowDownIcon
                                                    style={{
                                                        width: 8,
                                                        transform: [
                                                            { rotate: isYearSelection ? '180deg' : '0deg' },
                                                        ],
                                                    }}
                                                />
                                            </View>
                                            <TouchableOpacity style={[styles.iconContainer, { alignItems: "flex-start", padding: 16, paddingRight: 4 }]} onPress={goToNextYear}>
                                                <ArrowRightIcon style={styles.iconStyle} />
                                            </TouchableOpacity>
                                        </TouchableOpacity>
                                    </View>
                                    {isYearSelection
                                        ? renderYearSelection()
                                        : isMonthSelection
                                            ? renderMonthSelection()
                                            : renderCalendar()}

                                    <View style={styles.optionsContainer}>
                                        <Button
                                            typeStyle="white"
                                            text={translations[language].cancel}
                                            onPress={onCancel}
                                            paddingVertical={10}
                                        />
                                        <Button
                                            typeStyle="terciary"
                                            text={translations[language].accept}
                                            onPress={onAccept}
                                            paddingVertical={10}
                                        />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            )}
        </View>
    );
};

export default DatePickerInput;
