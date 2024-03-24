/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/** @jsxImportSource @emotion/react */

import BottomSheetChildren, { type BottomSheetChildrenType } from 'components/BottomSheet/BottomSheetChildren';

import { bottomSheetStyle } from './styles';

type BottomSheetType = {
    isCloseClickOutside?: boolean;
    isOpen: boolean;
} & BottomSheetChildrenType;

/**
 *  BottomSheet Component
 *  @param isCloseClickOutside boolean
 *  @param isOpen component open state
 *  @param onClose component close handler
 *  @returns JSX.Element
 */

export default function BottomSheet({ isCloseClickOutside = false, isOpen, onClose, children }: BottomSheetType) {
    return isOpen ? (
        isCloseClickOutside ? (
            <div css={bottomSheetStyle.overlayWrapper} onClick={onClose}>
                <div style={{ backgroundColor: 'white', borderRadius: '5px' }}>
                    <BottomSheetChildren onClose={onClose}>{children}</BottomSheetChildren>
                </div>
            </div>
        ) : (
            <BottomSheetChildren onClose={onClose}>{children}</BottomSheetChildren>
        )
    ) : null;
}
