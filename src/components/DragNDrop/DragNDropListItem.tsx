/** @jsxImportSource @emotion/react */
import { dragNDropStyle } from './styles';

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
                        css={dragNDropStyle.listItem}
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
