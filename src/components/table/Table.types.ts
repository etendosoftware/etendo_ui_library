import { DimensionValue, ViewStyle } from 'react-native';

export interface TableProps {
  data: Array<any>;
  columns: Columns[];
  title?: string;
  tableHeight?: DimensionValue | undefined;
  onRowPress: (primary: string) => void;
  isLoading?: boolean;
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
  width?: DimensionValue | undefined;
  components?: Actions[];
  cellStyle?: ViewStyle;
};

export type Actions = {
  component: JSX.Element;
  onAction: (id: string) => void;
};
