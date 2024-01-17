/** @jsxImportSource @emotion/react */
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import ClickAway from 'components/Base/ClickAwayListener';

import { popoverStyle } from './styles';

type PopoverType = {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
    anchorElement: HTMLElement | null;
    anchorPosition: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right';
    };
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Popover Component
 *  @param children ReactNode
 *  @param isOpen 노출 여부
 *  @param onClose Click Away Listener
 *  @param anchorElement HTMLElement
 *  @param anchorPosition { vertical : top | bottom; horizontal : left | right }
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Popover({ children, isOpen, anchorPosition, anchorElement, onClose, customCSS }: PopoverType) {
    const ref = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState<DOMRect>();

    const handlePosition = useCallback(() => {
        if (anchorElement) {
            setDimensions(anchorElement.getBoundingClientRect());
        }
    }, [anchorElement]);

    useEffect(() => {
        handlePosition();
        window.addEventListener('resize', handlePosition);
        window.addEventListener('scroll', handlePosition);
        return () => {
            window.removeEventListener('resize', handlePosition);
            window.removeEventListener('scroll', handlePosition);
        };
    }, [handlePosition]);

    return (
        <ClickAway isOpen={isOpen} element={ref.current} anchorElement={anchorElement} onClose={onClose}>
            <div
                ref={ref}
                css={css([
                    popoverStyle,
                    {
                        display: isOpen ? 'block' : 'none',
                        top: (dimensions?.bottom || 0) - (dimensions?.height || 0) - (ref.current?.offsetHeight || 0),
                        ...(anchorPosition.vertical === 'bottom' && {
                            top: (dimensions?.top || 0) + (dimensions?.height || 0)
                        }),
                        left: dimensions?.left,
                        ...(anchorPosition.horizontal === 'right' && {
                            left: (dimensions?.right || 0) - (ref.current?.offsetWidth || 0)
                        })
                    },
                    customCSS
                ])}
            >
                {children}
            </div>
        </ClickAway>
    );
}
