import { HTMLAttributes, MouseEvent } from 'react';

import { DismissFilled } from '@fluentui/react-icons';

import { joinClassNames } from '@utils/format';

import { getVariantStyle as getButtonVariantStyle, VariantType } from '../styles';
import { getVariantStyle } from './styles';

type ChipType = {
  label: string;
  value: string;
  isDeletable?: boolean;
  variant?: VariantType;
  onDelete?: (value: string) => void;
} & Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

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
  const { isDeletable = true, label, onDelete, value, variant = 'outlined' } = props;

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
        isDeletable ? 'pointer-events-auto py-1 pl-3.5 pr-2' : 'pointer-events-none px-3 py-1',
      )}
    >
      <span className="text-16 font-medium leading-normal">{label}</span>
      {isDeletable && (
        <button
          aria-label="delete"
          type="button"
          onClick={handleClick}
          className={joinClassNames(
            'group flex cursor-pointer items-center justify-center rounded-full p-0.5',
            getButtonVariantStyle(variant),
            variant === 'text' && 'border border-gray-200',
          )}
        >
          <DismissFilled className="!block size-3 text-inherit" />
        </button>
      )}
    </div>
  );
}
