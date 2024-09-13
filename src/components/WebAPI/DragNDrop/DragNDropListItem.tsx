import { DragEvent } from 'react';

import { listStyle } from '@components/Base/Listbox';
import { CommonListDataType } from '@components/types';

import { joinClassNames } from '@utils/format';

type DragNDropListItemType = {
  items: CommonListDataType[];
  onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
  onDragStart?: (event: DragEvent<HTMLLIElement>, item: CommonListDataType) => void;
  onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: CommonListDataType) => void;
};

export default function DragNDropListItem({ items, onDragOver, onDragStart, onDrop }: DragNDropListItemType) {
  return items.map((el) => (
    <li
      key={el.idx}
      draggable
      className={joinClassNames(listStyle.listItem, listStyle.listItemButton, 'leading-40')}
      onDragOver={onDragOver}
      onDragStart={(e) => {
        if (onDragStart) {
          onDragStart(e, el);
        }
      }}
      onDrop={(e) => {
        if (onDrop) {
          onDrop(e, el);
        }
      }}
    >
      {el.label}
    </li>
  ));
}
