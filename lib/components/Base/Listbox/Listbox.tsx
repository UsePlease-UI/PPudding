import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import ListboxItem from './ListboxItem';
import { listStyle } from './styles';

export interface ListboxOptionType {
  label: string;
  value: string;
  idx?: string;
}

export interface ListboxType extends Omit<HTMLAttributes<HTMLDivElement>, 'onClick'> {
  options: ListboxOptionType[];
  id?: string;
  labelId?: string;
  renderItem?: (option: ListboxOptionType, index: number) => ReactNode;
  value?: string;
  onClick?: (selected: string) => void;
  onHover?: (index: string) => void;
}

const Listbox = forwardRef<HTMLDivElement, ListboxType>(function Listbox(props, ref) {
  const { className, id, labelId, onClick, onHover, options, renderItem, value, ...rest } = props;

  return (
    <div
      {...rest}
      ref={ref}
      aria-labelledby={labelId}
      className={joinClassNames(listStyle.list, className && className)}
      id={id}
      tabIndex={-1}
      role="listbox"
    >
      {options.map(
        (option, index) =>
          renderItem?.(option, index) || (
            <ListboxItem
              key={`${option.label}-${option.value}`}
              isSelected={value === option.value}
              label={option.label}
              value={option.value}
              onClick={onClick}
              onHover={() => onHover?.(String(index))}
            />
          ),
      )}
    </div>
  );
});

export default Listbox;
