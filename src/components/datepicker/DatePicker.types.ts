// Types for DatePicker component
export type DayItem = {
  date: Date;
  isCurrentMonth: boolean;
};

export interface DatePickerProps {
  language: string;
  styleField: any;
  onChange: (date: Date | string) => void;
  formatDate: (date: Date, language: string, timeZone: string) => string;
  timeZone: string;
  value: Date | string | undefined;
}
