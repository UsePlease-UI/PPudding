/** @jsxImportSource @emotion/react */
import FlexBox from 'components/Base/FlexBox';
import Typography from 'components/Base/Typography';

import DragNDropListItem, { ListItemType } from './DragNDropListItem';

import { css } from '@emotion/react';

const ulStyle = css({
    width: '100%',
    borderRadius: 4,
    border: '1px solid #000000',
    padding: '10px 0',
    background: '#ffffff'
});

type DragNDropType = {
    title?: string;
    render?: () => React.ReactNode;
    items?: ListItemType[];
    onDragStart?: (event: React.DragEvent<HTMLLIElement>, item: ListItemType) => void;
    onDragOver?: (event: React.DragEvent<HTMLLIElement>) => void;
    onDrop?: (event: React.DragEvent<HTMLLIElement>, targetItem: ListItemType) => void;
};

export default function DragNDrop(props: DragNDropType) {
    const { title, items, render, ...rest } = props;

    return (
        <FlexBox direction="column" gap={10}>
            {title && (
                <Typography component="h2" id="drag-list-title">
                    {title}
                </Typography>
            )}
            <ul id="drag-list" aria-labelledby="drag-list-title" css={ulStyle}>
                {render ? render() : <DragNDropListItem items={items || []} {...rest} />}
            </ul>
        </FlexBox>
    );
}
