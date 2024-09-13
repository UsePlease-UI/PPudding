import { cloneElement, HTMLAttributes, ReactElement, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { AlignType } from './types';

type ListItemIconType = Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    children: ReactNode;
    align?: AlignType;
};

/**
 *  [UI Component] List Item Icon
 *  @param children ReactNode
 *  @param align Alignment of Icon [optional]
 *  @returns JSX.Element
 */
export default function ListItemIcon({ align, children, ...rest }: ListItemIconType) {
    return (
        <span
            {...rest}
            className={joinClassNames(
                'my-auto mr-2.5 flex h-5 w-5',
                align === 'top' && 'mb-auto mt-2',
                align === 'bottom' && 'mb-2 mt-auto',
            )}
        >
            {cloneElement(children as ReactElement, { className: joinClassNames('!block h-5 w-5') })}
        </span>
    );
}
