import { HTMLAttributes, ReactElement, ReactNode, cloneElement } from 'react';

import { joinClassNames } from '@utils/format';

import { AlignType } from '../types';

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
export default function ListItemIcon({ children, align, ...rest }: ListItemIconType) {
    return (
        <span
            {...rest}
            className={joinClassNames(
                'my-auto mr-10 flex h-20 w-20',
                align === 'top' && 'mb-auto mt-8',
                align === 'bottom' && 'mb-8 mt-auto'
            )}
        >
            {cloneElement(children as ReactElement, { className: '!block w-20 h-20' })}
        </span>
    );
}
