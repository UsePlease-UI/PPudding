import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { joinClassNames } from '@utils/format';

type BackdropType = {
    children: ReactNode;
    onClose: () => void;
    isOpen?: boolean;
    isDimmed?: boolean;
    canFocusTrap?: boolean;
    backgroundColor?: string;
};

const FOCUSABLE = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 *  [Base Component] Backdrop (Overlay) Component
 *  @param children 컴포넌트
 *  @param onClose Backdrop Click Event Handler
 *  @param isOpen 노출 여부 [optional]
 *  @param isDimmed 배경 색상 설정 여부 [optional]
 *  @param backgroundColor [TailwindCSS] 배경 색상
 *  @returns JSX.Element
 */
export default function Backdrop(props: BackdropType) {
    const { children, isOpen, canFocusTrap, isDimmed, backgroundColor = 'bg-black/10', onClose } = props;
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
        [onClose]
    );

    useEffect(() => {
        if (isOpen && canFocusTrap) {
            document.addEventListener('keydown', handleFocusTrap);
        }
        return () => document.removeEventListener('keydown', handleFocusTrap);
    }, [handleFocusTrap, isOpen, canFocusTrap]);

    return isOpen
        ? createPortal(
              <div
                  ref={portalRef}
                  role="presentation"
                  onClick={onClose}
                  className={joinClassNames('fixed bottom-0 left-0 right-0 top-0 z-10000', isDimmed && backgroundColor)}
              >
                  {children}
              </div>,
              document.getElementById('portal') as HTMLElement
          )
        : null;
}
