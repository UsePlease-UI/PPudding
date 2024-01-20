/** @jsxImportSource @emotion/react */
import { HTMLAttributes, MouseEvent, ReactNode, forwardRef } from 'react';

import { css } from '@emotion/react';
import { CustomCSSType } from 'styles';

import ListboxItem from './ListboxItem';
import { listBoxStyle } from './styles';

export type OptionType = { [key: string]: string | number };

type BaseType = Omit<HTMLAttributes<HTMLUListElement>, 'onClick'> & CustomCSSType;

type ListboxType = BaseType & {
    id: string;
    labelId?: string;
    name: string;
    value: string | number;
    options: OptionType[];
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    renderItem?: (option: OptionType) => ReactNode;
};

/**
 *  Listbox Component
 *  @param id Listbox Id
 *  @param name Autocomplete Name
 *  @param value Selected value
 *  @param options Option List
 *  @param labelId Label Id [optional]
 *  @param onClick Click Event Handler for list option [optional]
 *  @param renderItem Custom Listbox Item Component [optional]
 *  @returns JSX.Element
 */
const Listbox = forwardRef<HTMLUListElement, ListboxType>(function createListbox(
    { id, labelId, value, options, renderItem, customCSS, name, onClick, ...props },
    ref
) {
    return (
        <ul
            {...props}
            ref={ref}
            id={id}
            role="listbox"
            aria-labelledby={labelId}
            tabIndex={-1}
            css={css([listBoxStyle.list, customCSS])}
        >
            {options.map(
                (option) =>
                    renderItem?.(option) || (
                        <ListboxItem
                            key={`${option.label}-${option.value}`}
                            name={name}
                            currentValue={value}
                            label={option.label}
                            value={option.value}
                            onClick={onClick}
                        />
                    )
            )}
        </ul>
    );
});

export default Listbox;
