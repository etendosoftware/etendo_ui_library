/* Utils for DatePickerInput component */
// Adjust the selected date if the month has less days
export const adjustDateForMonth = (
    year: number,
    month: number,
    currentSelectedDate: Date,
) => {
    if (!(currentSelectedDate instanceof Date) || isNaN(currentSelectedDate.getTime())) {
        return new Date(year, month, 1);
    }
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate();
    if (currentSelectedDate.getDate() > lastDayOfMonth) {
        return new Date(year, month, lastDayOfMonth);
    }
    return new Date(year, month, currentSelectedDate.getDate());
};

// Convert date to compatible format with Etendo ERP
export const convertDateToEtendoERPFormat = (inputDate: Date) => {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.0`;
};

// Format date based on language
export const formatterDate = (date: Date, format: string) => {
    if (date instanceof Date) {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        // Format date based on date format
        if (format === 'MM/DD/YYYY') {
            return `${month}/${day}/${year}`;
        } else if (format === 'DD/MM/YYYY') {
            return `${day}/${month}/${year}`;
        } else {
            // Default format - MM/DD/YYYY
            return `${month}/${day}/${year}`;
        }
    }
    return '';
};

// Parse a date in DD/MM/YYYY format to a Date object
export const parseDateString = (dateString: any, format: any) => {
    const parts = dateString.split("/");
    let day, month: any, year: any;

    if (format === 'DD/MM/YYYY') {
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10) - 1;
        year = parseInt(parts[2], 10);
    } else if (format === 'MM/DD/YYYY') {
        month = parseInt(parts[0], 10) - 1;
        day = parseInt(parts[1], 10);
        year = parseInt(parts[2], 10);
    }

    return new Date(year, month, day);
};

// Get placeholder text based on date format
export const getPlaceholderDateFormat = (dateFormat: string) => {
    return dateFormat === 'MM/DD/YYYY' ? 'MM/DD/YYYY' : 'DD/MM/YYYY';
};

// Parse local date string to Date object
export const parseLocalDateString = (localDate: string, dateFormat: string) => {
    const parts: any = localDate.split('/');
    const year = parts[2];
    const month = dateFormat === 'MM/DD/YYYY' ? parts[0] - 1 : parts[1] - 1;
    const day = dateFormat === 'MM/DD/YYYY' ? parts[1] : parts[0];

    return new Date(year, month, day);
};

// Transform date to ISO format
export const transformDate = (dateString: string) => {
    const parts: any = dateString.split('/');
    const date = new Date(parts[2], parts[1] - 1, parts[0], 3, 0, 0);
    return date.toISOString();
};

// Generate a list of years for selection
export const generateYearList = () =>
    Array.from({ length: 200 }, (_, i) => 1900 + i);

// Functions to handle correct days
export const isLeapYear = (year: number) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

export const getDaysInMonth = (year: number, month: number) => {
    const daysInMonth = [
        31,
        isLeapYear(year) ? 29 : 28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31,
    ];
    return daysInMonth[month];
};

export const buildMonth = (year: number, month: number) => {
    const days = [];
    const firstDayOfMonth = new Date(year, month, 1).getDay();
    const totalDays = getDaysInMonth(year, month);

    // Calculate the previous month and year
    const previousMonth = month === 0 ? 11 : month - 1;
    const previousMonthYear = month === 0 ? year - 1 : year;
    const previousMonthDays = getDaysInMonth(previousMonthYear, previousMonth);

    // Fill days from previous month
    for (let i = firstDayOfMonth; i > 0; i--) {
        days.push(
            new Date(previousMonthYear, previousMonth, previousMonthDays - i + 1),
        );
    }

    // Add days of current month
    for (let day = 1; day <= totalDays; day++) {
        days.push(new Date(year, month, day));
    }

    // Calculate next month and year
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextMonthYear = month === 11 ? year + 1 : year;

    // Fill the rest of the days in the last week with next month's days
    let day = 1;
    while (days.length % 7 !== 0) {
        days.push(new Date(nextMonthYear, nextMonth, day++));
    }

    return days;
};

// Function to validate the date format
export const validateDate = (
    dateObject: Date,
    text: string,
    format: string,
) => {
    if (
        !dateObject ||
        new Date(dateObject).getFullYear() < 1000 ||
        new Date(dateObject).getFullYear() > 9999
    ) {
        return false;
    }

    const parts = text.split('/');
    let day, month;
    if (format === 'DD/MM/YYYY') {
        day = parseInt(parts[0], 10);
        month = parseInt(parts[1], 10);
    } else {
        // 'MM/DD/YYYY'
        day = parseInt(parts[1], 10);
        month = parseInt(parts[0], 10);
    }

    if (month < 1 || month > 12 || day < 1 || day > 31) {
        return false;
    }

    if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
        return false;
    }

    if (month === 2) {
        const isLeap =
            dateObject.getFullYear() % 4 === 0 &&
            (dateObject.getFullYear() % 100 !== 0 ||
                dateObject.getFullYear() % 400 === 0);
        if (day > (isLeap ? 29 : 28)) {
            return false;
        }
    }

    return true;
};

// Check if the date is valid
export const isDateValid = (date: Date) => {
    // Check if the date is a valid Date object
    if (Object.prototype.toString.call(date) === '[object Date]') {
        // Check if the date is valid
        if (isNaN(date.getTime())) {
            return false;
        } else {
            return true;
        }
    } else {
        // The input is not a Date object
        return false;
    }
};

// Format the text input value
export const formatInputText = (text: string) => {
    if (!text) {
        return '';
    }

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
