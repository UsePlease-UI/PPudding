/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */

import { useEffect, useRef } from 'react';

import { useAnimation } from 'framer-motion';

import BottomSheetChildren, { type BottomSheetChildrenType } from 'components/BottomSheet/BottomSheetChildren';
import useClickOutside from 'components/useClickOutside';

import { bottomSheetStyle } from './styles';

type BottomSheetType = {
    isCloseClickOutside?: boolean;
} & BottomSheetChildrenType;

/**
 *  BottomSheet Component
 *  @param isCloseClickOutside boolean
 *  @param isOpen component open state
 *  @param onClose component close handler
 *  @returns JSX.Element
 */

export default function BottomSheet({ isCloseClickOutside = false, isOpen, onClose, children }: BottomSheetType) {
    const controls = useAnimation();
    const sheetRef = useRef<HTMLDivElement | null>(null);

    if (isCloseClickOutside && isOpen) useClickOutside(isCloseClickOutside && isOpen, () => onClose(), sheetRef);

    useEffect(() => {
        controls.start(isOpen ? 'visible' : 'hidden');
    }, [controls, isOpen]);

    return isOpen ? (
        isCloseClickOutside ? (
            <div css={bottomSheetStyle.overlayWrapper} onClick={onClose}>
                <div style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <BottomSheetChildren isOpen={isOpen} onClose={onClose}>
                        {children}
                    </BottomSheetChildren>
                </div>
            </div>
        ) : (
            <BottomSheetChildren isOpen={isOpen} onClose={onClose}>
                {children}
            </BottomSheetChildren>
        )
    ) : null;
}
