import Pagination from '@components/Shared/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Shared/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: function Render(args) {
    return <Pagination {...args} />;
  },
  args: {
    itemsPerPage: 10,
    pageRange: 10,
    totalCount: 100,
    size: 'medium',
    variant: 'outlined',
    shape: 'circular',
    hasFirstIcon: true,
    hasLastIcon: true,
  },
};
