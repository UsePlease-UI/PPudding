import { DragEvent, HTMLAttributes, ReactNode, useCallback, useEffect, useState } from 'react';

import { listStyle } from '@components/Base/Listbox';
import { OptionsType } from '@components/types';

import DragNDropListItem from './DragNDropListItem';

export interface DragNDropType extends Omit<HTMLAttributes<HTMLUListElement>, 'onDragOver' | 'onDragStart' | 'onDrop'> {
  renderItem?: () => ReactNode;
  onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
  onDragStart?: (event: DragEvent<HTMLLIElement>, item: OptionsType) => void;
  onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: OptionsType) => void;
  options?: OptionsType[];
}

export default function DragNDrop({
  onDragOver,
  onDragStart,
  onDrop,
  options = [],
  renderItem,
  ...rest
}: DragNDropType) {
  const [listItems, setListItems] = useState(options);
  const [draggedItem, setDraggedItem] = useState<null | OptionsType>(null);

  useEffect(() => {
    if (options.length > 0) {
      setListItems(options);
    }
  }, [options]);

  const handleDragStart = useCallback(
    (event: DragEvent<HTMLLIElement>, data: OptionsType) => {
      setDraggedItem(data);
      if (onDragStart) {
        onDragStart(event, data);
      }
    },
    [onDragStart],
  );

  const handleDragOver = useCallback(
    (event: DragEvent<HTMLLIElement>) => {
      event.preventDefault();
      if (onDragOver) {
        onDragOver(event);
      }
    },
    [onDragOver],
  );

  const handleDrop = useCallback(
    (event: DragEvent<HTMLLIElement>, targetItem: OptionsType) => {
      event.preventDefault();
      if (draggedItem) {
        const newListItems = listItems.slice(); // deep clone
        const dragIdx = newListItems.findIndex((val) => val.idx === draggedItem.idx); // 바꾸고 싶은 element idx
        const targetIdx = newListItems.findIndex((val) => val.idx === targetItem.idx); // 바꾸고 싶은 element idx
        newListItems[targetIdx] = draggedItem;
        newListItems[dragIdx] = targetItem;
        setDraggedItem(null);
        setListItems(newListItems);
      }

      if (onDrop) {
        onDrop(event, targetItem);
      }
    },
    [draggedItem, listItems, onDrop],
  );

  return (
    <ul {...rest} className={listStyle.list} id="drag-list">
      {renderItem ? (
        renderItem()
      ) : (
        <DragNDropListItem
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
          onDrop={handleDrop}
          options={listItems}
        />
      )}
    </ul>
  );
}
