/* Imports */
import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

/* Type declaration */
export type Info = {
  name: string;
  route: string;
  key: string;
};

export interface PaginationProps {
  currentPage: number;
  onChangeSelected: ({type}: any, {type2}: any) => void;
  totalData: number;
  amountDataPerPage: number;
  pagination: number;
  isWeb?: boolean;
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
