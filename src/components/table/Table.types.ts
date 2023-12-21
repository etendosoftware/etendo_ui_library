import { ReactNode } from 'react';
import { DimensionValue, ViewStyle } from 'react-native';
import { Metadata } from '../../interfaces/table.interface';

export interface TableProps {
  columns: Columns[]; // to change for Metadata[]; // common type
  commentEmptyTable?: string;
  currentPage?: number; // common type
  data: Array<any>; // common type
  isLoading?: boolean; // common type
  isLoadingMoreData?: boolean; // common type
  onLoadMoreData?: (currentPage: number, pageSize: number) => void; // common type
  onRowPress?: (primary: string) => void;
  pageSize?: number; // common type
  tableHeight?: DimensionValue;
  textEmptyTable?: string;
  title?: string; // common type
}
export interface TableCellProps {
  label?: string;
}

export interface TableHeaderProps {
  title?: string;
  columns: Columns[];
  isLoading?: boolean;
}

export interface Columns extends Metadata {
  cellStyle?: ViewStyle;
  components?: ReactNode[];
  key?: string;
  label?: string;
  primary?: boolean;
  visible?: boolean;
  width?: DimensionValue;
}
