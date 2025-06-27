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
    className: {
      control: false,
      description: 'custom className',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    overlayClassName: {
      control: false,
      description: 'custom className for overlay',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  component: Dialog.FocusManager,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 3. Dialog Focus Manager',
} satisfies Meta<typeof Dialog.FocusManager>;

export default meta;
type Story = StoryObj<typeof Dialog.FocusManager>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
