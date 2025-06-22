import { default as Table } from './Table';
import { default as TableBody } from './TableBody';
import { default as TableCell } from './TableCell';
import { default as TableHead } from './TableHead';
import { default as TableRow } from './TableRow';
declare const _default: typeof Table & {
    Body: typeof TableBody;
    Cell: typeof TableCell;
    Head: typeof TableHead;
    Row: typeof TableRow;
};
export default _default;
export type { TableType } from './Table';
export type { TableBodyType } from './TableBody';
export type { TableCellType } from './TableCell';
export type { TableHeadType } from './TableHead';
export type { TableRowType } from './TableRow';
