import { useState } from 'react';

import { expect, userEvent, within } from '@storybook/test';

import { Radio, RadioGroup } from '@components/Form/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
    title: 'Form/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: { exclude: ['children', 'onChange'] },
            controls: { exclude: ['children', 'onChange'] }
        }
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('red');
        return (
            <RadioGroup {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)}>
                <Radio name="color" label="빨강" value="red" />
                <Radio name="color" label="파랑" value="blue" />
            </RadioGroup>
        );
    },
    args: {
        value: 'red',
        isRow: true
    }
};

// https://storybook.js.org/addons/@storybook/addon-interactions/
Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radioGroup = canvas.getByRole('radiogroup');
    await expect(radioGroup).toBeInTheDocument();
    await expect(radioGroup).toHaveStyle('flex-direction: row');

    const radio1 = canvas.getByRole('radio', { name: '빨강' });
    await expect(radio1).toBeChecked();
    const radio2 = canvas.getByRole('radio', { name: '파랑' });
    await expect(radio2).not.toBeChecked();

    await userEvent.click(radio2);
    await expect(radio1).not.toBeChecked();
    await expect(radio2).toBeChecked();
};
