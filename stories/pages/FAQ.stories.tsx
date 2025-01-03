import FAQPage from './FAQ';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  argTypes: {},
  component: FAQPage,
  title: 'Pages/FAQ Page',
} satisfies Meta<typeof FAQPage>;

export default meta;
type Story = StoryObj<typeof FAQPage>;

export const Default: Story = {
  args: {},
};
