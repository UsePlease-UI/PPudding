import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type CollapsedListType = Omit<HTMLAttributes<HTMLUListElement>, 'className'> & {
    children: ReactNode;
    isDense?: boolean;
    maxWidth?: number;
};

/**
 *  [UI Component] Collapsed List
 *  @param children ReactNode
 *  @param isDense Extra Padding? [optional]
 *  @param maxWidth [CSS] Maximum Width of List
 *  @returns JSX.Element
 */
export default function CollapsedList({ children, isDense, maxWidth, ...rest }: CollapsedListType) {
    return (
        <li>
            <ul
                {...rest}
                className={joinClassNames('w-full *:px-16 *:py-0', isDense && '*:px-32', maxWidth && { maxWidth })}
            >
                {children}
            </ul>
        </li>
    );
}
