import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TableRowType extends HTMLAttributes<HTMLTableRowElement> {
    children: ReactNode;
}
export default function TableRow(props: TableRowType): import("react/jsx-runtime").JSX.Element;
