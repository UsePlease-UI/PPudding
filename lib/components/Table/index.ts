import Table from './Table';
import TableBody from './TableBody';
import TableCell from './TableCell';
import TableHead from './TableHead';
import TableRow from './TableRow';

// Component Export
export default Object.assign(Table, {
  Body: TableBody,
  Cell: TableCell,
  Head: TableHead,
  Row: TableRow,
});

// Types Export
export type { TableType } from './Table';
export type { TableBodyType } from './TableBody';
export type { TableCellType } from './TableCell';
export type { TableHeadType } from './TableHead';
export type { TableRowType } from './TableRow';
