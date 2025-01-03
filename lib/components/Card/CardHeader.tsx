import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface CardHeaderType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function CardHeader({ children, className, ...rest }: CardHeaderType) {
  return (
    <div
      {...rest}
      className={joinClassNames('flex h-18 w-full items-center justify-between gap-4 p-3', className && className)}
    >
      {children}
    </div>
  );
}
