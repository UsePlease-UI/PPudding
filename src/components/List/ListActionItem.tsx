import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type ListActionItemType = {
  children: ReactNode;
  isDense?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 *  [UI Component] List Action Item
 *  @param children ReactNode
 *  @param isDense Extra Padding? [optional]
 *  @returns JSX.Element
 */
export default function ListActionItem({ children, isDense, ...rest }: ListActionItemType) {
  return (
    <div {...rest} className={joinClassNames('w-full py-2', isDense && 'py-4')}>
      {children}
    </div>
  );
}
