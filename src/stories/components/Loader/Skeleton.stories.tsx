import Skeleton from '@components/Loader/Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Loader/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'rounded',
  },
};
