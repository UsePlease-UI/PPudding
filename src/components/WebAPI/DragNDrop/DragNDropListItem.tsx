import { DragEvent } from 'react';

import { listStyle } from '@components/Base';
import { CommonListDataType } from '@components/types';

import { joinClassNames } from '@utils/format';

type DragNDropListItemType = {
    items: CommonListDataType[];
    onDragStart?: (event: DragEvent<HTMLLIElement>, item: CommonListDataType) => void;
    onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
    onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: CommonListDataType) => void;
};

export default function DragNDropListItem({ items, onDragStart, onDragOver, onDrop }: DragNDropListItemType) {
    return items.map((el) => (
        <li
            key={el.idx}
            draggable
            onDragStart={(e) => {
                if (onDragStart) {
                    onDragStart(e, el);
                }
            }}
            onDragOver={onDragOver}
            onDrop={(e) => {
                if (onDrop) {
                    onDrop(e, el);
                }
            }}
            className={joinClassNames(listStyle.listItem, listStyle.listItemButton, 'leading-40')}
        >
            {el.label}
        </li>
    ));
}
