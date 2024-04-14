import { HTMLAttributes, MouseEvent } from 'react';

import { Typography } from '@components/Base';

import { DismissFilled } from '@fluentui/react-icons';
import { joinClassNames } from '@utils/format';

import { VariantType, getVariantStyle } from '../styles';

type ChipType = Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    label: string;
    value: string;
    variant?: VariantType;
    isDeletable?: boolean;
    onDelete?: (value: string) => void;
};

/**
 *  [UI Component] Chip Component
 *  @param label Chip Label
 *  @param value Chip Value
 *  @param variant [CSS] Chip Style Variant (outlined | contained | text)
 *  @param isDeletable Is Deletable? [optional]
 *  @param onDelete Delete Event Handler [optional]
 *  @returns JSX.Element
 */
export default function Chip(props: ChipType) {
    const { label, value, isDeletable = true, variant = 'outlined', onDelete } = props;

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        if (isDeletable && onDelete) {
            e.currentTarget.blur();
            onDelete(value);
        } else {
            e.preventDefault();
        }
    };

    return (
        <div
            className={joinClassNames(
                'flex w-max items-center gap-8 rounded-full',
                variant === 'outlined' && 'border border-primary-600 bg-white',
                variant === 'text' && 'border-[0.3px] border-gray-200 bg-white',
                variant === 'contained' && 'border border-primary-100 bg-primary-100',
                isDeletable ? 'pointer-events-auto py-4 pl-14 pr-8' : 'pointer-events-none px-12 py-4'
            )}
        >
            <Typography component="span" fontSize="text-16" fontWeight="font-medium" lineHeight="leading-normal">
                {label}
            </Typography>
            {isDeletable && (
                <button
                    type="button"
                    aria-label="delete"
                    onClick={handleClick}
                    className={joinClassNames(
                        'group flex cursor-pointer items-center justify-center rounded-full p-2',
                        getVariantStyle(variant),
                        variant === 'text' && 'border border-gray-200'
                    )}
                >
                    <DismissFilled className="!block h-12 w-12 text-inherit" />
                </button>
            )}
        </div>
    );
}
