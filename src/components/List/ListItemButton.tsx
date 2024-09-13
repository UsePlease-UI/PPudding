import { ButtonHTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type ListItemButtonType = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    children: ReactNode;
    isDense?: boolean;
    isDisabled?: boolean;
};

/**
 *  [UI Component] List Item Button
 *  @param children ReactNode
 *  @param isDense Extra Padding? [optional]
 *  @returns JSX.Element
 */
export default function ListItemButton({ children, isDense, isDisabled, onClick, ...rest }: ListItemButtonType) {
    return (
        <li
            className={joinClassNames(
                'relative flex min-h-12 min-w-70 items-center justify-start px-2 text-16 font-semibold leading-24',
                isDense && 'px-4',
                !isDisabled && 'text-gray-950 focus-within:bg-primary-100 hover:bg-primary-50 active:bg-primary-200',
                isDisabled && 'bg-gray-100',
            )}
        >
            <button
                {...rest}
                className="flex min-h-12 w-full items-center justify-start truncate bg-transparent py-1 text-left active:bg-primary-200 disabled:bg-gray-100"
                disabled={isDisabled}
                type="button"
                onClick={(e) => {
                    e.currentTarget.blur();
                    if (onClick) {
                        onClick(e);
                    }
                }}
            >
                {children}
            </button>
        </li>
    );
}
