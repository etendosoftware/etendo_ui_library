import { IInputBase } from "../InputBase.types";

// Types for DatePicker component
export type DayItem = {
    date: Date;
    isCurrentMonth: boolean;
};

export type DateFormat = 'DD/MM/YYYY' | 'MM/DD/YYYY';
export type LanguageFormat = 'en-US' | 'es-ES';

export interface DatePickerInputProps extends IInputBase {
    language: LanguageFormat;
    dateFormat: DateFormat;
    showCalendar?: boolean | undefined;
}
