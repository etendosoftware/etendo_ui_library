/* Imports */
import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

/* Type declaration */
export type Info = {
  name: string;
  route: string;
  key: string;
};

export interface PaginationProps {
  currentPage: number;
  onChangeSelected: (Info: Info | undefined) => Info | undefined;
  totalData: number;
  amountDataPerPage: number;
}

/* Declaration of style types */
export type TabStyleType = 'primary';

export type PaginationStyleRecord = Record<
  TabStyleType,
  {
    container: ViewStyle;
    icon?: ImageStyle;
    pageNumberContainer: ViewStyle;
    pageNumberText: TextStyle;
  }
>;
