import TableHeaders from './components/TableHeaders';
import TableUI from './Table';
import { Table as TableMui } from './mui';
import TableCell from './components/TableCell';
import TableCellEdit from './components/TableCellEdit';
import { isWeb } from '../../helpers/table_utils';

const Table = isWeb ? TableMui : TableUI;

export { TableHeaders, Table, TableCell, TableCellEdit };
