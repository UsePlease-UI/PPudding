import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { joinClassNames } from '@utils/format';

export interface BackdropType {
  children: ReactNode;
  onClose: () => void;
  className?: string;
  isDimmed?: boolean;
  isOpen?: boolean;
  canFocusTrap?: boolean;
}

const FOCUSABLE = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';

export default function Backdrop(props: BackdropType) {
  const { canFocusTrap, children, className, isDimmed, isOpen, onClose } = props;
  const portalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }

    return () => {
      document.body.style.removeProperty('overflow');
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && canFocusTrap) {
      // document active element 강제 변경
      const focusable = portalRef.current?.querySelectorAll(FOCUSABLE) || [];
      const firstElement = [...focusable].shift() as HTMLElement;
      firstElement.focus();
    }
  }, [isOpen, canFocusTrap]);

  // shift + tab -> backward
  // tab -> forward
  const handleFocusTrap = useCallback(
    (e: KeyboardEvent) => {
      const focusable = portalRef.current?.querySelectorAll(FOCUSABLE) || [];
      const firstElement = [...focusable].shift() as HTMLElement;
      const lastElement = [...focusable].pop() as HTMLElement;

      if (e.code === 'Escape') {
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
    if (isOpen && canFocusTrap) {
      document.addEventListener('keydown', handleFocusTrap);
    }
    return () => document.removeEventListener('keydown', handleFocusTrap);
  }, [handleFocusTrap, isOpen, canFocusTrap]);

  useEffect(() => {
    if (!document.getElementById('portal')) {
      const portal = document.createElement('div');
      portal.setAttribute('id', 'portal');
      const body = document.getElementsByTagName('body')[0];
      body.appendChild(portal);
    }
  }, []);

  return isOpen
    ? createPortal(
        <div
          ref={portalRef}
          onClick={onClose}
          role="presentation"
          className={joinClassNames(
            'fixed bottom-0 left-0 right-0 top-0 z-10000',
            isDimmed && 'bg-black/10',
            className && className,
          )}
        >
          {children}
        </div>,
        document.getElementById('portal') as HTMLElement,
      )
    : null;
}
