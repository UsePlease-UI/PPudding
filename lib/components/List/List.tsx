import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface ListType extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  hasDivider?: boolean;
}

export default function List({ children, className, hasDivider, ...rest }: ListType) {
  return (
    <ul
      {...rest}
      className={joinClassNames(
        'w-full rounded border border-gray-100 bg-white px-0 py-1',
        hasDivider && 'divide-y divide-gray-100',
        className && className,
      )}
    >
      {children}
    </ul>
  );
}
