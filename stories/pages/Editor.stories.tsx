import EditorPage from './Editor';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {},
  component: EditorPage,
  title: 'Pages/Editor Page',
} satisfies Meta<typeof EditorPage>;

export default meta;
type Story = StoryObj<typeof EditorPage>;

export const Default: Story = {
  args: {},
};
