import ToggleButtonExample from '@examples/ToggleButtonExample';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: '@examples/Toggle Button Example',
    component: ToggleButtonExample,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof ToggleButtonExample>;

export default meta;
type Story = StoryObj<typeof ToggleButtonExample>;

export const Default: Story = {
    args: {}
};
