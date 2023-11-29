/* Utils for DatePicker component */
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
export const parseLocalDateString = (
  localDate: string,
  language: string | undefined,
) => {
  const parts: any = localDate.split('/');
  const year = parts[2];
  const month = language === 'en' ? parts[0] - 1 : parts[1] - 1;
  const day = language === 'en' ? parts[1] : parts[0];

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
