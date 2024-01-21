/** @jsxImportSource @emotion/react */
import { ReactNode, useCallback, useEffect, useRef } from 'react';

import { css } from '@emotion/react';

import { backdropStyle } from './styles';

type BackdropType = {
    children: ReactNode;
    onClose: () => void;
    isOpen?: boolean;
    isDimmed?: boolean;
    backgroundColor?: string;
};

const FOCUSABLE = 'button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])';

/**
 *  [Base Component] Backdrop(Overlay) Component
 *  @param children 컴포넌트
 *  @param onClose Click Away Handler
 *  @param isOpen 노출 여부 [optional]
 *  @param isDimmed 배경 색상 설정 여부 [optional]
 *  @param backgroundColor [CSS] 배경 색상
 *  @returns JSX.Element
 */
export default function Backdrop(props: BackdropType) {
    const { children, isOpen, isDimmed = false, backgroundColor, onClose } = props;
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

    // shift + tab -> backward
    // tab -> forward
    const handleFocusTrap = useCallback((e: KeyboardEvent) => {
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
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleFocusTrap);
        }
        return () => document.removeEventListener('keydown', handleFocusTrap);
    }, [isOpen]);

    return isOpen ? (
        <div
            ref={portalRef}
            role="presentation"
            onClick={onClose}
            css={css([
                backdropStyle,
                {
                    ...(isDimmed && {
                        backgroundColor: backgroundColor || 'rgba(0, 0, 0, 0.1)'
                    })
                }
            ])}
        >
            {children}
        </div>
    ) : null;
}
