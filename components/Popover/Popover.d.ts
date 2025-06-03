import { HTMLAttributes, ReactNode } from '../../../node_modules/react';
export interface PopoverType extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    isOpen: boolean;
    anchorElement: HTMLElement | null;
    anchorPosition: {
        vertical: 'bottom' | 'top';
        horizontal: 'left' | 'right';
    };
    onClose: () => void;
}
export default function Popover({ anchorElement, anchorPosition, children, className, isOpen, onClose, role, ...rest }: PopoverType): import("react/jsx-runtime").JSX.Element;
