import { InputHTMLAttributes, ReactNode } from '../../../node_modules/react';
interface PaginationIconButtonType extends InputHTMLAttributes<HTMLButtonElement> {
    isDisabled: boolean;
    icon: ReactNode;
    onClick: () => void;
}
export default function PaginationIconButton({ icon, isDisabled, onClick, ...props }: PaginationIconButtonType): import("react/jsx-runtime").JSX.Element;
export {};
