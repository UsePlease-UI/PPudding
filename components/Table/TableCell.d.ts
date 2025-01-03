import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from '../../../node_modules/react';
export interface TableCellType extends TdHTMLAttributes<HTMLTableCellElement>, ThHTMLAttributes<HTMLTableCellElement> {
    children: ReactNode;
    component?: 'td' | 'th';
}
export default function TableCell(props: TableCellType): import("react/jsx-runtime").JSX.Element;
