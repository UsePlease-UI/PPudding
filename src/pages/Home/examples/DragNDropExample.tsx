/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { css } from '@emotion/react';
import palette from 'styles/palette';

import FlexBox from 'components/Base/FlexBox';
import DragNDrop from 'components/DragNDrop/DragNDrop';
import { ListItemType } from 'components/DragNDrop/DragNDropListItem';

import { DRAG_N_DROP, DRAG_N_DROP_2 } from './constants';

const dragItemStyle = css({
    padding: 10,
    borderBottom: `1px solid ${palette.gray[100]}`,
    '&:last-of-type': {
        borderBottom: 0
    },
    '&:hover': {
        color: palette.neutral.white,
        background: palette.primary[600]
    }
});

export default function DragNDropExample() {
    const [draggedItem, setDraggedItem] = useState<ListItemType | null>(null);
    const [listItems, setListItems] = useState(DRAG_N_DROP);

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
        <FlexBox gap={10} flexDirection="column" customCSS={{ margin: '20px 0' }}>
            <DragNDrop
                render={() =>
                    listItems.map((data) => (
                        <li
                            key={data.idx}
                            css={dragItemStyle}
                            draggable
                            onDragStart={(e) => handleDragStart(e, data)}
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, data)}
                        >
                            {data.label}
                        </li>
                    ))
                }
            />
            <DragNDrop items={DRAG_N_DROP_2} />
        </FlexBox>
    );
}
