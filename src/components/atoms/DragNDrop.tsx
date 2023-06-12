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
    list: ListItemType[];
};

const ulDragStyle = css({
    minWidth: 300,
    borderRadius: 4,
    border: '1px solid black',
    boxSizing: 'border-box',
    padding: '10px 0',
    background: 'white'
});

const liDragStyle = css({
    boxSizing: 'border-box',
    padding: 10,
    borderBottom: '1px solid lightGray',
    '&:last-of-type': {
        borderBottom: 0
    }
});

export default function DragNDrop({ title, list }: DragNDropType) {
    const [selectedItem, setSelectedItem] = useState();

    const handleClick = (e: any) => {
        setSelectedItem(e);
    };

    useEffect(() => {
        console.log(selectedItem);
    }, [selectedItem]);

    return (
        <FlexBox direction="column" gap={10}>
            {title && <h2 id="dragList_title">{title}</h2>}
            <ul css={ulDragStyle} id="dragList_list" role="listBox" aria-labelledby="dragList_title">
                {list.map((el) => {
                    return (
                        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                        <li key={el.idx} css={liDragStyle} role="option" onClick={() => handleClick(el.value)}>
                            <span>{el.label}</span>
                        </li>
                    );
                })}
            </ul>
        </FlexBox>
    );
}
