import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ListActionItemType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isDense?: boolean;
}
export default function ListActionItem({ children, className, isDense, ...rest }: ListActionItemType): import("react/jsx-runtime").JSX.Element;
