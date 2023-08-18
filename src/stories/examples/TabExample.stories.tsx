import TabExample from 'pages/Home/examples/TabExample';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Examples/Tab Example',
    component: TabExample,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof TabExample>;

export default meta;
type Story = StoryObj<typeof TabExample>;

export const Default: Story = {
    args: {}
};
