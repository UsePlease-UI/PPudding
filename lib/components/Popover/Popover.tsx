import { HTMLAttributes, ReactNode, useCallback, useEffect, useRef } from 'react';

import ClickAwayListener from '@components/Base/ClickAwayListener';

import { joinClassNames } from '@utils/format';

export interface PopoverType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isOpen: boolean;
  anchorElement: HTMLElement | null;
  anchorPosition: {
    vertical: 'bottom' | 'top';
    horizontal: 'left' | 'right';
  };
  onClose: () => void;
}

export default function Popover({
  anchorElement,
  anchorPosition,
  children,
  className,
  isOpen,
  onClose,
  role = 'dialog',
  ...rest
}: PopoverType) {
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
    <ClickAwayListener element={ref.current} isOpen={isOpen} anchorElement={anchorElement} onClose={onClose}>
      <div
        {...rest}
        ref={ref}
        className={joinClassNames('fixed z-10000 rounded bg-white p-2.5 shadow-01', className && className)}
        hidden={!isOpen}
        role={role}
      >
        {children}
      </div>
    </ClickAwayListener>
  );
}
