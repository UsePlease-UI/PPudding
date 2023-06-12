import TableExample from '@examples/TableExample';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: '@examples/Table Example',
    component: TableExample,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof TableExample>;

export default meta;
type Story = StoryObj<typeof TableExample>;

export const Default: Story = {
    args: {}
};
