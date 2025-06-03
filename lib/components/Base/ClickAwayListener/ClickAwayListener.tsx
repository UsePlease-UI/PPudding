import { ReactNode, useEffect } from 'react';

export interface ClickAwayListenerType {
  children: ReactNode;
  element: HTMLElement | null;
  isOpen: boolean;
  anchorElement?: HTMLElement | null;
  onClose?: () => void;
}

export default function ClickAwayListener({
  anchorElement,
  children,
  element,
  isOpen,
  onClose,
}: ClickAwayListenerType) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        isOpen &&
        !element?.contains(event.target as Node) &&
        !anchorElement?.contains(event.target as Node) &&
        onClose
      ) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [anchorElement, element, isOpen, onClose]);

  return children;
}
