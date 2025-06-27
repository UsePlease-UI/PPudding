import Dialog from '@components/Dialog';

import DialogExample from './DialogExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    as: 'h2',
    children: null,
  },
  argTypes: {
    as: {
      control: false,
      description: 'element type (h1, h2, h3...)',
      table: {
        defaultValue: {
          summary: 'h2',
        },
        type: {
          summary: 'ElementType',
        },
      },
    },
    children: {
      control: false,
      description: 'dialog title content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Dialog.Title,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 5. Dialog Title',
} satisfies Meta<typeof Dialog.Title>;

export default meta;
type Story = StoryObj<typeof Dialog.Title>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
