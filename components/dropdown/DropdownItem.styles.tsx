import {DropdownStyleVariant} from './Dropdown.styles';
import {DropdownStyleFontSize} from './Dropdown.types';
import {GREY_5, YELLOW} from '../../styles/colors';

/* Styles - This function allows to obtain the text styles of the TabItem component */
export const getStyle = (toggleItem: number, index: number) => {
  let colorActive: string = YELLOW;
  let colorInactive: string = GREY_5;

  if (index === toggleItem) {
    return [
      DropdownStyleVariant.primary.option,
      {backgroundColor: colorActive},
    ];
  } else {
    return [
      DropdownStyleVariant.primary.option,
      {backgroundColor: colorInactive},
    ];
  }
};

export const getSizeText = (sizeText: DropdownStyleFontSize) => {
  let fontSize: number = 0;

  /* Choice of text size based on the size chosen by the programmer */
  switch (sizeText) {
    case 'small':
      fontSize = 14;
      break;
    case 'medium':
      fontSize = 18;
      break;
    case 'large':
      fontSize = 20;
      break;
    default:
      break;
  }

  return fontSize;
};

export const stylesStories = {
  dropdownContainer: {
    marginRight: 20,
 
  },
};
