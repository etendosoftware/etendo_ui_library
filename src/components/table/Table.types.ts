import { ViewStyle } from 'react-native';

export interface TableProps {
  data: Array<any>;
  columns: Columns[];
  title?: string;
  tableHeight?: number | string;
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
  displayKey?: string;
  visible?: boolean;
  label?: string;
  key?: string;
  width?: string | number;
  actions?: Actions[];
  cellStyle?: ViewStyle;
};

export type Actions = {
  component: JSX.Element;
  onAction: (id: string) => void;
};
