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

import { DayItem } from './DatePicker.types';

import { translations } from './DatePicker.translations';
import { formatDate } from './DatePicker.utils';
import { styles } from './DatePicker.styles';

const DatePicker = ({
  language,
  styleField,
  onChange,
  formatDate,
  timeZone,
  value,
}: any) => {
  // states for the date picker
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isYearSelection, setIsYearSelection] = useState(false);

  // Toggle year selection
  const showYearSelection = () => setIsYearSelection(!isYearSelection);

  // Set current year and close year selection
  const selectYear = (year: number) => {
    setCurrentYear(year);
    setIsYearSelection(false);
  };

  // Generate a list of years for selection
  const generateYearList = () =>
    Array.from({ length: 200 }, (_, i) => 1900 + i);

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
  const showPicker = () => setIsPickerShow(!isPickerShow);

  // Handle date selection
  const onDateSelected = (date: Date) => {
    setSelectedDate(formatDate(date, language));
    onChange(date);
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

  const handleTextInputChange = (text: any) => {
    // Suponiendo que convertiste el texto a un objeto Date válido:
    const newDate = formatDate(text, language);
    setSelectedDate(newDate);
    onChange(newDate); // Notifica al componente padre sobre el cambio.
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
          {daysShort.map((day: any) => (
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
      <TouchableOpacity
        onPress={showPicker}
        style={[styleField.field, styles.inputWrapper]}>
        <TextInput
          style={styles.datePickerInput}
          value={value}
          placeholder={language === 'en' ? 'MM/DD/YYYY' : 'DD/MM/YYYY'}
          editable={true}
          onChangeText={handleTextInputChange}
        />
        <CalendarIcon style={styles.calendarIcon} />
      </TouchableOpacity>

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
