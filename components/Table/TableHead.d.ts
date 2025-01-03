import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TableHeadType extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
export default function TableHead(props: TableHeadType): import("react/jsx-runtime").JSX.Element;
