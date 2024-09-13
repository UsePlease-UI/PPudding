import { ReactNode, useCallback, useEffect, useRef } from 'react';

import ClickAwayListener from '@components/Base/ClickAwayListener';

import { joinClassNames } from '@utils/format';

type PopoverType = {
  anchorElement: HTMLElement | null;
  children: ReactNode;
  isOpen: boolean;
  anchorPosition: {
    horizontal: 'left' | 'right';
    vertical: 'bottom' | 'top';
  };
  onClose: () => void;
};

/**
 *  [UI Component] Popover Component
 *  @param children ReactNode
 *  @param isOpen 노출 여부
 *  @param onClose Click Away Listener
 *  @param anchorElement HTMLElement
 *  @param anchorPosition { vertical : top | bottom; horizontal : left | right }
 *  @returns JSX.Element
 */
export default function Popover({ anchorElement, anchorPosition, children, isOpen, onClose }: PopoverType) {
  const ref = useRef<HTMLDivElement>(null);

  const handlePosition = useCallback(() => {
    if (anchorElement && ref.current) {
      const dimensions = anchorElement.getBoundingClientRect();
      ref.current.style.top = dimensions.bottom - dimensions.height - ref.current.offsetHeight + 'px';
      ref.current.style.left = dimensions.left + 'px';
      if (anchorPosition.vertical === 'bottom') {
        ref.current.style.top = dimensions.top + dimensions.height + 'px';
      }
      if (anchorPosition.horizontal === 'right') {
        ref.current.style.left = dimensions.right - ref.current.offsetWidth + 'px';
      }
    }
  }, [anchorElement, anchorPosition]);

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
    <ClickAwayListener anchorElement={anchorElement} element={ref.current} isOpen={isOpen} onClose={onClose}>
      <div
        ref={ref}
        className={joinClassNames('fixed z-10000 rounded bg-white p-2.5 shadow-01', isOpen ? 'block' : 'hidden')}
      >
        {children}
      </div>
    </ClickAwayListener>
  );
}
