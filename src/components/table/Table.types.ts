import { DimensionValue, ViewStyle } from 'react-native';

export interface TableProps {
  data: Array<any>;
  columns: Columns[];
  title?: string;
  tableHeight?: DimensionValue;
  onRowPress: (primary: string) => void;
}
export interface TableCellProps {
  label?: string;
}

export interface TableHeaderProps {
  title?: string;
  columns: Columns[];
}

export type Columns = {
  primary?: boolean;
  visible?: boolean;
  label?: string;
  key?: string;
  width?: DimensionValue;
  components?: Actions[];
  cellStyle?: ViewStyle;
};

export type Actions = {
  component: JSX.Element;
  onAction: (id: string) => void;
};
