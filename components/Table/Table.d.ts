import { ReactNode, TableHTMLAttributes } from '../../../node_modules/react';
export interface TableType extends TableHTMLAttributes<HTMLTableElement> {
    children: ReactNode;
}
export default function Table(props: TableType): import("react/jsx-runtime").JSX.Element;
