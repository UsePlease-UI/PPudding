import { ReactNode } from '../../../../node_modules/react';
export interface ClickAwayListenerType {
    children: ReactNode;
    element: HTMLElement | null;
    isOpen: boolean;
    anchorElement?: HTMLElement | null;
    onClose?: () => void;
}
export default function ClickAwayListener({ anchorElement, children, element, isOpen, onClose, }: ClickAwayListenerType): ReactNode;
