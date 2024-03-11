import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import InputBase from '../InputBase';
import { Button } from '../../button';
import { translations } from './DatePickerInput.translations';
import { sizeStyles, styles } from './DatePickerInput.styles';
import { useDatePickerInput } from './hooks/useDatePickerInput';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { NEUTRAL_300, NEUTRAL_400, PRIMARY_100 } from '../../../styles/colors';
import {
  DatePickerInputProps,
  DayItem,
  MonthItemProps,
} from './DatePickerInput.types';
import {
  ArrowLeftIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from '../../../assets/images/icons';
import {
  buildMonth,
  convertDateToEtendoERPFormat,
  formatterDate,
  generateYearList,
  parseDateString,
  parseLocalDateString,
} from './DatePickerInput.utils';

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
  minDate,
  maxDate,
  size = 'medium',
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
    selectMonth,
    setCurrentMonth,
    isYearSelection,
    setIsYearSelection,
    setCurrentYear,
  } = useDatePickerInput(value, dateFormat);
  // Get responsive styles
  const currentSizeStyles = isWebPlatform()
    ? sizeStyles[size]
    : sizeStyles['large'];

  // States
  const [hoveredDay, setHoveredDay] = useState<any>(null);
  const [isInputError, setIsInputError] = useState<boolean>(false);
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<string | null>(null);
  const [calendarPosition, setCalendarPosition] = useState<any>({
    top: undefined,
    bottom: undefined,
  });

  // References
  const inputRef = useRef<any>(null);

  // Date constants
  const parsedMinDate = minDate
    ? parseLocalDateString(minDate, dateFormat)
    : null;
  const parsedMaxDate = maxDate
    ? parseLocalDateString(maxDate, dateFormat)
    : null;

  // Get short day names and month names based on language
  const DAYS_SHORT_NAMES = translations[language].daysShort;
  const MONTHS_SHORT_NAMES = translations[language].monthsShort;
  const MONTHS_FULL_NAMES = translations[language].monthNames;

  // Function to open the calendar
  const openCalendar = () => {
    setTempSelectedDate(selectedDate);
    if (selectedDate) handleBlur();
    togglePicker();
    setIsDateSelected(false);
  };

  // Define the right button for the input (Calendar Icon)
  const rightButtons = [
    <Button
      key="calendar"
      width={48}
      typeStyle="white"
      onPress={openCalendar}
      iconLeft={
        <CalendarIcon style={{ width: 24, height: 24 }} fill={PRIMARY_100} />
      }
      disabled={isDisabled || isLoading}
    />,
  ];

  // Function to close the calendar
  const closeCalendar = () => {
    setIsPickerShow(false);
  };

  // Calculate the position of the calendar modal
  useEffect(() => {
    if (
      isWebPlatform() &&
      isPickerShow &&
      inputRef.current &&
      typeof window !== 'undefined'
    ) {
      const rect = inputRef.current.getBoundingClientRect();
      const modalWidth = currentSizeStyles.modalWidth;
      const modalHeight = currentSizeStyles.calendarHeight;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let calculatedLeft = rect.right - modalWidth;
      if (calculatedLeft + modalWidth > screenWidth) {
        calculatedLeft = screenWidth - modalWidth - 20;
      }

      const spaceBelow = screenHeight - rect.bottom;
      const spaceAbove = rect.top;

      let topPosition = rect.bottom + window.scrollY;
      if (spaceBelow < modalHeight && spaceAbove > modalHeight) {
        // If there is not enough space below but there is enough space above, show the calendar above
        topPosition = rect.top + window.scrollY - modalHeight;
      }
    }
  }, [isPickerShow, currentSizeStyles]);

  // Function for the button 'Accept'
  const onAccept = () => {
    const dateObject = parseDateString(selectedDate, dateFormat);
    if (dateObject && !isNaN(dateObject.getTime())) {
      const formattedDateForERP = convertDateToEtendoERPFormat(dateObject);
      if (typeof onChangeText === 'function') {
        onChangeText(formattedDateForERP);
      }
      setIsPickerShow(false);
    }
    setTempSelectedDate(null);
  };

  // Function for the button 'Cancel'
  const onCancel = () => {
    setSelectedDate(tempSelectedDate || '');
    setIsPickerShow(false);
    setTempSelectedDate(null);
    setIsDateSelected(false);
  };

  // Year selection list
  const yearList = generateYearList();

  useEffect(() => {
    const index = yearList.indexOf(currentYear);
    if (index !== -1 && yearListRef.current) {
      const offset = index * currentSizeStyles.itemHeight;
      yearListRef.current.scrollTo({ y: offset, animated: false });
    }
  }, [currentYear, yearList]);

  useEffect(() => {
    const index = yearList.indexOf(currentYear);
    if (index !== -1 && yearListRef.current) {
      const offset = index * currentSizeStyles.itemHeight;
      yearListRef.current.scrollTo({ y: offset, animated: false });
    }
  }, [currentMonth]);

  // Calendar position
  useEffect(() => {
    if (
      isWebPlatform() &&
      isPickerShow &&
      inputRef.current &&
      typeof window !== 'undefined'
    ) {
      const rect = inputRef.current.getBoundingClientRect();
      const modalHeight = currentSizeStyles.calendarHeight;
      const screenHeight = window.innerHeight;

      const spaceBelow = screenHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < modalHeight && spaceAbove > modalHeight) {
        // Not enough space below, show calendar above
        setCalendarPosition({
          top: 'auto',
          bottom: helperText ? '4.7rem' : '3.35rem',
        });
      } else {
        // Enough space below, show calendar below
        setCalendarPosition({ top: helperText ? '-1.55rem' : '0rem' });
      }
    }
  }, [isPickerShow, currentSizeStyles.calendarHeight]);

  // Reset error status when selected value changes
  useEffect(() => {
    setIsInputError(false);
  }, [selectedDate]);

  // Apply effect to center the selected month
  useEffect(() => {
    if (isMonthSelection && monthListRef.current) {
      const offset = currentMonth * currentSizeStyles.itemHeight;
      monthListRef.current.scrollTo({ y: offset, animated: false });
    }
  }, [isMonthSelection, currentMonth]);

  // Effect to set modal position
  useEffect(() => {
    if (
      isWebPlatform() &&
      isPickerShow &&
      inputRef.current &&
      typeof window !== 'undefined'
    ) {
      const rect = inputRef.current.getBoundingClientRect();
      const modalWidth = currentSizeStyles.modalWidth;
      const modalHeight = currentSizeStyles.calendarHeight;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      let calculatedLeft = rect.right - modalWidth;
      if (calculatedLeft + modalWidth > screenWidth) {
        calculatedLeft = screenWidth - modalWidth - 20;
      }

      const spaceBelow = screenHeight - rect.bottom;
      const spaceAbove = rect.top;

      let topPosition;
      if (spaceBelow >= modalHeight) {
        // Enough space below, place calendar below the input
        topPosition = rect.bottom + window.scrollY - 5;
      } else if (spaceAbove >= modalHeight) {
        // Enough space above, place calendar above the input
        topPosition = rect.top + window.scrollY - modalHeight - 70;
      } else {
        // Not enough space above or below, handle as needed
        topPosition = rect.bottom + window.scrollY;
      }
    }
  }, [isPickerShow, currentSizeStyles]);

  // Render item for year selection
  const renderYearItem = ({ item }: { item: number }) => (
    <TouchableOpacity
      style={[
        styles.item,
        { padding: currentSizeStyles.listItemPadding },
        item === currentYear ? styles.selectedItem : null,
      ]}
      onPress={() => {
        selectYear(item);
        setDisabledMonthSelection(false);
      }}>
      <Text
        style={[styles.yearText, { fontSize: currentSizeStyles.listFontSize }]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  // Set current year and update the selected date
  const selectYear = (year: number) => {
    setCurrentYear(year);
    setIsYearSelection(false);
  };

  // Render year selection list
  const renderYearSelection = () => {
    return (
      <ScrollView ref={yearListRef} style={currentSizeStyles.list}>
        {yearList.map(year => (
          <View
            key={year.toString()}
            style={{ height: currentSizeStyles.itemHeight }}>
            {renderYearItem({ item: year })}
          </View>
        ))}
      </ScrollView>
    );
  };

  // Render item for month selection
  const renderMonthItem = ({ item, index }: MonthItemProps) => (
    <TouchableOpacity
      style={[
        styles.item,
        { padding: currentSizeStyles.listItemPadding },
        index === currentMonth && styles.selectedItem,
      ]}
      onPress={() => {
        selectMonth(index);
        setDisabledYearSelection(false);
      }}>
      <Text
        style={{
          fontSize: currentSizeStyles.listFontSize,
          color: PRIMARY_100,
        }}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  // Render month selection list
  const renderMonthSelection = () => {
    return (
      <ScrollView ref={monthListRef} style={currentSizeStyles.list}>
        {MONTHS_FULL_NAMES.map((month: string, index: number) => (
          <View
            key={index.toString()}
            style={{ height: currentSizeStyles.itemHeight }}>
            {renderMonthItem({ item: month, index })}
          </View>
        ))}
      </ScrollView>
    );
  };

  // Handle date selection from the calendar
  const onDateSelected = (date: Date) => {
    const formattedDateForDisplay = formatterDate(date, dateFormat);
    setSelectedDate(formattedDateForDisplay.toString());
    setIsDateSelected(true);

    if (onChangeText) {
      const formattedDateForERP = convertDateToEtendoERPFormat(date);
      onChangeText(formattedDateForERP);
    }
  };

  // Control when text is changed by keyboard
  const handleTextChange = (text: string) => {
    let processedText = text.replace(/\D/g, '').substring(0, 8);

    if (processedText.length > 4) {
      processedText = `${processedText.substring(
        0,
        2,
      )}/${processedText.substring(2, 4)}/${processedText.substring(4)}`;
    } else if (processedText.length > 2) {
      processedText = `${processedText.substring(
        0,
        2,
      )}/${processedText.substring(2)}`;
    }

    setSelectedDate(processedText);
  };

  // Function to handle the onBlur event
  const handleBlur = () => {
    if (selectedDate.trim() === '') {
      setIsInputError(false);
      return;
    }

    const parts = selectedDate.split('/');
    let dateIsValid = false;

    if (selectedDate.length === 10 && parts.length === 3) {
      let day, month, year;

      if (dateFormat === 'DD/MM/YYYY') {
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10) - 1;
        year = parseInt(parts[2], 10);
      } else if (dateFormat === 'MM/DD/YYYY') {
        month = parseInt(parts[0], 10) - 1;
        day = parseInt(parts[1], 10);
        year = parseInt(parts[2], 10);
      } else {
        setIsInputError(true);
        return;
      }

      const date = new Date(year, month, day);

      dateIsValid =
        date.getFullYear() === year &&
        date.getMonth() === month &&
        date.getDate() === day;
      const dateIsWithinRange =
        (!parsedMinDate || date >= parsedMinDate) &&
        (!parsedMaxDate || date <= parsedMaxDate);
      dateIsValid = dateIsValid && dateIsWithinRange;

      if (dateIsValid) {
        setCurrentYear(year);
        setCurrentMonth(month);
        setSelectedDate(formatterDate(date, dateFormat));
      }
    }

    setIsInputError(!dateIsValid);
  };

  // Render individual day item
  const renderDayItem = ({ date, isCurrentMonth }: DayItem) => {
    const isDateBeforeMin = parsedMinDate ? date < parsedMinDate : false;
    const isDateAfterMax = parsedMaxDate ? date > parsedMaxDate : false;
    const isDateSelectable = !isDateBeforeMin && !isDateAfterMax;

    const disabledDayStyle = isDateSelectable ? {} : styles.disabledButtonStyle;

    const isToday =
      date.getDate() === new Date().getDate() &&
      date.getMonth() === new Date().getMonth() &&
      date.getFullYear() === new Date().getFullYear();

    const isSelectedDate =
      isCurrentMonth &&
      selectedDate &&
      (() => {
        if (typeof selectedDate === 'string' && selectedDate.length === 10) {
          let selectedYear, selectedMonth, selectedDay;
          const parts = selectedDate.split('/');

          if (dateFormat === 'DD/MM/YYYY') {
            selectedDay = parseInt(parts[0], 10);
            selectedMonth = parseInt(parts[1], 10) - 1;
            selectedYear = parseInt(parts[2], 10);
          } else if (dateFormat === 'MM/DD/YYYY') {
            selectedMonth = parseInt(parts[0], 10) - 1;
            selectedDay = parseInt(parts[1], 10);
            selectedYear = parseInt(parts[2], 10);
          } else {
            return false;
          }

          return (
            date.getDate() === selectedDay &&
            date.getMonth() === selectedMonth &&
            date.getFullYear() === selectedYear
          );
        }
        return false;
      })();

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
        onPress={() =>
          isPartOfCurrentMonth && isDateSelectable && onDateSelected(date)
        }
        disabled={!isDateSelectable}
        style={[
          styles.dayItem,
          currentSizeStyles.dayItem,
          isPartOfCurrentMonth ? null : notCurrentMonthStyle,
          disabledDayStyle,
        ]}
        onHoverIn={() => setHoveredDay(dayKey)}
        onHoverOut={() => setHoveredDay(null)}>
        <View
          style={[
            styles.dayItemText,
            currentSizeStyles.dayItemText,
            isSelectedDate ? styles.selectedDayBackground : {},
            isToday && !isSelectedDate ? [styles.currentDayBorder] : {},
            !isCurrentMonth ? notCurrentMonthStyle : {},
            isHovered && !isToday ? [styles.dayItemTextHover] : {},
            isTodayHovered ? styles.todayItemTextHover : {},
          ]}>
          <Text
            style={[
              styles.dayText,
              isSelectedDate ? styles.selectedDayText : {},
              !isCurrentMonth ? notCurrentMonthStyle : {},
              isPartOfCurrentMonth ? null : notCurrentMonthStyle,
              isTodayHovered && { color: PRIMARY_100 },
              currentSizeStyles.dayText,
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
      <View
        style={[
          styles.calendarContainer,
          { height: currentSizeStyles.calendarHeight },
        ]}>
        <View style={[styles.dayHeader, currentSizeStyles.headerDayPadding]}>
          {DAYS_SHORT_NAMES.map((day: string) => (
            <Text
              key={day}
              style={[styles.dayHeaderText, currentSizeStyles.dayHeaderText]}>
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

  const PlatformCalendarPicker: any = isWebPlatform() ? View : Modal;

  const modalProps = !isWebPlatform()
    ? {
        transparent: true,
        visible: isPickerShow,
        onRequestClose: () => setIsPickerShow(false),
        animationType: 'fade',
      }
    : {};

  return (
    <View ref={inputRef}>
      <InputBase
        value={selectedDate}
        placeholder={placeholder || dateFormat}
        title={title}
        helperText={helperText}
        isDisabled={isDisabled}
        isError={isInputError}
        onChangeText={handleTextChange}
        icon={icon}
        onBlur={handleBlur}
        rightButtons={rightButtons}
        onSubmit={onSubmit}
        isLoading={isLoading}
        keyboardType="numeric"
        {...props}
      />
      {isPickerShow && (
        <PlatformCalendarPicker {...modalProps}>
          <TouchableWithoutFeedback onPress={() => setIsPickerShow(false)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={e => e.stopPropagation()}>
                <View
                  style={[
                    styles.modalContent,
                    {
                      position: isWebPlatform() ? 'absolute' : 'relative',
                      width: currentSizeStyles.modalWidth,
                      top: calendarPosition.top,
                      bottom: calendarPosition.bottom,
                      right: isWebPlatform() ? 0 : undefined,
                    },
                  ]}>
                  <View
                    style={[
                      styles.header,
                      currentSizeStyles.headerPadding,
                      {
                        borderBottomColor:
                          isMonthSelection || isYearSelection
                            ? NEUTRAL_300
                            : 'transparent',
                      },
                    ]}>
                    <TouchableOpacity
                      style={[
                        styles.monthAndYearContainer,
                        disabledMonthSelection && styles.disabledButtonStyle,
                      ]}
                      disabled={disabledMonthSelection}
                      onPress={showMonthSelection}>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          {
                            alignItems: 'flex-start',
                            padding: 16,
                            paddingLeft: 4,
                          },
                        ]}
                        onPress={goToPreviousMonth}>
                        <ChevronLeftIcon style={currentSizeStyles.iconStyle} />
                      </TouchableOpacity>
                      <View style={[styles.monthAndYearContent]}>
                        <Text
                          style={[
                            styles.monthText,
                            { fontSize: currentSizeStyles.monthText },
                          ]}>
                          {MONTHS_SHORT_NAMES[currentMonth]}
                        </Text>
                        <ChevronDownIcon
                          style={{
                            width: 12,
                            height: 12,
                          }}
                        />
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          { alignItems: 'flex-start', padding: 16 },
                        ]}
                        onPress={goToNextMonth}>
                        <ChevronRightIcon style={currentSizeStyles.iconStyle} />
                      </TouchableOpacity>
                    </TouchableOpacity>

                    <TouchableOpacity
                      style={[
                        styles.monthAndYearContainer,
                        disabledYearSelection && styles.disabledButtonStyle,
                      ]}
                      disabled={disabledYearSelection}
                      onPress={showYearSelection}>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          { alignItems: 'flex-start', padding: 16 },
                        ]}
                        onPress={goToPreviousYear}>
                        <ChevronLeftIcon style={currentSizeStyles.iconStyle} />
                      </TouchableOpacity>
                      <View style={styles.monthAndYearContent}>
                        <Text
                          style={[
                            styles.yearText,
                            { fontSize: currentSizeStyles.yearText },
                          ]}>
                          {currentYear}
                        </Text>
                        <ChevronDownIcon
                          style={{
                            width: 14,
                            height: 14,
                          }}
                        />
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          {
                            alignItems: 'flex-start',
                            padding: 16,
                            paddingRight: 4,
                          },
                        ]}
                        onPress={goToNextYear}>
                        <ChevronRightIcon style={currentSizeStyles.iconStyle} />
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
                      disabled={!isDateSelected}
                    />
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </PlatformCalendarPicker>
      )}
    </View>
  );
};

export default DatePickerInput;
