import { IInputBase } from "../InputBase.types";

export type DayItem = {
  date: Date;
  isCurrentMonth: boolean;
};

export type DateFormat = "DD/MM/YYYY" | "MM/DD/YYYY";
export type LanguageFormat = "en-US" | "es-ES";

export interface DatePickerInputProps
  extends Omit<IInputBase, "keyboardType" | "secureTextEntry"> {
  language: LanguageFormat;
  dateFormat: DateFormat;
  showCalendar?: boolean;
  minDate?: string;
  maxDate?: string;
  size?: "small" | "medium" | "large";
}

export interface MonthItemProps {
  item: string;
  index: number;
}

export type BoxShadowStyle = {
  boxShadow: string;
};
