import { useRef } from 'react';

import ClickAwayListener from '@components/Base/ClickAwayListener';

import { joinClassNames } from '@utils/format';

import BottomSheetContents, { BottomSheetContentsType } from './BottomSheetContents';

type BottomSheetType = BottomSheetContentsType & {
    isOpen: boolean;
    canClickOutside?: boolean;
};

/**
 *  BottomSheet Component
 *  @param canClickOutside Bottom Sheet can close when clicked outside
 *  @param isOpen Open State
 *  @param onClose Close Event Handler
 *  @returns JSX.Element
 */
export default function BottomSheet({ canClickOutside, isOpen, onClose, children }: BottomSheetType) {
    const ref = useRef<HTMLDivElement>(null);

    return canClickOutside ? (
        <ClickAwayListener element={ref.current} isOpen={isOpen} onClose={onClose}>
            <div
                role="presentation"
                className={joinClassNames(
                    'fixed bottom-0 left-0 right-0 top-0 z-100 bg-black/10',
                    !isOpen && 'sr-only'
                )}
            />
            <BottomSheetContents ref={ref} isOpen={isOpen} onClose={onClose}>
                {children}
            </BottomSheetContents>
        </ClickAwayListener>
    ) : (
        <BottomSheetContents isOpen={isOpen} onClose={onClose}>
            {children}
        </BottomSheetContents>
    );
}
