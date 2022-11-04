export interface TableProps {
  addedItems: Array<any>;
  config: ConfigTable;
  passDataToParent: ({
    typeColumnPress,
    key,
    indexCurrent,
  }: TablePassData) => void;
}

export type TablePassData = {
  typeColumnPress: TypeColumn;
  key: string;
  indexCurrent: number;
};

export interface TableHeaderProps {
  config: ConfigTable;
}

export type ConfigTable = {
  title?: string;
  heightRow: number;
  columns: Columns[];
};

export type Columns = {
  type: TypeColumn;
  nameColumn: string;
  key?: string;
  width: string | number;
};

export type TypeColumn =
  | 'cellText'
  | 'cellEdit'
  | 'cellTextInput'
  | 'cellCheck'
  | 'cellOnlyRead';
