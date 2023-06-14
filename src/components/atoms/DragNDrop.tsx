/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/aria-role */
/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';

import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

type ListItemType = {
    idx: number;
    label: string;
    value: string;
};
type DragNDropType = {
    title?: string;
    items: ListItemType[];
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

export default function DragNDrop({ title, items }: DragNDropType) {
    const [draggedItem, setDraggedItem] = useState<ListItemType | null>(null);
    const [listItems, setListItems] = useState<ListItemType[]>(items);

    const handleDragStart = (event: React.DragEvent<HTMLLIElement>, item: ListItemType) => {
        setDraggedItem(item);
    };

    const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: React.DragEvent<HTMLLIElement>, targetItem: ListItemType) => {
        console.log('drop');

        event.preventDefault();
        if (draggedItem) {
            const updatedItems = listItems.map((item) => {
                if (item.idx === draggedItem.idx) {
                    return { ...item, id: targetItem.idx };
                }
                if (item.idx === targetItem.idx) {
                    return { ...item, id: draggedItem.idx };
                }
                return item;
            });
            setDraggedItem(null);
            setListItems(updatedItems);
        }
    };

    useEffect(() => {
        console.log('list', listItems);
    }, [listItems]);

    return (
        <FlexBox direction="column" gap={10}>
            {title && <h2 id="dragList_title">{title}</h2>}
            <ul css={ulDragStyle} id="dragList_list" role="listBox" aria-labelledby="dragList_title">
                {listItems.map((el) => {
                    return (
                        <li
                            key={el.idx}
                            // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                            role="option"
                            css={dragItemStyle}
                            draggable
                            onDragStart={(e) => handleDragStart(e, el)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, el)}
                        >
                            {el.label}
                        </li>
                    );
                })}
            </ul>
        </FlexBox>
    );
}
