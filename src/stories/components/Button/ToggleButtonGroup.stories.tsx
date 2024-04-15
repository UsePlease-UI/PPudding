import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Button/ToggleButtonGroup',
    component: ToggleButtonGroup,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
    render: (args) => {
        return (
            <ToggleButtonGroup {...args}>
                <ToggleButton name="fruits" value="banana">
                    Banana
                </ToggleButton>
                <ToggleButton name="fruits" value="orange">
                    Orange
                </ToggleButton>
            </ToggleButtonGroup>
        );
    },
    args: {
        value: 'banana'
    }
};
