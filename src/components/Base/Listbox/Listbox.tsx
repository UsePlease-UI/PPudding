import { HTMLAttributes, MouseEvent, ReactNode, forwardRef } from 'react';

import { CommonListDataType } from '@components/types';

import ListboxItem from './ListboxItem';
import { listStyle } from './styles';

type BaseType = Omit<HTMLAttributes<HTMLUListElement>, 'onClick' | 'className'>;

type ListboxType = BaseType & {
    id: string;
    value: string | number;
    options: CommonListDataType[];
    labelId?: string;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    renderItem?: (option: CommonListDataType) => ReactNode;
};

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
    const { id, labelId, value, options, renderItem, onClick, ...rest } = props;

    return (
        <ul
            {...rest}
            ref={ref}
            id={id}
            role="listbox"
            aria-labelledby={labelId}
            tabIndex={-1}
            className={listStyle.list}
        >
            {options.map(
                (option) =>
                    renderItem?.(option) || (
                        <ListboxItem
                            key={`${option.label}-${option.value}`}
                            label={option.label}
                            value={option.value}
                            currentValue={value}
                            onClick={onClick}
                        />
                    )
            )}
        </ul>
    );
});

export default Listbox;
