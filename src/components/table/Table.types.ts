import { ReactNode } from 'react';
import { DimensionValue, ViewStyle } from 'react-native';
import { CommonTableProps, Metadata } from '../../interfaces/table.interface';

export interface TableProps extends CommonTableProps {
  columns: ColumnsMetadata[];
  commentEmptyTable?: string;
  onRowPress?: (primary: string) => void;
  tableHeight?: DimensionValue;
  textEmptyTable?: string;
}

export interface TableCellProps {
  label?: string;
}

export interface TableHeaderProps {
  title?: string;
  columns: ColumnsMetadata[];
  isLoading?: boolean;
}

export interface ColumnsMetadata extends Metadata {
  cellStyle?: ViewStyle;
  components?: ReactNode[];
  key?: string;
  label?: string;
  primary?: boolean;
  visible?: boolean;
  width?: DimensionValue;
}
