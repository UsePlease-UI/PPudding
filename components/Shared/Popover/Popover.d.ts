import { ReactNode } from '../../../../node_modules/react';
export interface SharedPopoverType {
    children: ReactNode;
    isOpen: boolean;
    anchorElement: HTMLElement | null;
    anchorPosition: {
        vertical: 'bottom' | 'top';
        horizontal: 'left' | 'right';
    };
    onClose: () => void;
    className?: string;
}
export default function SharedPopover({ anchorElement, anchorPosition, children, className, isOpen, onClose, }: SharedPopoverType): import("react/jsx-runtime").JSX.Element;
