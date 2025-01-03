import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ListType extends HTMLAttributes<HTMLUListElement> {
    children: ReactNode;
    hasDivider?: boolean;
}
export default function List({ children, className, hasDivider, ...rest }: ListType): import("react/jsx-runtime").JSX.Element;
