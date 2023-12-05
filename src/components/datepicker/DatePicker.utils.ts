/* Utils for DatePicker component */
// Constants
export const MODAL_CONTENT_WIDTH = 360;

// Format date based on language
export const formatterDate = (date: Date, format: string) => {
  if (date !== undefined) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    // Format date based on date format
    if (format === 'MM/DD/YYYY') {
      return `${month}/${day}/${year}`;
    } else if (format === 'DD/MM/YYYY') {
      return `${day}/${month}/${year}`;
    } else {
      // Default format - // MM/DD/YYYY
      return `${month}/${day}/${year}`;
    }
  }
  return '';
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
    isNaN(dateObject.getTime()) ||
    dateObject.getFullYear() < 1000 ||
    dateObject.getFullYear() > 9999
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
