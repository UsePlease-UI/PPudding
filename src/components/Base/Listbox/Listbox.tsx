import { forwardRef, HTMLAttributes, MouseEvent, ReactNode } from 'react';

import { CommonListDataType } from '@components/types';

import ListboxItem from './ListboxItem';
import { listStyle } from './styles';

type BaseType = Omit<HTMLAttributes<HTMLUListElement>, 'className' | 'onClick'>;

type ListboxType = {
  id: string;
  options: CommonListDataType[];
  value: number | string;
  labelId?: string;
  renderItem?: (option: CommonListDataType) => ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
} & BaseType;

/**
 *  [Base Component] Listbox Component
 *  @param id [웹 접근성] Listbox Id
 *  @param value Selected value
 *  @param options Option List
 *  @param labelId [웹 접근성] Label Id [optional]
 *  @param onClick Click Event Handler for list option [optional]
 *  @param renderItem Custom Listbox Item Component [optional]
 *  @returns JSX.Element
 */
const Listbox = forwardRef<HTMLUListElement, ListboxType>(function Listbox(props, ref) {
  const { id, labelId, onClick, options, renderItem, value, ...rest } = props;

  return (
    <ul {...rest} ref={ref} aria-labelledby={labelId} className={listStyle.list} id={id} role="listbox" tabIndex={-1}>
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
