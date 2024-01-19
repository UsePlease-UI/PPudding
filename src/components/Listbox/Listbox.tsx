/** @jsxImportSource @emotion/react */
import { MouseEvent, ReactNode, forwardRef } from 'react';

import { css } from '@emotion/react';
import { CustomCSSType } from 'styles';

import ListboxItem from './ListboxItem';
import { listBoxStyle } from './styles';

export type OptionType = { [key: string]: string | number };

type ListboxType = CustomCSSType & {
    id: string;
    labelId: string;
    name: string;
    value: string | number;
    options: OptionType[];
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    renderItem?: (option: OptionType) => ReactNode;
};

/**
 *  Listbox Component
 *  @param id
 *  @param labelId
 *  @param name
 *  @param value
 *  @param options
 *  @param onClick
 *  @param renderItem
 *  @returns JSX.Element
 */
const Listbox = forwardRef<HTMLUListElement, ListboxType>(function createListbox(
    { id, labelId, value, options, renderItem, customCSS, ...props },
    ref
) {
    return (
        <ul
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
                            currentValue={value}
                            label={option.label}
                            value={option.value}
                            {...props}
                        />
                    )
            )}
        </ul>
    );
});

export default Listbox;
