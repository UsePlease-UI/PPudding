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
      description: 'dialog content (Title, Description ...)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Dialog.Content,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Dialog/UI - 4. Dialog Content',
} satisfies Meta<typeof Dialog.Content>;

export default meta;
type Story = StoryObj<typeof Dialog.Content>;

export const Default: Story = {
  args: {},
  render: () => <DialogExample />,
};
