import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ListItemTextType extends HTMLAttributes<HTMLDivElement> {
    primaryText: ReactNode;
    secondaryText?: ReactNode;
}
export default function ListItemText({ className, primaryText, secondaryText, ...rest }: ListItemTextType): import("react/jsx-runtime").JSX.Element;
