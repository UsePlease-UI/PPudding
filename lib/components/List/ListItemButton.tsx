import { ButtonHTMLAttributes, MouseEvent, ReactNode, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

export interface ListItemButtonType extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'> {
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
    <li className={joinClassNames('h-full w-full', className && className)}>
      <button
        {...rest}
        disabled={isDisabled}
        type="button"
        onClick={handleClick}
        className={joinClassNames(
          'flex min-h-12 w-full min-w-70 items-center justify-start truncate bg-transparent px-2 py-1 text-left text-16 font-semibold leading-24',
          isDense && 'px-4',
          !isDisabled && 'text-black hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200',
          isDisabled && 'pointer-events-none bg-gray-100 text-gray-600',
        )}
      >
        {children}
      </button>
    </li>
  );
}
