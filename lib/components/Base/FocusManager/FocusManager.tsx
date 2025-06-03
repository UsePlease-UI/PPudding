import { ReactNode, useCallback, useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';

import FocusOverlay from '../FocusOverlay';

export interface FocusManagerType {
  children: ReactNode;
  id: string;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

const FOCUSABLE = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function FocusManager(props: FocusManagerType) {
  const { children, id, isOpen, onClose } = props;
  const portalRef = useRef<HTMLDivElement>(null);

  const dialogId = useId();

  // shift + tab -> backward
  // tab -> forward
  const handleFocusTrap = useCallback(
    (e: KeyboardEvent) => {
      const focusable = portalRef.current?.querySelectorAll(FOCUSABLE) || [];
      const firstElement = [...focusable].shift() as HTMLElement;
      const lastElement = [...focusable].pop() as HTMLElement;

      if (e.code === 'Escape' && onClose) {
        onClose();
      } else if (e.code === 'Tab') {
        const { activeElement } = document;
        // 가장 첫 번째 element에 focus가 있고 backward ing...
        if (e.shiftKey && activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
          // 가장 마지막 element에 focus가 있고 forward ing...
        } else if (!e.shiftKey && activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      // document active element 강제 변경
      const focusable = portalRef.current?.querySelectorAll(FOCUSABLE) || [];
      const firstElement = [...focusable].shift() as HTMLElement;
      firstElement.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleFocusTrap);
    }
    return () => window.removeEventListener('keydown', handleFocusTrap);
  }, [handleFocusTrap, isOpen]);

  return isOpen
    ? createPortal(
        <RemoveScroll enabled={isOpen}>
          <FocusOverlay isDimmed />
          <span aria-hidden={true} className="sr-only" tabIndex={0} />
          <div
            ref={portalRef}
            className="fixed bottom-0 left-0 right-0 top-0 z-9999"
            id={id || dialogId}
            tabIndex={-1}
            aria-modal="true"
            role="dialog"
          >
            {children}
          </div>
          <span aria-hidden={true} className="sr-only" tabIndex={0} />
        </RemoveScroll>,
        document.getElementsByTagName('body')[0],
      )
    : null;
}
