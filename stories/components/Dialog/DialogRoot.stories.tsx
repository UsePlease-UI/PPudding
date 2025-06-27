import { fn } from 'storybook/internal/test';

import Dialog from '@components/Dialog';

import DialogExample from './DialogExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    canDismiss: true,
    children: null,
    id: '',
    isOpen: false,
    role: 'dialog',
    setIsOpen: fn(),
  },
  argTypes: {
    canDismiss: {
      control: false,
      description: 'if true, clicking the overlay will close the dialog',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    children: {
      control: false,
      description: 'dialog content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    id: {
      control: false,
      description: 'dialog id',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    isOpen: {
      control: false,
      description: 'if true, the component will be visible',
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    role: {
      control: false,
      description: 'role',
      options: ['dialog', 'alertdialog'],
      table: {
        defaultValue: {
          summary: 'dialog',
        },
        type: {
          summary: 'dialog | alertdialog',
        },
      },
    },
    setIsOpen: {
      control: false,
      description: 'close event handler',
      table: {
        type: {
          summary: '() => void',
        },
      },
    },
  },
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 1. Dialog',
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
