import { ColorValue } from 'react-native';

// Types for DatePicker component
export type DayItem = {
  date: Date;
  isCurrentMonth: boolean;
};

export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY';
export type LanguageFormat = 'en-US' | 'es-ES';

export interface DatePickerProps {
  language: LanguageFormat;
  styleField: any;
  onChangeText: any;
  dateFormat: DateFormat;
  value: Date | string | undefined | any;
  showCalendar: boolean | undefined;
  disabled: boolean | undefined;
  backgroundColor: ColorValue;
}
