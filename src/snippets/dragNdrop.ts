export const DRAGNDROP_SHORT_SNIPPET = `
    <DragNDrop
        title="My Drag List"
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
`;

export const DRAGNDROP_CODE_SNIPPET = `
    const [draggedItem, setDraggedItem] = useState<ListItemType | null>(null);
    const [listItems, setListItems] = useState(SAMPLE_LIST_RENDER_PROPS);

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
        <FlexBox gap={10}>
            <DragNDrop
                title="My Drag List"
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
        </FlexBox>
    );
`;
