import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface CollapsedListType extends HTMLAttributes<HTMLUListElement> {
  children: ReactNode;
  hasDivider?: boolean;
  isDense?: boolean;
}

export default function CollapsedList({ children, className, hasDivider, isDense, ...rest }: CollapsedListType) {
  return (
    <li>
      <ul
        {...rest}
        className={joinClassNames(
          'w-full *:px-4 *:py-0',
          hasDivider && 'divide-y divide-gray-100',
          isDense && '*:px-8',
          className && className,
        )}
      >
        {children}
      </ul>
    </li>
  );
}
