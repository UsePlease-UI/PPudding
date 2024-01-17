/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode, useEffect } from 'react';

type ClickAwayListenerType = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    element: HTMLElement | null;
    anchorElement?: HTMLElement | null;
};

const ClickAwayListener = ({ children, isOpen, onClose, element, anchorElement }: ClickAwayListenerType) => {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (isOpen && !element?.contains(event.target as Node) && !anchorElement?.contains(event.target as Node)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return <>{children}</>;
};

export default ClickAwayListener;
