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
      description: 'dialog trigger button content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Dialog.Trigger,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 2. Dialog Trigger',
} satisfies Meta<typeof Dialog.Trigger>;

export default meta;
type Story = StoryObj<typeof Dialog.Trigger>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
