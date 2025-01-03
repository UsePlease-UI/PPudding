import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ListItemButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isDense?: boolean;
    isDisabled?: boolean;
}
export default function ListItemButton({ children, className, isDense, isDisabled, onClick, ...rest }: ListItemButtonType): import("react/jsx-runtime").JSX.Element;
