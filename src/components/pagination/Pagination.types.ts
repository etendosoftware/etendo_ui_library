/* Imports */
import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export interface PaginationProps {
  currentPage: number;
  onChangeSelected: (currentPage: number, offset: number) => void;
  totalData: number;
  amountDataPerPage: number;
}

export type PaginationStyleType = 'primary';

export interface PaginationStyles {
  container: ViewStyle;
  icon?: ImageStyle;
  pageNumberContainer: ViewStyle;
  pageNumberText: TextStyle;
}

export type PaginationStyleVariant = {
  primary: PaginationStyles;
};

export type PaginationStyleRecord = Record<
  PaginationStyleType,
  {
    container: ViewStyle;
    icon?: ImageStyle;
    pageNumberContainer: ViewStyle;
    pageNumberText: TextStyle;
  }
>;
