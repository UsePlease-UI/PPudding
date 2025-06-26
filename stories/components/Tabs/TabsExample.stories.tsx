import TabsExample from './TabsExample';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  component: TabsExample,
  title: 'Tabs/Documentation',
} satisfies Meta<typeof TabsExample>;

export default meta;

type Story = StoryObj<typeof TabsExample>;

export const Default: Story = {
  args: {},
};
