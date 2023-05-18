import { useState } from 'react';

import Pagination from 'components/organisms/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ORGANISMS/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        totalCount: {
            control: { type: 'number' },
            table: { category: 'REQUIRED' }
        },
        page: {
            control: false,
            table: { category: 'REQUIRED' }
        },
        blockNum: {
            control: false,
            table: { category: 'REQUIRED' }
        },
        onChange: {
            control: false,
            table: { category: 'REQUIRED' }
        },
        customCSS: {
            control: { type: 'object' },
            table: { category: 'Style' }
        }
    }
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationControlTemplate: Story = {
    render: (args) => {
        const [value, setValue] = useState(1);
        const [blockValue, setBlockValue] = useState(1);

        return (
            <Pagination
                {...args}
                page={value}
                blockNum={blockValue}
                onChange={(page: number, blockNum: number) => {
                    setValue(page);
                    setBlockValue(blockNum);
                }}
            />
        );
    }
};

export const PaginationControl: Story = {
    ...PaginationControlTemplate,
    args: {
        totalCount: 10,
        customCSS: {
            borderRadius: '10px'
        }
    }
};
