import Skeleton from '@components/Loader/Skeleton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: {
    className: { table: { disable: true } },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'skeleton size',
      options: ['large', 'medium', 'small'],
      table: {
        category: 'optional',
        type: {
          summary: 'large | medium | small',
        },
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
      },
      description: 'skeleton variant',
      options: ['rounded', 'square', 'circular'],
      table: {
        category: 'optional',
        type: {
          summary: 'rounded | square | circular',
        },
      },
    },
  },
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Loader/Skeleton',
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    size: 'medium',
    variant: 'rounded',
  },
  render: function Render(args) {
    return (
      <div className="flex h-full w-full min-w-192 items-center justify-center">
        <Skeleton {...args} />
      </div>
    );
  },
};
