import { ReactNode, useEffect } from 'react';

export interface ClickAwayListenerType {
  children: ReactNode;
  element: HTMLElement | null;
  isOpen: boolean;
  onClose: () => void;
  anchorElement?: HTMLElement | null;
}

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
