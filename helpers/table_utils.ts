import {GREY_BLUE_30, WHITE} from '../styles/colors';

export const removeHeaderBorder = (header: any) => {
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
    ? {backgroundColor: GREY_BLUE_30}
    : {backgroundColor: WHITE};
};
