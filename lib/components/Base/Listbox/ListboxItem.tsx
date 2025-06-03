import { LiHTMLAttributes, ReactNode, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

import { listStyle } from './styles';

export interface ListboxItemType extends Omit<LiHTMLAttributes<HTMLDivElement>, 'onClick'> {
  label: ReactNode;
  value: string;
  isSelected?: boolean;
  onClick?: (selected: string) => void;
  onHover?: () => void;
}

export default function ListboxItem({
  className,
  isSelected,
  label,
  onClick,
  onHover,
  value,
  ...rest
}: ListboxItemType) {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(value);
    }
  }, [onClick, value]);

  return (
    <div
      {...rest}
      aria-selected={isSelected}
      className={joinClassNames(listStyle.listItem, isSelected && listStyle.selected, className && className)}
      onClick={handleClick}
      onFocus={onHover}
      onMouseEnter={onHover}
      role="option"
    >
      {label}
    </div>
  );
}
