import TabExample from 'layouts/TabExample';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'EXAMPLES/Tab Example',
    component: TabExample,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof TabExample>;

export default meta;
type Story = StoryObj<typeof TabExample>;

export const Default: Story = {
    args: {}
};
