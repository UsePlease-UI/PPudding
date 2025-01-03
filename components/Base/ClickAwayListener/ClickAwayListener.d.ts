import { ReactNode } from '../../../../node_modules/react';
export interface ClickAwayListenerType {
    children: ReactNode;
    element: HTMLElement | null;
    isOpen: boolean;
    onClose: () => void;
    anchorElement?: HTMLElement | null;
}
declare const ClickAwayListener: ({ anchorElement, children, element, isOpen, onClose }: ClickAwayListenerType) => ReactNode;
export default ClickAwayListener;
