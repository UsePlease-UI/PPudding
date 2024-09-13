import { ReactNode, useEffect } from 'react';

type ClickAwayListenerType = {
    children: ReactNode;
    element: HTMLElement | null;
    isOpen: boolean;
    onClose: () => void;
    anchorElement?: HTMLElement | null;
};

/**
 *  [Base Component] Click Away Listener
 *  @param children 컴포넌트
 *  @param isOpen 노출 여부
 *  @param onClose Click Away Handler
 *  @param element Element that is wrapped by Click Away Listener (if click outside of this element, the component becomes invisible)
 *  @param anchorElement Element that is wrapped by Click Away Listener (if click outside of this element, the component becomes invisible)
 *  @returns JSX.Element
 */
const ClickAwayListener = ({ anchorElement, children, element, isOpen, onClose }: ClickAwayListenerType) => {
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
    }, [anchorElement, element, isOpen, onClose]);

    return children;
};

export default ClickAwayListener;
