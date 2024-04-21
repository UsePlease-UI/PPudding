import { MouseEvent, ReactNode } from 'react';

import { joinClassNames } from '@utils/format';

import { listStyle } from './styles';

type ListboxItemType = {
    currentValue: string | number;
    label: ReactNode;
    value: string | number;
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

/**
 *  [Base Component] Listbox Item Component
 *  @param currentValue 현재 선택된 값
 *  @param label Listbox Item 텍스트
 *  @param value Listbox Item 값
 *  @param onClick Click Event Handler
 *  @returns JSX.Element
 */
const ListboxItem = ({ currentValue, label, value, onClick }: ListboxItemType) => {
    return (
        <li role="option" aria-selected={currentValue === value} className={listStyle.listItem}>
            <button
                type="button"
                value={value}
                onClick={onClick}
                className={joinClassNames(listStyle.listItemButton, currentValue === value && listStyle.selected)}
            >
                {label}
            </button>
        </li>
    );
};

export default ListboxItem;
