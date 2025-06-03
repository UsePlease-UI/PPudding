import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export type ListAlignType = 'bottom' | 'top';

export interface ListItemIconType extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  align?: ListAlignType;
}

export default function ListItemIcon({ align, children, className, ...rest }: ListItemIconType) {
  return (
    <span
      {...rest}
      className={joinClassNames(
        'my-auto mr-2.5 flex h-5 w-5',
        align === 'top' && 'mb-auto mt-2',
        align === 'bottom' && 'mb-2 mt-auto',
        className && className,
      )}
    >
      {cloneElement(children as ReactElement<HTMLElement>, { className: joinClassNames('!block h-5 w-5') })}
    </span>
  );
}
