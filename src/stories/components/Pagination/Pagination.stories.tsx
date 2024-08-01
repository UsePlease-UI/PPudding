import { useState } from 'react';

import Pagination from '@components/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Pagination/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationControlTemplate: Story = {
    render: (args) => {
        const [value, setValue] = useState(1);
        return <Pagination {...args} page={value} onChange={setValue} />;
    }
};

export const Default: Story = {
    ...PaginationControlTemplate,
    args: {
        totalCount: 10,
        pageLimit: 5
    }
};
