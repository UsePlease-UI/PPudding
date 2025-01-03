import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface TableBodyType extends HTMLAttributes<HTMLTableSectionElement> {
    children: ReactNode;
}
export default function TableBody(props: TableBodyType): import("react/jsx-runtime").JSX.Element;
