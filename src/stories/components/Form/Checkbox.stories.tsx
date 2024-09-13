import { useState } from 'react';

import { Checkbox } from '@components/Form/Checkbox';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Checkbox> = {
    title: 'Form/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    render: (args) => {
        const [candy, setCandy] = useState(false);
        return (
            <Checkbox {...args} checked={candy} label="사탕" value="candy" onChange={() => setCandy((prev) => !prev)} />
        );
    },
    args: {
        isDisabled: false,
    },
};
