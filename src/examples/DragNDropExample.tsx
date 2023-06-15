import { useState } from 'react';

import DragNDrop from 'components/atoms/DragNDrop';
import FlexBox from 'components/atoms/FlexBox';

interface ListItem {
    idx: number;
    label: string;
    value: string;
}

const SAMPLE_LIST = [
    {
        idx: 1,
        label: 'first 11',
        value: 'first item'
    },
    {
        idx: 2,
        label: 'second 22',
        value: 'second item'
    },
    {
        idx: 3,
        label: 'third 33',
        value: 'third item'
    }
];
export default function DragNDropExample() {
    const [items, setItmes] = useState<ListItem[]>([
        {
            idx: 1,
            label: 'first',
            value: 'first item'
        },
        {
            idx: 2,
            label: 'second',
            value: 'second item'
        },
        {
            idx: 3,
            label: 'third',
            value: 'third item'
        },
        {
            idx: 4,
            label: 'fourth',
            value: 'fourth item'
        },
        {
            idx: 5,
            label: 'fifth',
            value: 'fifth item'
        },
        {
            idx: 6,
            label: 'sixth',
            value: 'sixth item'
        }
    ]);

    return (
        <FlexBox gap={10}>
            <DragNDrop title="My Drag List" items={items} render={(SAMPLE_LIST: ListItem) => <li>{SAMPLE_LIST}</li>} />
        </FlexBox>
    );
}
