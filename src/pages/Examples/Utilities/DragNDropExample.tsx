import { DragEvent, useCallback, useState } from 'react';

import { v4 as uuid } from 'uuid';

import { listStyle } from '@components/Base';
import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';
import { CommonListDataType } from '@components/types';
import DragNDrop from '@components/WebAPI/DragNDrop';

import { joinClassNames } from '@utils/format';

const DRAG_N_DROP = [
    {
        idx: uuid(),
        label: '사과',
        value: 'apple'
    },
    {
        idx: uuid(),
        label: '바나나',
        value: 'banana'
    },
    {
        idx: uuid(),
        label: '키위',
        value: 'kiwi'
    }
];

const DRAG_N_DROP_2 = [
    {
        idx: uuid(),
        label: '오렌지',
        value: 'orange'
    },
    {
        idx: uuid(),
        label: '망고',
        value: 'mango'
    },
    {
        idx: uuid(),
        label: '복숭아',
        value: 'peach'
    }
];

export default function DragNDropExample() {
    const [tab, setTab] = useState(1);

    const [listItems, setListItems] = useState<CommonListDataType[]>(DRAG_N_DROP_2);
    const [draggedItem, setDraggedItem] = useState<CommonListDataType | null>(null);

    const handleChange = useCallback((newValue: number) => {
        setTab(newValue);
        setListItems(DRAG_N_DROP_2);
    }, []);

    const handleDragStart = (_event: DragEvent<HTMLLIElement>, newItem: CommonListDataType) => {
        setDraggedItem(newItem);
    };

    const handleDragOver = (event: DragEvent<HTMLLIElement>) => {
        event.preventDefault();
    };

    const handleDrop = (event: DragEvent<HTMLLIElement>, targetItem: CommonListDataType) => {
        event.preventDefault();
        if (draggedItem) {
            const copy = listItems.slice();
            const dragIdx = copy.findIndex((val) => val.idx === draggedItem.idx); // 바꾸고 싶은 element idx
            const targetIdx = copy.findIndex((val) => val.idx === targetItem.idx); // 바꾸고 싶은 element idx
            copy[targetIdx] = draggedItem;
            copy[dragIdx] = targetItem;
            setDraggedItem(null);
            setListItems(copy);
        }
    };

    return (
        <TabContainer>
            <Tab aria-label="drag n drop example tab" value={tab} onChange={handleChange}>
                <TabItem label="Default" value={tab} index={1} />
                <TabItem label="Custom" value={tab} index={2} />
            </Tab>
            <TabPanel index={1} value={tab}>
                <DragNDrop items={DRAG_N_DROP} />
            </TabPanel>
            <TabPanel index={2} value={tab}>
                <DragNDrop
                    render={() =>
                        listItems.map((data) => (
                            <li
                                key={data.idx}
                                draggable
                                onDragStart={(e) => handleDragStart(e, data)}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, data)}
                                className={joinClassNames(listStyle.listItem, listStyle.listItemButton, 'leading-40')}
                            >
                                {data.label}
                            </li>
                        ))
                    }
                />
            </TabPanel>
        </TabContainer>
    );
}
