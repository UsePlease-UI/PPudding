import { useState } from 'react';

import { expect } from '@storybook/jest';
import { userEvent, within } from '@storybook/testing-library';

import Radio from 'components/atoms/Radio';
import RadioGroup from 'components/atoms/RadioGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof RadioGroup> = {
    title: 'ATOMS/RadioGroup',
    component: RadioGroup,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: { exclude: ['currentValue', 'onChange'] },
            controls: { exclude: ['currentValue', 'onChange'] }
        }
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            description: '컴포넌트',
            control: false,
            table: {
                type: { summary: 'React.ReactNode' },
                category: 'required'
            }
        },
        onChange: {
            type: { name: 'function', required: true },
            description: 'Change Handler',
            control: true,
            table: {
                type: { summary: 'function' },
                category: 'required'
            }
        },
        value: {
            type: { name: 'string', required: false },
            description: '선택된 라디오 버튼 값',
            control: false,
            table: {
                type: { summary: 'string | number' },
                category: 'optional'
            }
        },
        isRow: {
            type: { name: 'string', required: false },
            description: '[CSS] flex direction (row | column)',
            control: 'boolean',
            table: {
                type: { summary: 'boolean' },
                category: 'optional'
            }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: {
                category: 'style',
                defaultValue: { summary: '{}' },
                type: {
                    summary: 'CSSInterpolation'
                }
            }
        }
    }
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
        // eslint-disable-next-line react/jsx-no-useless-fragment
        children: <></>,
        value: 'red',
        isRow: true,
        customCSS: {}
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
