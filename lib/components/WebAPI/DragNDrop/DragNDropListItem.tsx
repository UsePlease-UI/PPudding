import { DragEvent, useCallback } from 'react';

import { listStyle } from '@components/Base/Listbox';
import { OptionsType } from '@components/types';

import { joinClassNames } from '@utils/format';

interface DragNDropListItemType {
  options: OptionsType[];
  onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
  onDragStart?: (event: DragEvent<HTMLLIElement>, item: OptionsType) => void;
  onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: OptionsType) => void;
}

export default function DragNDropListItem({ onDragOver, onDragStart, onDrop, options }: DragNDropListItemType) {
  const handleDragStart = useCallback(
    (e: DragEvent<HTMLLIElement>, item: OptionsType) => {
      if (onDragStart) {
        onDragStart(e, item);
      }
    },
    [onDragStart],
  );

  const handleDrop = useCallback(
    (e: DragEvent<HTMLLIElement>, item: OptionsType) => {
      if (onDrop) {
        onDrop(e, item);
      }
    },
    [onDrop],
  );

  return options.map((option) => (
    <li
      key={option.idx}
      draggable
      className={joinClassNames(listStyle.listItem, listStyle.listItemButton, 'leading-40')}
      onDragOver={onDragOver}
      onDragStart={(e) => handleDragStart(e, option)}
      onDrop={(e) => handleDrop(e, option)}
    >
      {option.label}
    </li>
  ));
}
