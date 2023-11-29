// Types for DatePicker component
export type DayItem = {
  date: Date;
  isCurrentMonth: boolean;
};

export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY';

export interface DatePickerProps {
  language: string | undefined;
  styleField: any;
  onChange: any;
  dateFormat: DateFormat;
  value: Date | string | undefined | any;
}
