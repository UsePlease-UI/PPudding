/* eslint-disable jsx-a11y/aria-role */
/** @jsxImportSource @emotion/react */

import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

import type { ListItemType } from 'examples/DragNDropExample';

type ComponentType = {
    title?: string;
    render?: (el: any) => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    items?: ListItemType[];
    onDragStart?: (event: React.DragEvent<HTMLLIElement>, item: ListItemType) => void;
    onDragOver?: (event: React.DragEvent<HTMLLIElement>) => void;
    onDrop?: (event: React.DragEvent<HTMLLIElement>, targetItem: ListItemType) => void;
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

const ItemList = (props: any) => {
    const { items, onDragStart, onDragOver, onDrop } = props;
    return (
        <div>
            {items?.map((el: any) => {
                return (
                    <li
                        key={el.idx}
                        css={dragItemStyle}
                        draggable
                        onDragStart={(e) => onDragStart(e, el)}
                        onDragOver={onDragOver}
                        onDrop={(e) => onDrop(e, el)}
                    >
                        {el.label}
                    </li>
                );
            })}
        </div>
    );
};

export default function DragNDrop(props: ComponentType) {
    const { title, items, render, onDragStart, onDragOver, onDrop } = props;

    return (
        <FlexBox direction="column" gap={10}>
            {title && <h2 id="dragList_title">{title}</h2>}
            <ul css={ulDragStyle} id="dragList_list" aria-labelledby="dragList_title">
                {render && render('el')}
                <ItemList items={items} onDragStart={onDragStart} onDragOver={onDragOver} onDrop={onDrop} />
            </ul>
        </FlexBox>
    );
}
