/** @jsxImportSource @emotion/react */
import { DragEvent, ReactNode } from 'react';

import { FlexBox, Typography } from 'components/Base';

import DragNDropListItem, { ListItemType } from './DragNDropListItem';
import { dragNDropStyle } from './styles';

type DragNDropType = {
    title?: string;
    render?: () => ReactNode;
    items?: ListItemType[];
    onDragStart?: (event: DragEvent<HTMLLIElement>, item: ListItemType) => void;
    onDragOver?: (event: DragEvent<HTMLLIElement>) => void;
    onDrop?: (event: DragEvent<HTMLLIElement>, targetItem: ListItemType) => void;
};

/**
 *  [UI Component] Drag and Drop Component
 *  @param title: DnD component title [optional]
 *  @param render: render props [optional]
 *  @param items: DnD에서 보여주고자 하는 list items(render props로 넘기면 사용하지 않아도 됨)
 *  @param onDragStart: mouse down event listener
 *  @param onDragOver: mouse over event listener
 *  @param onDrop: mouse drop event listener
 *  @returns JSX.Element
 */
export default function DragNDrop(props: DragNDropType) {
    const { title, items, render, ...rest } = props;

    return (
        <FlexBox flexDirection="column" gap={10}>
            {title && (
                <Typography component="h2" id="drag-list-title">
                    {title}
                </Typography>
            )}
            <ul id="drag-list" aria-labelledby="drag-list-title" css={dragNDropStyle.list}>
                {render ? render() : <DragNDropListItem items={items || []} {...rest} />}
            </ul>
        </FlexBox>
    );
}
