import { useRef } from 'react';

import ClickAwayListener from '@components/Base/ClickAwayListener';

import { joinClassNames } from '@utils/format';

import BottomSheetContents, { BottomSheetContentsType } from './BottomSheetContents';

export interface BottomSheetType extends BottomSheetContentsType {
  isOpen: boolean;
  canClickOutside?: boolean;
}

export default function BottomSheet({ canClickOutside, children, isOpen, onClose }: BottomSheetType) {
  const ref = useRef<HTMLDivElement>(null);

  return canClickOutside ? (
    <ClickAwayListener element={ref.current} isOpen={isOpen} onClose={onClose}>
      <div
        ref={ref}
        className={joinClassNames(
          'e fixed inset-0 z-10000 rounded bg-black/10 p-2.5 shadow-01',
          isOpen ? 'block' : 'hidden',
        )}
      >
        <BottomSheetContents ref={ref} isOpen={isOpen} onClose={onClose}>
          {children}
        </BottomSheetContents>
      </div>
    </ClickAwayListener>
  ) : (
    <BottomSheetContents isOpen={isOpen} onClose={onClose}>
      {children}
    </BottomSheetContents>
  );
}
