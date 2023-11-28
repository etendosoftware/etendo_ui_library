/* Utils for DatePicker component */
// Format date based on language
export const formatDate = (date: Date, language: string, timeZone: string) => {
  if (date !== undefined) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return language === 'es'
      ? `${day}/${month}/${year}`
      : `${month}/${day}/${year}`;
  }
};

// Parse local date string to Date object
export const parseLocalDateString = (localDate: string, language: string) => {
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
