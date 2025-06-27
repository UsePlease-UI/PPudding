import Dialog from '@components/Dialog';

import DialogExample from './DialogExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: null,
  },
  argTypes: {
    children: {
      control: false,
      description: 'dialog action content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Dialog.Action,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 7. Dialog Action',
} satisfies Meta<typeof Dialog.Action>;

export default meta;
type Story = StoryObj<typeof Dialog.Action>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
