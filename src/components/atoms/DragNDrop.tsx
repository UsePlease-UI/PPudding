/* eslint-disable jsx-a11y/aria-role */
/** @jsxImportSource @emotion/react */

import { useState } from 'react';

import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

type ListItemType = {
    idx: number;
    label: string;
    value: string;
};
type ComponentType = {
    title?: string;
    items?: ListItemType[] | [];
    render?: (data: ListItemType) => void;
};

const ulDragStyle = css({
    minWidth: 300,
    borderRadius: 4,
    border: '1px solid black',
    boxSizing: 'border-box',
    padding: '10px 0',
    background: 'white'
});

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

export default function DragNDrop(props: ComponentType) {
    const { title, items, render } = props;

    const [draggedItem, setDraggedItem] = useState<ListItemType | null>(null);
    const [listItems, setListItems] = useState(items || []);

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

    return (
        <FlexBox direction="column" gap={10}>
            {title && <h2 id="dragList_title">{title}</h2>}
            <ul css={ulDragStyle} id="dragList_list" aria-labelledby="dragList_title">
                {render ? <>{render(data)}</> : null}
            </ul>
        </FlexBox>
    );
}

// {listItems.map((el) => {
//     return (
//         <li
//             key={el.idx}
//             css={dragItemStyle}
//             draggable
//             onDragStart={(e) => handleDragStart(e, el)}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, el)}
//         >
//             {el.label}
//         </li>
//     );
// })}
