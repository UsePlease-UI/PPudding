import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface CollapsedListType extends HTMLAttributes<HTMLUListElement> {
    children: ReactNode;
    hasDivider?: boolean;
    isDense?: boolean;
}
export default function CollapsedList({ children, className, hasDivider, isDense, ...rest }: CollapsedListType): import("react/jsx-runtime").JSX.Element;
