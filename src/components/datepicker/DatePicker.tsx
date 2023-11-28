/* Imports */
import React, { useState } from 'react';

import {
  Modal,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
} from 'react-native';

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CalendarIcon,
} from '../../assets/images/icons';

import { PRIMARY_400 } from '../../styles/colors';
import { styles } from './DatePicker.styles';

import { translations } from './DatePicker.translations';
import { DatePickerProps, DayItem } from './DatePicker.types';
import { generateYearList, parseLocalDateString } from './DatePicker.utils';

const DatePicker = ({
  language,
  styleField,
  onChange,
  formatDate,
  timeZone,
  value,
}: DatePickerProps) => {
  // states for the date picker
  const [isPickerShow, setIsPickerShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<any>(new Date());
  const [isYearSelection, setIsYearSelection] = useState<boolean>(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  // Toggle year selection
  const showYearSelection = () => setIsYearSelection(!isYearSelection);

  // Set current year and close year selection
  const selectYear = (year: number) => {
    setCurrentYear(year);
    setIsYearSelection(false);
  };

  // Render item for year selection
  const renderYearItem = ({ item }: { item: number }) => (
    <TouchableOpacity style={styles.yearItem} onPress={() => selectYear(item)}>
      <Text style={styles.yearText}>{item}</Text>
    </TouchableOpacity>
  );

  // Render year selection list
  const renderYearSelection = () => (
    <FlatList
      data={generateYearList()}
      renderItem={renderYearItem}
      keyExtractor={item => item.toString()}
      numColumns={4}
      style={styles.yearList}
    />
  );

  // Change current month and year
  const changeMonthAndYear = (newMonth: number, newYear: number) => {
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  // Go to next month
  const goToNextMonth = () => {
    currentMonth === 11
      ? changeMonthAndYear(0, currentYear + 1)
      : changeMonthAndYear(currentMonth + 1, currentYear);
  };

  // Go to previous month
  const goToPreviousMonth = () => {
    currentMonth === 0
      ? changeMonthAndYear(11, currentYear - 1)
      : changeMonthAndYear(currentMonth - 1, currentYear);
  };

  // Get short day names and month names based on language
  const daysShort = translations[language].daysShort;
  const monthNames = translations[language].monthNames;

  // Toggle date picker display
  const showPicker = () => {
    setIsPickerShow(!isPickerShow);

    // If date is selected, set current month and year to selected date
    if (!isPickerShow && selectedDate) {
      setCurrentMonth(selectedDate.getMonth());
      setCurrentYear(selectedDate.getFullYear());
    }
  };

  // Handle date selection
  const onDateSelected = (date: Date) => {
    setSelectedDate(date);
    onChange(formatDate(date, language, timeZone));
    setCurrentMonth(date.getMonth());
    setCurrentYear(date.getFullYear());
    setIsPickerShow(false);
  };

  // Get all days in a month
  const getDaysInMonth = (month: number, year: number): DayItem[] => {
    const days: DayItem[] = [];
    let date = new Date(year, month, 1);
    while (date.getMonth() === month) {
      days.push({ date: new Date(date), isCurrentMonth: true });
      date.setDate(date.getDate() + 1);
    }
    return days;
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

    // Convert to date object if the date is complete
    if (processedText.length === 10) {
      const dateObject = parseLocalDateString(processedText, language);
      setSelectedDate(dateObject);
      onChange(formatDate(dateObject, language, timeZone));
    } else {
      setSelectedDate(undefined);
      onChange(processedText);
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

    return (
      <TouchableOpacity
        style={styles.dayItem}
        onPress={() => onDateSelected(date)}>
        <View
          style={[
            styles.dayItemText,
            isSelectedDate ? styles.selectedDayBackground : {},
            isToday && !isSelectedDate ? styles.currentDayBorder : {},
          ]}>
          <Text
            style={isSelectedDate ? styles.selectedDayText : styles.dayText}>
            {date.getDate()}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  // Render calendar view
  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);

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
          renderItem={({ item }) => renderDayItem(item)}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  };

  // Conditional component based on platform
  const PlatformComponent: any = Platform.OS === 'web' ? View : Modal;

  return (
    <View style={styles.container}>
      <View style={[styleField.field, styles.inputWrapper]}>
        <TextInput
          style={styles.datePickerInput}
          value={formatDate(selectedDate, language, timeZone)}
          placeholder={language === 'en' ? 'MM/DD/YYYY' : 'DD/MM/YYYY'}
          placeholderTextColor={PRIMARY_400}
          editable={true}
          onChangeText={handleTextInputChange}
        />

        <TouchableOpacity onPress={showPicker}>
          <CalendarIcon style={styles.calendarIcon} />
        </TouchableOpacity>
      </View>

      <PlatformComponent
        {...(Platform.OS === 'web'
          ? {
              style: {
                display: isPickerShow ? 'flex' : 'none',
                boxShadow: '0px 1px 1.41px rgba(0, 0, 0, 0.20)',
              },
            }
          : {
              transparent: true,
              visible: isPickerShow,
              onRequestClose: showPicker,
            })}>
        <TouchableOpacity
          style={!(Platform.OS === 'web') && styles.modalContainer}
          activeOpacity={1}
          onPressOut={showPicker}>
          <View style={styles.modalContent}>
            <View style={styles.header}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}
                onPress={showYearSelection}>
                <Text style={styles.monthText}>
                  {monthNames[currentMonth]} {currentYear}
                </Text>
                <ArrowDownIcon
                  style={{
                    width: 10,
                    transform: [
                      { rotate: isYearSelection ? '180deg' : '0deg' },
                    ],
                  }}
                />
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableOpacity onPress={goToPreviousMonth}>
                  <ArrowLeftIcon style={{ width: 10 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={goToNextMonth}>
                  <ArrowRightIcon style={{ width: 10 }} />
                </TouchableOpacity>
              </View>
            </View>
            {isYearSelection ? renderYearSelection() : renderCalendar()}
          </View>
        </TouchableOpacity>
      </PlatformComponent>
    </View>
  );
};

export default DatePicker;
