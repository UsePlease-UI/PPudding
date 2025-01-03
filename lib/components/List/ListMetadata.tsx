import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export type ListPositionType = 'end' | 'start';

export interface ListMetadataType extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  position?: ListPositionType;
}

export default function ListMetadata({ children, className, position = 'end', ...rest }: ListMetadataType) {
  return (
    <div
      {...rest}
      className={joinClassNames(
        'flex items-center justify-center',
        position === 'start' && 'mr-7',
        position === 'end' && 'ml-7',
        className && className,
      )}
    >
      {children}
    </div>
  );
}
