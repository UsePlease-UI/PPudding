import { forwardRef, LiHTMLAttributes, ReactNode, useCallback } from 'react';

import { joinClassNames } from '@utils/format';

import { listStyle } from './styles';

export interface ListboxItemType extends Omit<LiHTMLAttributes<HTMLDivElement>, 'onClick'> {
  label: ReactNode;
  value: string;
  isSelected?: boolean;
  onClick?: (selected: string) => void;
}

const ListboxItem = forwardRef<HTMLDivElement, ListboxItemType>(function ListboxItem(
  { className, isSelected, label, onClick, value, ...rest },
  ref,
) {
  const handleClick = useCallback(() => {
    if (onClick) {
      onClick(value);
    }
  }, [onClick, value]);

  return (
    <div
      {...rest}
      ref={ref}
      aria-selected={isSelected}
      className={joinClassNames(listStyle.listItem, isSelected && listStyle.selected, className && className)}
      onClick={handleClick}
      role="option"
    >
      {label}
    </div>
  );
});

export default ListboxItem;
