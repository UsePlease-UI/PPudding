import { HTMLAttributes, MouseEvent, useCallback } from 'react';

import { XMarkIcon } from '@heroicons/react/24/solid';

import { joinClassNames } from '@utils/format';

import { ChipVariantType, getChipVariantStyle } from './styles';

export interface ChipType extends HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
  isDeletable?: boolean;
  variant?: ChipVariantType;
  onClick?: () => void;
  onDelete?: (value: string) => void;
}

export default function Chip(props: ChipType) {
  const { className, isDeletable = true, label, onClick, onDelete, value, variant = 'outlined', ...rest } = props;

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
      {...rest}
      tabIndex={onClick ? 0 : undefined}
      onClick={onClick}
      onKeyDown={onClick}
      role={onClick ? 'button' : undefined}
      className={joinClassNames(
        'flex w-max items-center gap-2 rounded-full',
        getChipVariantStyle(variant),
        isDeletable ? 'pointer-events-auto py-1 pl-3.5 pr-2' : 'pointer-events-none px-3 py-1',
        onClick && 'pointer-events-auto cursor-pointer',
        className && className,
      )}
    >
      <span
        className={joinClassNames(
          'text-16 font-medium leading-normal',
          variant === 'contained' ? 'text-white' : 'text-black',
        )}
      >
        {label}
      </span>
      {isDeletable && (
        <button
          aria-label="삭제"
          type="button"
          onClick={handleClick}
          className={joinClassNames(
            'group flex cursor-pointer items-center justify-center rounded-full p-0.5 hover:opacity-80 active:opacity-70',
            variant === 'outlined' ? 'border border-black text-black' : 'border border-white text-white',
          )}
        >
          <XMarkIcon className="!block size-3 text-inherit" />
        </button>
      )}
    </div>
  );
}
