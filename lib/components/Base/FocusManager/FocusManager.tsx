import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RemoveScroll } from 'react-remove-scroll';

import FocusOverlay from '../FocusOverlay';

export interface FocusManagerType {
  children: ReactNode;
  canDismiss?: boolean;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  overlayClassName?: string;
}

const FOCUSABLE = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function FocusManager(props: FocusManagerType) {
  const { canDismiss, children, isOpen, onClose, overlayClassName, ...rest } = props;
  const portalRef = useRef<HTMLDivElement>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  // shift + tab -> backward
  // tab -> forward
  const handleFocusTrap = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }

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
    [isOpen, onClose],
  );

  useEffect(() => {
    if (isOpen) {
      if (scrollRef.current) {
        scrollRef.current.role = 'presentation';
      }
      // document active element 강제 변경
      const focusable = portalRef.current?.querySelectorAll(FOCUSABLE) || [];
      const firstElement = [...focusable].shift() as HTMLElement;
      firstElement?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleFocusTrap);
    return () => window.removeEventListener('keydown', handleFocusTrap);
  }, [handleFocusTrap]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (canDismiss && portalRef.current === event.target && onClose) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [canDismiss, onClose]);

  return isOpen
    ? createPortal(
        <RemoveScroll ref={scrollRef} className="fixed inset-0 z-10000" enabled={isOpen}>
          <FocusOverlay isDimmed className={overlayClassName} />
          <span aria-hidden={true} className="sr-only" tabIndex={0} />
          <div {...rest} ref={portalRef} tabIndex={-1} role="presentation">
            {children}
          </div>
          <span aria-hidden={true} className="sr-only" tabIndex={0} />
        </RemoveScroll>,
        document.getElementsByTagName('body')[0],
      )
    : null;
}
