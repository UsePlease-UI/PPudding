/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { css } from '@emotion/react';
import palette from 'styles/palette';

import { Divider, Typography } from 'components/Base';
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
    const [listItems2, setListItems2] = useState(DRAG_N_DROP_2);
    const [draggedItem2, setDraggedItem2] = useState<ListItemType | null>(null);

    const handleDragOver = (event: React.DragEvent<HTMLLIElement>) => {
        event.preventDefault();
    };

    return (
        <FlexBox flexDirection="column" gap={20}>
            <Typography component="h2" fontSize={24}>
                Drag N Drop API
            </Typography>
            <FlexBox flexDirection="column" gap={20}>
                <Typography component="h3" fontSize={20}>
                    Default
                </Typography>
                <DragNDrop
                    items={listItems2}
                    onDragStart={(_, item) => setDraggedItem2(item)}
                    onDragOver={handleDragOver}
                    onDrop={(event, targetItem) => {
                        event.preventDefault();
                        if (draggedItem2) {
                            const copy = listItems.slice(); // deep clone

                            const { idx: dragIdx } = draggedItem2; // 바꾸고 싶은 element idx
                            const { idx: targetIdx } = targetItem; // 바뀐 element idx
                            copy[targetIdx - 1] = { ...draggedItem2, idx: targetIdx };
                            copy[dragIdx - 1] = { ...targetItem, idx: dragIdx };

                            setDraggedItem2(null);
                            setListItems2(copy);
                        }
                    }}
                />
                <Divider borderStyle="dashed" />
                <Typography component="h3" fontSize={20}>
                    Custom Item
                </Typography>
                <DragNDrop
                    render={() =>
                        listItems.map((data) => (
                            <li
                                key={data.idx}
                                css={dragItemStyle}
                                draggable
                                onDragStart={() => setDraggedItem(data)}
                                onDragOver={handleDragOver}
                                onDrop={(event) => {
                                    event.preventDefault();
                                    if (draggedItem) {
                                        const copy = listItems.slice(); // deep clone

                                        const { idx: dragIdx } = draggedItem; // 바꾸고 싶은 element idx
                                        const { idx: targetIdx } = data; // 바뀐 element idx
                                        copy[targetIdx - 1] = { ...draggedItem, idx: targetIdx };
                                        copy[dragIdx - 1] = { ...data, idx: dragIdx };

                                        setDraggedItem(null);
                                        setListItems(copy);
                                    }
                                }}
                            >
                                {data.label}
                            </li>
                        ))
                    }
                />
            </FlexBox>
        </FlexBox>
    );
}
