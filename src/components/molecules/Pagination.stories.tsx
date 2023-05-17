import { useState } from 'react';

import Pagination from 'components/molecules/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MOLECULES/Pagination',
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

export const Default: Story = {
    ...PaginationControlTemplate,
    args: {
        totalCount: 10
    }
};
