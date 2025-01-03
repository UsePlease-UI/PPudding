import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface CardType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({ children, className, ...rest }: CardType) {
  return (
    <div
      {...rest}
      className={joinClassNames('size-max overflow-hidden rounded bg-white shadow-lg', className && className)}
    >
      {children}
    </div>
  );
}
