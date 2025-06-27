import { ButtonHTMLAttributes, MouseEvent, ReactNode, useCallback } from 'react';

import { useDialog } from '@components/useDialog';

import { joinClassNames } from '@utils/format';

export interface DialogTriggerType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function DialogTrigger(props: DialogTriggerType) {
  const { children, className, onClick, ...rest } = props;

  const { id, isOpen, onOpen, triggerRef } = useDialog();

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      onOpen();
      if (onClick) {
        onClick(e);
      }
    },
    [onOpen, onClick],
  );

  return (
    <button
      {...rest}
      ref={triggerRef}
      aria-expanded={isOpen}
      tabIndex={0}
      type="button"
      aria-controls={isOpen ? id : undefined}
      aria-haspopup="dialog"
      onClick={handleClick}
      className={joinClassNames(
        'h-max min-h-10 w-max min-w-14 rounded border border-black bg-white px-4 py-1 text-16 font-medium leading-16 text-black hover:bg-gray-100 active:bg-gray-200 disabled:pointer-events-none disabled:border-gray-400 disabled:bg-gray-100 disabled:text-gray-600',
        className && className,
      )}
    >
      {children}
    </button>
  );
}
