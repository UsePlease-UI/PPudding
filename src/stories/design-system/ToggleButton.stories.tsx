import ToggleButton from '@molecules/ToggleButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Molecules/Form/Toggle/ToggleButton',
    component: ToggleButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: { exclude: ['currentValue', 'onChange'] },
            controls: { exclude: ['currentValue', 'onChange'] }
        }
    },
    argTypes: {
        name: {
            type: { name: 'function', required: true },
            control: { type: 'text' },
            description: 'ToggleButton 이름',
            table: {
                category: 'required',
                type: { summary: 'string' }
            }
        },
        value: {
            type: { name: 'function', required: true },
            control: false,
            description: 'ToggleButton 값',
            table: { category: 'required', type: { summary: 'string' } }
        },
        currentValue: {
            control: false,
            description: '현재 선택된 Toggle Button 값',
            table: {
                category: 'optional',
                type: { summary: 'string' }
            }
        },
        onChange: {
            control: false,
            description: 'Change Event Handler',
            table: {
                category: 'optional',
                type: { summary: 'function' }
            }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: {
                category: 'style',
                defaultValue: { summary: '{}' },
                type: { summary: 'CSSInterpolation' }
            }
        }
    }
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const Selected: Story = {
    render: (args) => {
        return <ToggleButton {...args}>Banana</ToggleButton>;
    },
    args: {
        name: 'fruits',
        value: 'banana',
        currentValue: 'banana',
        customCSS: {}
    }
};

export const NotSelected: Story = {
    render: (args) => {
        return <ToggleButton {...args}>Orange</ToggleButton>;
    },
    args: {
        name: 'fruits',
        value: 'orange',
        currentValue: 'banana',
        customCSS: {}
    }
};
