import { useState } from 'react';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

import Radio from 'components/atoms/Radio';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Radio> = {
    title: 'Design System/Atoms/Form/Radio/Radio',
    component: Radio,
    tags: ['autodocs'],
    parameters: {
        docs: {
            argTypes: { exclude: ['currentValue', 'onChange'] },
            controls: { exclude: ['currentValue', 'onChange'] }
        }
    },
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        name: {
            type: { name: 'string', required: true },
            description: '라디오 버튼 이름',
            control: 'text',
            table: {
                type: { summary: 'string' },
                category: 'required'
            }
        },
        label: {
            type: { name: 'string', required: true },
            description: '라디오 텍스트 값',
            control: false,
            table: {
                type: { summary: 'string' },
                category: 'required'
            }
        },
        value: {
            type: { name: 'string', required: true },
            description: '라디오 버튼 값',
            control: false,
            table: {
                type: { summary: 'string | number' },
                category: 'required'
            }
        },
        currentValue: {
            type: { name: 'string', required: false },
            description: '선택된 라디오 버튼 값',
            control: false,
            table: {
                type: { summary: 'string | number' },
                category: 'optional'
            }
        },
        onChange: {
            type: { name: 'function', required: false },
            description: 'Change Handler',
            control: false,
            table: {
                type: { summary: '(e: React.ChangeEvent<HTMLInputElement>) => void' },
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
type Story = StoryObj<typeof Radio>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('red');
        return <Radio {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
    },
    args: {
        name: 'color',
        label: '빨강',
        value: 'red',
        currentValue: 'red',
        customCSS: {}
    }
};

// https://storybook.js.org/addons/@storybook/addon-interactions/
Default.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const radio1 = canvas.getByRole('radio', { name: '빨강' });
    await expect(radio1).toBeChecked();
};
