/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import palette from 'styles/palette';

const itemStyle = css({
    padding: 10,
    borderBottom: '1px solid #eeeeee',
    '&:last-of-type': {
        borderBottom: 0
    },
    '&:hover': {
        background: palette.lightBlue.main
    }
});

export type ListItemType = {
    idx: number;
    label: string;
    value: string;
};

type DragNDropListItemType = {
    items: ListItemType[];
    onDragStart?: (event: React.DragEvent<HTMLLIElement>, item: ListItemType) => void;
    onDragOver?: (event: React.DragEvent<HTMLLIElement>) => void;
    onDrop?: (event: React.DragEvent<HTMLLIElement>, targetItem: ListItemType) => void;
};

export default function DragNDropListItem(props: DragNDropListItemType) {
    const { items, onDragStart, onDragOver, onDrop } = props;
    return (
        <>
            {items.map((el: ListItemType) => {
                return (
                    <li
                        key={el.idx}
                        css={itemStyle}
                        draggable
                        onDragStart={(e) => {
                            if (onDragStart) {
                                onDragStart(e, el);
                            }
                        }}
                        onDragOver={onDragOver}
                        onDrop={(e) => {
                            if (onDrop) {
                                onDrop(e, el);
                            }
                        }}
                    >
                        {el.label}
                    </li>
                );
            })}
        </>
    );
}
