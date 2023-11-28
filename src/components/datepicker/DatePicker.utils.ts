// Utils for DatePicker component

// Format date based on language
export const formatDate = (date: any, language: string) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  return language === 'es'
    ? `${day}/${month}/${year}`
    : `${month}/${day}/${year}`;
};
