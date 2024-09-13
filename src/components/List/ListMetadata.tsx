import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { PositionType } from './types';

type ListMetadataType = {
  children: ReactNode;
  position?: PositionType;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

/**
 *  [UI Component] List Metadata
 *  @param children ReactNode
 *  @param position Is it before List Item Text or after List Item Text?
 *  @returns JSX.Element
 */
export default function ListMetadata({ children, position = 'end', ...rest }: ListMetadataType) {
  return (
    <div
      {...rest}
      className={joinClassNames(
        'flex items-center justify-center',
        position === 'start' && 'mr-7',
        position === 'end' && 'ml-7',
      )}
    >
      {children}
    </div>
  );
}
