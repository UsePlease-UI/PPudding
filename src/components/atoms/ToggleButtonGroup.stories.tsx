import ToggleButton from 'components/atoms/ToggleButton';
import ToggleButtonGroup from 'components/atoms/ToggleButtonGroup';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Form/Toggle/ToggleButtonGroup',
    component: ToggleButtonGroup,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'function', required: true },
            control: false,
            description: 'Toggle Button',
            table: {
                category: 'required',
                type: { summary: 'React.ReactNode' }
            }
        },
        value: {
            type: { name: 'function', required: true },
            control: false,
            description: '선택된 Toggle Button 값',
            table: {
                category: 'required',
                type: { summary: 'string' }
            }
        },
        onChange: {
            type: { name: 'function', required: true },
            control: false,
            description: 'Change Event Handler',
            table: {
                category: 'required',
                type: { summary: ' (e: React.ChangeEvent<HTMLInputElement>) => void;' }
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
        value: 'banana',
        customCSS: {}
    }
};
