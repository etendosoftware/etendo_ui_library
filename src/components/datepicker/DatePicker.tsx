/* Imports */
import React, { useEffect, useRef, useState } from 'react';

import {
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  Dimensions,
  Pressable,
} from 'react-native';

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from '../../assets/images/icons';

import {
  NEUTRAL_300,
  NEUTRAL_400,
  NEUTRAL_50,
  NEUTRAL_600,
  PRIMARY_100,
} from '../../styles/colors';
import { AppPlatform } from '../../helpers/utilsTypes';

import { CALENDAR_HEIGHT, styles } from './DatePicker.styles';
import { translations } from './DatePicker.translations';
import { DatePickerProps, DayItem } from './DatePicker.types';
import {
  buildMonth,
  formatterDate,
  generateYearList,
  getPlaceholderDateFormat,
  parseLocalDateString,
  validateDate,
  MODAL_CONTENT_WIDTH,
} from './DatePicker.utils';

// Button from the Etendo UI library
import { Button } from '../button';

const DatePicker = ({
  value,
  styleField,
  onChangeText,
  language = 'en-US',
  dateFormat = 'MM/DD/YYYY',
  disabled = false,
  showCalendar = true,
  backgroundColor = NEUTRAL_50,
}: DatePickerProps) => {
  // states for the date picker
  const [hoveredDay, setHoveredDay] = useState<any>(null);
  const [isDateValid, setIsDateValid] = useState<boolean>(true);
  const [isMonthSelection, setIsMonthSelection] = useState(false);
  const [isPickerShow, setIsPickerShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [isYearSelection, setIsYearSelection] = useState<boolean>(false);
  const [calendarDirection, setCalendarDirection] = useState('downwards');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [disabledMonthSelection, setDisabledMonthSelection] =
    useState<boolean>(false);
  const [disabledYearSelection, setDisabledYearSelection] =
    useState<boolean>(false);
  const [currentSelectedDate, setTempSelectedDate] = useState<Date>(
    new Date(selectedDate),
  );
  const [modalPosition, setModalPosition] = useState<any>({
    top: undefined,
    bottom: undefined,
  });

  // Effect to validate and set the selected date
  useEffect(() => {
    if (value) {
      const defaultValue = parseLocalDateString(value, dateFormat);
      const isValid = validateDate(defaultValue, value, dateFormat);

      setIsDateValid(isValid);
      if (isValid) {
        setSelectedDate(defaultValue);
        setCurrentMonth(defaultValue.getMonth());
        setCurrentYear(defaultValue.getFullYear());
      } else {
        setSelectedDate(new Date());
        setCurrentMonth(new Date().getMonth());
        setCurrentYear(new Date().getFullYear());
      }
    }
  }, [value, dateFormat]);

  // References for the date picker
  const inputRef: any = useRef(null);
  const monthListRef: any = useRef(null);

  // Toggle month selection
  const showMonthSelection = () => {
    if (!isMonthSelection) setDisabledYearSelection(true);
    else setDisabledYearSelection(false);

    setIsMonthSelection(!isMonthSelection);

    if (!isMonthSelection && monthListRef.current) {
      monthListRef.current.scrollToIndex({
        animated: true,
        index: currentMonth,
      });
    }
  };

  // Adjust the selected date if the month has less days
  const adjustDateForMonth = (
    year: number,
    month: number,
    currentSelectedDate: Date,
  ) => {
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    if (currentSelectedDate.getDate() > lastDayOfMonth) {
      return new Date(year, month, lastDayOfMonth);
    }
    return new Date(year, month, currentSelectedDate.getDate());
  };

  // Toggle year selection
  const showYearSelection = () => {
    if (!isYearSelection) setDisabledMonthSelection(true);
    else setDisabledMonthSelection(false);

    setIsYearSelection(!isYearSelection);

    if (!isYearSelection) {
      const index = generateYearList().indexOf(currentYear);
      if (index !== -1 && yearListRef.current) {
        yearListRef.current.scrollToIndex({ animated: true, index });
      }
    }
  };

  // Set current month and update the selected date
  const selectMonth = (monthIndex: number) => {
    setCurrentMonth(monthIndex);
    setIsMonthSelection(false);

    const adjustedDate = adjustDateForMonth(
      currentYear,
      monthIndex,
      selectedDate,
    );
    setSelectedDate(adjustedDate);

    if (onChangeText) {
      onChangeText(formatterDate(adjustedDate, dateFormat));
    }
  };

  // Set current year and update the selected date
  const selectYear = (year: number) => {
    setCurrentYear(year);
    setIsYearSelection(false);

    const adjustedDate = adjustDateForMonth(year, currentMonth, selectedDate);
    setSelectedDate(adjustedDate);

    if (onChangeText) {
      onChangeText(formatterDate(adjustedDate, dateFormat));
    }
  };

  // Render item for month selection
  const renderMonthItem = ({ item, index }: any) => (
    <TouchableOpacity
      style={[styles.item, index === currentMonth && styles.selectedItem]}
      onPress={() => {
        selectMonth(index);
        setDisabledYearSelection(false);
      }}>
      <Text style={styles.monthText}>{item}</Text>
    </TouchableOpacity>
  );

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

  // Render month selection list
  const renderMonthSelection = () => (
    <FlatList
      ref={monthListRef}
      data={monthNames}
      renderItem={renderMonthItem}
      keyExtractor={(_, index) => index.toString()}
      style={styles.list}
      initialScrollIndex={currentMonth}
      getItemLayout={(_, index) => ({
        length: Platform.OS === AppPlatform.web ? 20 * index : 43.5,
        offset: 43.5 * index,
        index,
      })}
    />
  );

  // Reference for year selection list
  const yearListRef: any = useRef(null);
  // Render year selection list
  const renderYearSelection = () => {
    const yearList = generateYearList();

    return (
      <FlatList
        ref={yearListRef}
        data={yearList}
        renderItem={renderYearItem}
        keyExtractor={item => item.toString()}
        style={styles.list}
        initialScrollIndex={yearList.indexOf(currentYear)}
        getItemLayout={(_, index) => ({
          length: Platform.OS === AppPlatform.web ? 43 : 30,
          offset: Platform.OS === AppPlatform.web ? 43 * index : 43 * index,
          index,
        })}
      />
    );
  };

  // Change current month and year
  const changeMonthAndYear = (newMonth: number, newYear: number) => {
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Go to previous month
  const goToPreviousMonth = () => {
    if (!disabledMonthSelection) {
      currentMonth === 0
        ? changeMonthAndYear(11, currentYear - 1)
        : changeMonthAndYear(currentMonth - 1, currentYear);
    }
  };

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

  // Get short day names and month names based on language
  const daysShort = translations[language].daysShort;
  const monthsShort = translations[language].monthsShort;
  const monthNames = translations[language].monthNames;

  // Calculate calendar direction
  const calculateCalendarDirection = () => {
    if (inputRef.current) {
      inputRef.current.measure(
        (
          x: number,
          y: number,
          width: number,
          height: number,
          pageX: number,
          pageY: number,
        ) => {
          const windowHeight = Dimensions.get('window').height;
          const spaceBelow = windowHeight - pageY - height;
          let modalLeftPosition = pageX + width - MODAL_CONTENT_WIDTH;
          modalLeftPosition = Math.max(modalLeftPosition, 0);

          if (spaceBelow >= CALENDAR_HEIGHT) {
            setModalPosition({ top: pageY + height, left: modalLeftPosition });
          } else {
            setModalPosition({
              top: pageY - CALENDAR_HEIGHT - 155,
              left: modalLeftPosition,
            });
          }
        },
      );
    }
  };

  // Toggle date picker display
  const showPicker = () => {
    if (!disabled) {
      calculateCalendarDirection();
      // Close month and year selection if they are open
      if (isMonthSelection) setIsMonthSelection(false);
      if (isYearSelection) setIsYearSelection(false);

      // Enable month and year selection
      if (disabledMonthSelection) setDisabledMonthSelection(false);
      if (disabledYearSelection) setDisabledYearSelection(false);

      // Set picker visibility
      setIsPickerShow(!isPickerShow);

      // If date is selected, set current month and year to selected date
      if (!isPickerShow && selectedDate) {
        setCurrentMonth(selectedDate.getMonth());
        setCurrentYear(selectedDate.getFullYear());
      }
    }
  };

  // Handle date selection from the calendar
  const onDateSelected = (date: Date) => {
    const formattedDate = formatterDate(date, dateFormat);
    const isValidDate = validateDate(date, formattedDate, dateFormat);

    setTempSelectedDate(date);
    setSelectedDate(date);
    setIsDateValid(isValidDate);

    if (isValidDate && onChangeText) {
      onChangeText(formattedDate);
    }
  };

  // Function for the button 'Accept'
  const onAccept = () => {
    if (selectedDate) {
      onChangeText(formatterDate(selectedDate, dateFormat));
    }
    setIsPickerShow(false);
  };

  // Function for the button 'Cancel'
  const onCancel = () => {
    setSelectedDate(currentSelectedDate);
    setIsPickerShow(false);
  };

  // Handle text input change and format the date
  const handleTextInputChange = (text: string) => {
    // Just allow numbers and limit the length to 8
    let processedText = text.replace(/[^0-9]/g, '').slice(0, 8);

    // Format the date
    if (processedText.length > 2) {
      processedText = processedText.slice(0, 2) + '/' + processedText.slice(2);
    }
    if (processedText.length > 5) {
      processedText = processedText.slice(0, 5) + '/' + processedText.slice(5);
    }

    // Update the date value as user types
    onChangeText(processedText);

    // Convert to date object if the date is complete and verify if it's valid
    if (processedText.length === 10) {
      const dateObject = parseLocalDateString(processedText, dateFormat);
      const isValidDate = validateDate(dateObject, processedText, dateFormat);

      if (isValidDate) {
        setSelectedDate(dateObject);
        setIsDateValid(true);
      } else {
        setIsDateValid(false);
      }
    } else {
      // Reset to valid as user is still typing
      setIsDateValid(true);
      setSelectedDate(undefined);
    }
  };

  // Format the text input value
  const formatInputText = (text: string) => {
    // Remove all non-numeric characters
    let processedText = text.replace(/[^0-9]/g, '');

    // Limit the length to 8 characters
    processedText = processedText.slice(0, 8);

    // Format the date
    if (processedText.length > 2) {
      processedText = processedText.slice(0, 2) + '/' + processedText.slice(2);
    }
    if (processedText.length > 5) {
      processedText = processedText.slice(0, 5) + '/' + processedText.slice(5);
    }

    return processedText;
  };

  // Handle blur event on text input
  const handleBlur = () => {
    const formattedText = formatInputText(value);
    const dateObject = parseLocalDateString(formattedText, dateFormat);

    const isValid = validateDate(dateObject, formattedText, dateFormat);
    setIsDateValid(isValid);

    if (isValid) {
      setSelectedDate(dateObject);
    } else {
      setSelectedDate(undefined);
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
          {daysShort.map((day: string) => (
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
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainerWrapper,
          (isPickerShow || isInputFocused) && styles.inputWrapperFocused,
          !isDateValid && styles.invalidDateWrapperFocused,
        ]}>
        <View
          ref={inputRef}
          style={[
            styleField.field,
            styles.inputWrapper,
            !isDateValid && styles.invalidDateInputWrapper,
            { backgroundColor: backgroundColor },
          ]}>
          <TextInput
            style={[
              styles.datePickerInput,
              disabled && styles.disabledInput,
              { backgroundColor: backgroundColor },
            ]}
            value={value}
            placeholder={getPlaceholderDateFormat(dateFormat)}
            placeholderTextColor={NEUTRAL_600}
            editable={!disabled}
            onChangeText={handleTextInputChange}
            focusable
            onFocus={() => !disabled && setIsInputFocused(true)}
            onBlur={() => {
              setIsInputFocused(false), !disabled && handleBlur();
            }}
          />

          {/* Show calendar icon if showCalendar is true */}
          {showCalendar && (
            <TouchableOpacity onPress={showPicker} disabled={disabled}>
              <CalendarIcon style={disabled && { opacity: 0.2 }} width={25} />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isPickerShow}
        onRequestClose={showPicker}>
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPress={showPicker}>
          <View
            style={[
              styles.modalContent,
              { width: MODAL_CONTENT_WIDTH },
              {
                position: 'absolute',
                top: modalPosition.top + 5,
                left: modalPosition.left,
              },
            ]}
            onStartShouldSetResponder={() => true}>
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
                <TouchableOpacity onPress={goToPreviousMonth}>
                  <ArrowLeftIcon style={{ width: 10, padding: 5 }} />
                </TouchableOpacity>
                <View style={styles.monthAndYearContent}>
                  <Text style={styles.monthText}>
                    {monthsShort[currentMonth]}
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
                <TouchableOpacity onPress={goToNextMonth}>
                  <ArrowRightIcon style={{ width: 10, padding: 5 }} />
                </TouchableOpacity>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.monthAndYearContainer,
                  disabledYearSelection && styles.disabledButtonStyle,
                ]}
                disabled={disabledYearSelection}
                onPress={showYearSelection}>
                <TouchableOpacity onPress={goToPreviousYear}>
                  <ArrowLeftIcon style={{ width: 10, padding: 5 }} />
                </TouchableOpacity>
                <View style={styles.monthAndYearContent}>
                  <Text style={styles.yearText}>{currentYear}</Text>
                  <ArrowDownIcon
                    style={{
                      width: 8,
                      transform: [
                        { rotate: isYearSelection ? '180deg' : '0deg' },
                      ],
                    }}
                  />
                </View>
                <TouchableOpacity onPress={goToNextYear}>
                  <ArrowRightIcon style={{ width: 10, padding: 5 }} />
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
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default DatePicker;
