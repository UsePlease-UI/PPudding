import { HTMLAttributes, MouseEvent, useCallback } from 'react';

import { XMarkIcon } from '@heroicons/react/24/solid';

import { joinClassNames } from '@utils/format';

import { ButtonVariantType, getCommonButtonVariantStyle } from '../styles';
import { getChipVariantStyle } from './styles';

export interface ChipType extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  isDeletable?: boolean;
  variant?: ButtonVariantType;
  onDelete?: (value: string) => void;
}

export default function Chip(props: ChipType) {
  const { className, isDeletable = true, label, onDelete, value, variant = 'outlined' } = props;

  const handleClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (isDeletable && onDelete) {
        e.currentTarget.blur();
        onDelete(value);
      } else {
        e.preventDefault();
      }
    },
    [isDeletable, onDelete, value],
  );

  return (
    <div
      className={joinClassNames(
        'flex w-max items-center gap-2 rounded-full',
        getChipVariantStyle(variant),
        isDeletable ? 'pointer-events-auto py-1 pl-3.5 pr-2' : 'pointer-events-none px-3 py-1',
        className && className,
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
            getCommonButtonVariantStyle(variant),
            variant === 'text' && 'border border-gray-200',
          )}
        >
          <XMarkIcon className="!block size-3 text-inherit" />
        </button>
      )}
    </div>
  );
}
