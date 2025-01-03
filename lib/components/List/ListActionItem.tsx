import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface ListActionItemType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  isDense?: boolean;
}

export default function ListActionItem({ children, className, isDense, ...rest }: ListActionItemType) {
  return (
    <div {...rest} className={joinClassNames('w-full py-2', isDense && 'py-4', className && className)}>
      {children}
    </div>
  );
}
