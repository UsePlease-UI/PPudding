import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

export interface ListItemTextType extends HTMLAttributes<HTMLDivElement> {
  primaryText: ReactNode;
  secondaryText?: ReactNode;
}

export default function ListItemText({ className, primaryText, secondaryText, ...rest }: ListItemTextType) {
  return (
    <div {...rest} className={joinClassNames('flex w-full flex-col', className && className)}>
      {typeof primaryText === 'string' ? (
        <span
          className={joinClassNames(
            'my-auto block truncate text-16 font-semibold leading-24 text-gray-950',
            secondaryText && 'mt-1',
          )}
        >
          {primaryText}
        </span>
      ) : (
        primaryText
      )}
      {secondaryText &&
        (typeof secondaryText === 'string' ? (
          <small className="mb-2 truncate text-12 font-normal leading-16 text-gray-600">{secondaryText}</small>
        ) : (
          secondaryText
        ))}
    </div>
  );
}
