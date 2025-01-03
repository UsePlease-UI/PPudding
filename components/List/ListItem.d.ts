import { LiHTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ListItemType extends LiHTMLAttributes<HTMLLIElement> {
    children: ReactNode;
    isDense?: boolean;
}
export default function ListItem({ children, className, isDense, ...rest }: ListItemType): import("react/jsx-runtime").JSX.Element;
