import DialogExample from './DialogExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {},
  component: DialogExample,
  title: 'Dialog/Documentation',
} satisfies Meta<typeof DialogExample>;

export default meta;
type Story = StoryObj<typeof DialogExample>;

export const Default: Story = {
  args: {},
};
