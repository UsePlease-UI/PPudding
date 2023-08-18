/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import DragNDrop from 'components/API/DragNDrop';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof DragNDrop> = {
    title: 'API/DragNDrop',
    component: DragNDrop,
    tags: ['autodocs'],
    argTypes: {
        title: {
            type: { name: 'string' },
            control: { type: 'string' },
            description: 'DragNDrop 타이틀',
            table: { category: 'optional' }
        },
        render: {
            type: { name: 'string' },
            control: { type: 'array' },
            description: 'Render Props',
            table: { category: 'optional' }
        },
        items: {
            type: { name: 'string' },
            control: { type: 'object' },
            description: 'DragNDrop 내장 컴포넌트 사용 시 리스트에 보여질 항목',
            table: { category: 'optional' }
        },
        onDragOver: {
            type: { name: 'function' },
            control: { type: 'function' },
            description: 'items 항목이 있을 때 필수 값',
            table: { category: 'optional' }
        },
        onDragStart: {
            type: { name: 'function' },
            control: { type: 'function' },
            description: 'items 항목이 있을 때 필수 값',
            table: { category: 'optional' }
        },
        onDrop: {
            type: { name: 'function' },
            control: { type: 'function' },
            description: 'items 항목이 있을 때 필수 값',
            table: { category: 'optional' }
        }
    }
};

export default meta;
type Story = StoryObj<typeof DragNDrop>;

const SAMPLE_LIST_RENDER_PROPS = [
    {
        idx: 1,
        label: 'first 11 Render',
        value: 'first item'
    },
    {
        idx: 2,
        label: 'second 22 Render',
        value: 'second item'
    },
    {
        idx: 3,
        label: 'third 33 Render',
        value: 'third item'
    }
];

type ListItemType = {
    idx: number;
    label: string;
    value: string;
};

const DragNDropControlTemplate: Story = {
    render: (args) => {
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
                const copy = listItems.slice();

                const { idx: dragIdx } = draggedItem;
                const { idx: targetIdx } = targetItem;
                copy[targetIdx - 1] = { ...draggedItem, idx: targetIdx };
                copy[dragIdx - 1] = { ...targetItem, idx: dragIdx };

                setDraggedItem(null);
                setListItems(copy);
            }
        };
        return (
            <DragNDrop
                {...args}
                items={SAMPLE_LIST_RENDER_PROPS}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            />
        );
    }
};

export const Default: Story = {
    ...DragNDropControlTemplate,
    args: {
        title: 'my Drag & Drop List'
    }
};
