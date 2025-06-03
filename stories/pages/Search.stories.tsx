import SearchPage from './Search';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {},
  component: SearchPage,
  title: 'Pages/Search Page',
} satisfies Meta<typeof SearchPage>;

export default meta;
type Story = StoryObj<typeof SearchPage>;

export const Default: Story = {
  args: {},
};
