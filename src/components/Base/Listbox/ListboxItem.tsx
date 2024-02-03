/** @jsxImportSource @emotion/react */
import { MouseEvent, ReactNode } from 'react';

import { css } from '@emotion/react';

import Button from 'components/Button/Button';

import { listBoxStyle } from './styles';

type ListboxItemType = {
    currentValue: string | number;
    name: string;
    label: string | ReactNode;
    value: string | number;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

/**
 *  Listbox Item Component
 *  @param currentValue
 *  @param name
 *  @param label
 *  @param value
 *  @param onClick
 *  @returns JSX.Element
 */
const ListboxItem = ({ currentValue, name, label, value, onClick }: ListboxItemType) => {
    return (
        <li
            role="option"
            aria-selected={currentValue === value}
            css={css([
                listBoxStyle.listItem,
                {
                    ...(currentValue === value && listBoxStyle.selectedListItem)
                }
            ])}
        >
            <Button type="button" name={name} value={value} onClick={onClick}>
                {label}
            </Button>
        </li>
    );
};

export default ListboxItem;
