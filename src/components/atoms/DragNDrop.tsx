/* eslint-disable jsx-a11y/aria-role */
/** @jsxImportSource @emotion/react */

import { JSXElementConstructor, ReactElement, useState } from 'react';

import FlexBox from 'components/atoms/FlexBox';

import { css } from '@emotion/react';

import type { ListItemType } from 'examples/DragNDropExample';

type ComponentType = {
    title?: string;
    items?: ListItemType[] | [];
    render?: (el: any) => ReactElement<any, string | JSXElementConstructor<any>>;
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

export default function DragNDrop(props: ComponentType) {
    const { title, items, render, onDragStart, onDragOver, onDrop } = props;
    const isRender = !!render;

    return (
        <FlexBox direction="column" gap={10}>
            {title && <h2 id="dragList_title">{title}</h2>}
            <ul css={ulDragStyle} id="dragList_list" aria-labelledby="dragList_title">
                {render && render('el')}
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
