import { HTMLAttributes, MouseEvent } from 'react';

import { DismissFilled } from '@fluentui/react-icons';

import { joinClassNames } from '@utils/format';

import { getVariantStyle } from './styles';
import { VariantType, getVariantStyle as getButtonVariantStyle } from '../styles';

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
                'flex w-max items-center gap-2 rounded-full',
                getVariantStyle(variant),
                isDeletable ? 'pointer-events-auto py-1 pl-3.5 pr-2' : 'pointer-events-none px-3 py-1'
            )}
        >
            <span className="text-16 font-medium leading-normal">{label}</span>
            {isDeletable && (
                <button
                    type="button"
                    aria-label="delete"
                    onClick={handleClick}
                    className={joinClassNames(
                        'group flex cursor-pointer items-center justify-center rounded-full p-0.5',
                        getButtonVariantStyle(variant),
                        variant === 'text' && 'border border-gray-200'
                    )}
                >
                    <DismissFilled className="!block h-3 w-3 text-inherit" />
                </button>
            )}
        </div>
    );
}
