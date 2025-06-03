import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface TabsType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Tabs({ children, className, ...rest }: TabsType) {
  return (
    <div
      {...rest}
      className={joinClassNames(
        'flex size-full flex-col overflow-hidden rounded-md border border-gray-100 shadow-03',
        className && className,
      )}
    >
      {children}
    </div>
  );
}
