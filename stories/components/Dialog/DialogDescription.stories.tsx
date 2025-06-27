import Dialog from '@components/Dialog';

import DialogExample from './DialogExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    as: 'p',
    children: null,
  },
  argTypes: {
    as: {
      control: false,
      description: 'element type (p, div...)',
      table: {
        defaultValue: {
          summary: 'p',
        },
        type: {
          summary: 'ElementType',
        },
      },
    },
    children: {
      control: false,
      description: 'dialog description content',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Dialog.Description,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 6. Dialog Description',
} satisfies Meta<typeof Dialog.Description>;

export default meta;
type Story = StoryObj<typeof Dialog.Description>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
