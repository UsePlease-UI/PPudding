import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export type ListAlignType = 'bottom' | 'top';
export interface ListItemIconType extends HTMLAttributes<HTMLSpanElement> {
    children: ReactNode;
    align?: ListAlignType;
}
export default function ListItemIcon({ align, children, className, ...rest }: ListItemIconType): import("react/jsx-runtime").JSX.Element;
