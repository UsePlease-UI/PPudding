import { useState } from 'react';

import Pagination from '@components/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Pagination/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const PaginationControlTemplate: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(1);
    return <Pagination {...args} page={value} onChange={setValue} />;
  },
};
