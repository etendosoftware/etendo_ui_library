import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  View,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  ScrollView,
  Pressable,
  FlatList,
  Dimensions,
  TextInput,
} from 'react-native';
import InputBase from '../InputBase';
import { Button } from '../../button';
import { translations } from './DatePickerInput.translations';
import { sizeStyles, styles } from './DatePickerInput.styles';
import { useDatePickerInput } from './hooks/useDatePickerInput';
import { isWebPlatform } from '../../../helpers/functions_utils';
import { NEUTRAL_300, NEUTRAL_400, PRIMARY_100 } from '../../../styles/colors';
import {
  BoxShadowStyle,
  DatePickerInputProps,
  DayItem,
  MonthItemProps,
} from './DatePickerInput.types';
import {
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
  icon,
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
  const currentSizeStyles = sizeStyles[size];

  // States
  const [hoveredDay, setHoveredDay] = useState<any>(null);
  const [isInputError, setIsInputError] = useState<boolean>(false);
  const [isDateSelected, setIsDateSelected] = useState<boolean>(false);
  const [tempSelectedDate, setTempSelectedDate] = useState<string | null>(null);

  const [modalPosition, setModalPosition] = useState<{
    top: number;
    left: number;
    width: number;
  }>({ top: 0, left: 0, width: 0 });

  const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

  // References
  const inputRef = useRef<TextInput>(null);

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
      typeStyle="white"
      paddingHorizontal={0}
      paddingVertical={0}
      onPress={openCalendar}
      iconLeft={<CalendarIcon style={{ width: 24, height: 24 }} />}
      disabled={isDisabled}
    />,
  ];

  // Function to close the calendar
  const closeCalendar = () => {
    setIsPickerShow(false);
  };

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
  }, [currentYear, yearList, currentMonth]);

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

  const adjustDropdownPosition = useCallback(() => {
    if (inputRef.current && isWebPlatform()) {
      inputRef.current.measure((x, y, width, height, pageX, pageY) => {
        const spaceBelow = windowHeight - (pageY + height);
        const spaceInputModal = 16;
        if (currentSizeStyles.heightCalendar + spaceInputModal > spaceBelow) {
          setModalPosition({
            top: pageY - currentSizeStyles.heightCalendar - spaceInputModal,
            left: pageX,
            width: width,
          });
        } else {
          setModalPosition({ top: pageY + height, left: pageX, width: width });
        }
      });
    }
  }, [windowHeight, isPickerShow]);

  useEffect(() => {
    if (isWebPlatform()) {
      adjustDropdownPosition();
      const handleScroll = () => {
        if (isPickerShow) {
          adjustDropdownPosition();
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [isPickerShow, adjustDropdownPosition]);

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
    if (selectedDate?.trim() === '') {
      setIsInputError(false);
      return;
    }

    const parts = selectedDate?.split('/');
    let dateIsValid = false;

    if (selectedDate?.length === 10 && parts.length === 3) {
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
          { height: currentSizeStyles.calendarBody },
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

  const boxShadow = (): BoxShadowStyle | {} => {
    return isWebPlatform()
      ? { boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.20)' }
      : {};
  };

  return (
    <View>
      <InputBase
        refInputContainer={inputRef}
        value={selectedDate}
        placeholder={placeholder || dateFormat}
        title={title}
        helperText={helperText}
        isDisabled={isDisabled}
        isError={isInputError || isError}
        onChangeText={handleTextChange}
        icon={icon}
        onBlur={handleBlur}
        rightButtons={rightButtons}
        keyboardType="numeric"
        {...props}
      />
      {isPickerShow && (
        <Modal
          transparent={true}
          visible={isPickerShow}
          onRequestClose={() => setIsPickerShow(false)}
          animationType={'fade'}>
          <TouchableWithoutFeedback onPress={() => setIsPickerShow(false)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback>
                <View
                  style={[
                    styles.modalContent,
                    boxShadow(),
                    {
                      position: 'absolute',
                      width: currentSizeStyles.modalWidth,
                      top: isWebPlatform() ? modalPosition.top : undefined,
                      left: isWebPlatform()
                        ? modalPosition.left +
                          modalPosition.width -
                          currentSizeStyles.modalWidth
                        : undefined,
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
                          currentSizeStyles.iconContainer,
                          {
                            paddingLeft: 0,
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
                          style={currentSizeStyles.iconDownStyle}
                        />
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          currentSizeStyles.iconContainer,
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
                          currentSizeStyles.iconContainer,
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
                          style={currentSizeStyles.iconDownStyle}
                        />
                      </View>
                      <TouchableOpacity
                        style={[
                          styles.iconContainer,
                          currentSizeStyles.iconContainer,
                          {
                            paddingRight: 0,
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
        </Modal>
      )}
    </View>
  );
};

export default DatePickerInput;
