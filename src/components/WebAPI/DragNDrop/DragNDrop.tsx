import { DragEvent, ReactNode, useCallback, useEffect, useId, useState } from 'react';

import { listStyle } from '@components/Base/Listbox';
import { CommonListDataType } from '@components/types';

import DragNDropListItem from './DragNDropListItem';

type DragNDropType = {
    items?: CommonListDataType[];
    onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
    onDragStart?: (event: DragEvent<HTMLLIElement>, item: CommonListDataType) => void;
    onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: CommonListDataType) => void;
    render?: () => ReactNode;
    title?: string;
};

/**
 *  [UI Component] Drag and Drop Component
 *  @param title DnD Component Title [optional]
 *  @param render Custom List Item Component [optional]
 *  @param items List Item data (render props로 넘기면 사용하지 않아도 됨)
 *  @param onDragStart Mouse Down Event Listener [optional]
 *  @param onDragOver Mouse Over Event Listener [optional]
 *  @param onDrop Mouse Drop Event Listener [optional]
 *  @returns JSX.Element
 */
export default function DragNDrop({ items = [], onDragOver, onDragStart, onDrop, render, title }: DragNDropType) {
    const titleId = useId();

    const [listItems, setListItems] = useState(items);
    const [draggedItem, setDraggedItem] = useState<CommonListDataType | null>(null);

    useEffect(() => {
        if (listItems.length > 0) {
            setListItems(items);
        }
    }, []);

    const handleDragStart = useCallback(
        (event: DragEvent<HTMLLIElement>, data: CommonListDataType) => {
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
        (event: DragEvent<HTMLLIElement>, targetItem: CommonListDataType) => {
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
        <div className="flex flex-col gap-2.5">
            {title && (
                <h2 className="text-24 font-semibold" id={titleId}>
                    {title}
                </h2>
            )}
            <ul aria-labelledby={title ? titleId : undefined} className={listStyle.list} id="drag-list">
                {render ? (
                    render()
                ) : (
                    <DragNDropListItem
                        items={listItems}
                        onDragOver={handleDragOver}
                        onDragStart={handleDragStart}
                        onDrop={handleDrop}
                    />
                )}
            </ul>
        </div>
    );
}
