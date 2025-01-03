import { forwardRef, HTMLAttributes, MouseEvent, ReactNode } from 'react';

import { OptionsType } from '@components/types';

import { joinClassNames } from '@utils/format';

import ListboxItem from './ListboxItem';
import { listStyle } from './styles';

export interface ListboxType extends Omit<HTMLAttributes<HTMLUListElement>, 'onClick'> {
  id: string;
  value: number | string;
  options: OptionsType[];
  labelId?: string;
  renderItem?: (option: OptionsType) => ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const Listbox = forwardRef<HTMLUListElement, ListboxType>(function Listbox(props, ref) {
  const { className, id, labelId, onClick, options, renderItem, value, ...rest } = props;

  return (
    <ul
      {...rest}
      ref={ref}
      aria-labelledby={labelId}
      className={joinClassNames(listStyle.list, className && className)}
      id={id}
      tabIndex={-1}
      role="listbox"
    >
      {options.map(
        (option) =>
          renderItem?.(option) || (
            <ListboxItem
              key={`${option.label}-${option.value}`}
              currentValue={value}
              label={option.label}
              value={option.value}
              onClick={onClick}
            />
          ),
      )}
    </ul>
  );
});

export default Listbox;
