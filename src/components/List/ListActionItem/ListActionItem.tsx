import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type ListActionItemType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children: ReactNode;
    isDense?: boolean;
};

/**
 *  [UI Component] List Action Item
 *  @param children ReactNode
 *  @param isDense Extra Padding? [optional]
 *  @returns JSX.Element
 */
export default function ListActionItem({ children, isDense, ...rest }: ListActionItemType) {
    return (
        <div {...rest} className={joinClassNames('w-full py-8', isDense && 'py-16')}>
            {children}
        </div>
    );
}
