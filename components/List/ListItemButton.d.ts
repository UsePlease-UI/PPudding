import { ButtonHTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface ListItemButtonType extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
    children: ReactNode;
    isDense?: boolean;
    isDisabled?: boolean;
}
export default function ListItemButton({ children, className, isDense, isDisabled, onClick, ...rest }: ListItemButtonType): import("react/jsx-runtime").JSX.Element;
