/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';

import DragNDrop from 'components/atoms/DragNDrop';
import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

const SAMPLE_LIST = [
    {
        idx: 1,
        label: 'first 11',
        value: 'first item'
    },
    {
        idx: 2,
        label: 'second 22',
        value: 'second item'
    },
    {
        idx: 3,
        label: 'third 33',
        value: 'third item'
    }
];

const dragItemStyle = css({
    boxSizing: 'border-box',
    padding: 10,
    borderBottom: '1px solid lightGray',
    '&:last-of-type': {
        borderBottom: 0
    },
    '&:hover': {
        background: 'lightPink'
    }
});

export type ListItemType = {
    idx: number;
    label: string;
    value: string;
};

export default function DragNDropExample() {
    const [draggedItem, setDraggedItem] = useState<ListItemType | null>(null);
    const [listItems, setListItems] = useState(SAMPLE_LIST || []);

    const handleDragStart = (event: React.DragEvent<HTMLLIElement>, item: ListItemType) => {
        setDraggedItem(item);
    };

    const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLLIElement>, targetItem: ListItemType) => {
        event.preventDefault();
        if (draggedItem) {
            const copy = listItems.slice(); // deep clone

            const { idx: dragIdx } = draggedItem; // 바꾸고 싶은 element idx
            const { idx: targetIdx } = targetItem; // 바뀐 element idx
            copy[targetIdx - 1] = { ...draggedItem, idx: targetIdx };
            copy[dragIdx - 1] = { ...targetItem, idx: dragIdx };

            setDraggedItem(null);
            setListItems(copy);
        }
    };

    useEffect(() => {
        console.log(listItems);
    }, [listItems]);

    return (
        <FlexBox gap={10}>
            <DragNDrop
                title="My Drag List"
                // render={() => {
                //     return (
                //         <div>
                //             {listItems.map((data) => {
                //                 return (
                //                     <li
                //                         key={data.idx}
                //                         css={dragItemStyle}
                //                         draggable
                //                         onDragStart={(e) => handleDragStart(e, data)}
                //                         onDragOver={handleDragOver}
                //                         onDrop={(e) => handleDrop(e, data)}
                //                     >
                //                         {data.label}
                //                     </li>
                //                 );
                //             })}
                //         </div>
                //     );
                // }}
                items={SAMPLE_LIST}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            />
        </FlexBox>
    );
}
