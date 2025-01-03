import { ButtonHTMLAttributes, MouseEvent, ReactNode, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

export interface ListItemButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDense?: boolean;
  isDisabled?: boolean;
}

export default function ListItemButton({
  children,
  className,
  isDense,
  isDisabled,
  onClick,
  ...rest
}: ListItemButtonType) {
  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.blur();
      if (onClick) {
        onClick(e);
      }
    },
    [onClick],
  );

  return (
    <li
      className={joinClassNames(
        'relative flex min-h-12 min-w-70 items-center justify-start px-2 text-16 font-semibold leading-24',
        isDense && 'px-4',
        !isDisabled && 'text-gray-950 focus-within:bg-primary-100 hover:bg-primary-50 active:bg-primary-200',
        isDisabled && 'bg-gray-100',
        className && className,
      )}
    >
      <button
        {...rest}
        className="flex min-h-12 w-full items-center justify-start truncate bg-transparent py-1 text-left active:bg-primary-200 disabled:bg-gray-100"
        disabled={isDisabled}
        type="button"
        onClick={handleClick}
      >
        {children}
      </button>
    </li>
  );
}
