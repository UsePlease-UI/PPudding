import { HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

type ListItemTextType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    primaryText: ReactNode;
    secondaryText?: ReactNode;
};

/**
 *  [UI Component] List Item Text
 *  @param primaryText Primary Text. If want to remove styles, pass custom ReactNode instead of string.
 *  @param secondaryText Secondary Text. If want to remove styles, pass custom ReactNode instead of string.
 *  @returns JSX.Element
 */
export default function ListItemText({ primaryText, secondaryText, ...rest }: ListItemTextType) {
    return (
        <div {...rest} className="flex w-full flex-col">
            {typeof primaryText === 'string' ? (
                <p
                    className={joinClassNames(
                        'my-auto truncate text-16 font-semibold leading-24 text-gray-950',
                        secondaryText && 'mt-1',
                    )}
                >
                    {primaryText}
                </p>
            ) : (
                primaryText
            )}
            {secondaryText &&
                (typeof secondaryText === 'string' ? (
                    <small className="mb-2 truncate text-12 font-normal leading-16 text-gray-600">
                        {secondaryText}
                    </small>
                ) : (
                    secondaryText
                ))}
        </div>
    );
}
