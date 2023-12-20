import { ReactNode } from 'react';
import { DimensionValue, ViewStyle } from 'react-native';

export interface TableProps {
  data: Array<any>;
  columns: Columns[];
  title?: string;
  tableHeight?: DimensionValue;
  onRowPress?: (primary: string) => void;
  isLoading?: boolean;
  textEmptyTable?: string;
  commentEmptyTable?: string;
  onLoadMoreData?: (currentPage: number, pageSize: number) => void;
  pageSize?: number;
  currentPage?: number;
  isLoadingMoreData?: boolean;
}
export interface TableCellProps {
  label?: string;
}

export interface TableHeaderProps {
  title?: string;
  columns: Columns[];
  isLoading?: boolean;
}

export type Columns = {
  primary?: boolean;
  visible?: boolean;
  label?: string;
  key?: string;
  width?: DimensionValue;
  components?: ReactNode[];
  cellStyle?: ViewStyle;
};
