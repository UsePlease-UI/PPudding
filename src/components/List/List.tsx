import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type ListType = Omit<HTMLAttributes<HTMLUListElement>, 'className'> & {
    children: ReactNode;
    hasDivider?: boolean;
    maxWidth?: number;
};

/**
 *  [UI Component] List
 *  @param children ReactNode
 *  @param hasDivider Do List Items have border bottom? [optional]
 *  @param maxWidth [CSS] Maximum Width of List
 *  @returns JSX.Element
 */
export default function List({ children, hasDivider, maxWidth, ...rest }: ListType) {
    return (
        <ul
            {...rest}
            className={joinClassNames(
                'w-full rounded border border-gray-100 bg-white px-0 py-1',
                hasDivider && 'divide-y divide-gray-100',
                maxWidth && { maxWidth }
            )}
        >
            {children}
        </ul>
    );
}
