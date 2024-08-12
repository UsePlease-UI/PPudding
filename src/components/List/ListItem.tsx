import { LiHTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type ListItemType = Omit<LiHTMLAttributes<HTMLLIElement>, 'className'> & {
    children: ReactNode;
    isDense?: boolean;
};

/**
 *  [UI Component] List Item
 *  @param children ReactNode
 *  @param isDense Extra Padding? [optional]
 *  @returns JSX.Element
 */
export default function ListItem({ children, isDense = true, ...rest }: ListItemType) {
    return (
        <li
            {...rest}
            className={joinClassNames(
                'relative flex min-h-12 min-w-70 items-center justify-start px-2 text-16 font-semibold leading-24 text-gray-950 hover:bg-primary-50',
                isDense && 'px-4'
            )}
        >
            {children}
        </li>
    );
}
