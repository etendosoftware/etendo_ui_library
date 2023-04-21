import {NEUTRALS_0, TERTIARY_30} from '../styles/colors';

export const removeHeaderBorder = (header?: string) => {
  return (
    !header && {
      borderTopWidth: 0,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    }
  );
};
export const paintOddRows = (index: number) => {
  return index % 2 !== 0
    ? {backgroundColor: TERTIARY_30}
    : {backgroundColor: NEUTRALS_0};
};
