import { LiHTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface ListItemType extends LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
  isDense?: boolean;
}

export default function ListItem({ children, className, isDense = true, ...rest }: ListItemType) {
  return (
    <li
      {...rest}
      className={joinClassNames(
        'relative flex min-h-12 min-w-70 items-center justify-start px-2 text-16 font-semibold leading-24 text-gray-950 hover:bg-primary-50',
        isDense && 'px-4',
        className && className,
      )}
    >
      {children}
    </li>
  );
}
