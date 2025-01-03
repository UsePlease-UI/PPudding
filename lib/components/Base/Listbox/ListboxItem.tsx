import { LiHTMLAttributes, MouseEvent, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { listStyle } from './styles';

export interface ListboxItemType extends Omit<LiHTMLAttributes<HTMLLIElement>, 'onClick'> {
  currentValue: number | string;
  label: ReactNode;
  value: number | string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ListboxItem({ className, currentValue, label, onClick, value, ...rest }: ListboxItemType) {
  return (
    <li
      {...rest}
      aria-selected={currentValue === value}
      className={joinClassNames(listStyle.listItem, className && className)}
      role="option"
    >
      <button
        className={joinClassNames(listStyle.listItemButton, currentValue === value && listStyle.selected)}
        type="button"
        value={value}
        onClick={onClick}
      >
        {label}
      </button>
    </li>
  );
}
