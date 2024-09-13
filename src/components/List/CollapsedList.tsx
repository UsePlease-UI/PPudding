import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type CollapsedListType = {
  children: ReactNode;
  hasDivider?: boolean;
  isDense?: boolean;
  maxWidth?: number;
} & Omit<HTMLAttributes<HTMLUListElement>, 'className'>;

/**
 *  [UI Component] Collapsed List
 *  @param children ReactNode
 *  @param hasDivider Do List Items have border bottom? [optional]
 *  @param isDense Extra Padding? [optional]
 *  @param maxWidth [CSS] Maximum Width of List
 *  @returns JSX.Element
 */
export default function CollapsedList({ children, hasDivider, isDense, maxWidth, ...rest }: CollapsedListType) {
  return (
    <li>
      <ul
        {...rest}
        className={joinClassNames(
          'w-full *:px-4 *:py-0',
          hasDivider && 'divide-y divide-gray-100',
          isDense && '*:px-8',
          maxWidth && { maxWidth },
        )}
      >
        {children}
      </ul>
    </li>
  );
}
