import { useState } from 'react';

import Select from 'components/molecules/Select';
import OPTIONS from 'constants/options';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MOLECULES/Select',
    component: Select,
    tags: ['autodocs'],
    argTypes: {
        name: {
            type: { name: 'string', required: true },
            description: 'Select 이름',
            control: { type: 'text' },
            table: { category: 'required', type: { summary: 'string' } }
        },
        label: {
            type: { name: 'string', required: true },
            control: false,
            description: '선택된 값의 label',
            table: { category: 'required', type: { summary: 'string' } }
        },
        value: {
            type: { name: 'string', required: true },
            control: false,
            description: '선택된 값의 value',
            table: { category: 'required', type: { summary: 'string | number' } }
        },
        options: {
            type: { name: 'string', required: true },
            control: { type: 'object' },
            description: '옵션들',
            table: {
                category: 'required',
                defaultValue: { summary: '[]' },
                type: { summary: '{ label: string; value: string | number }[]' }
            }
        },
        onChange: {
            type: { name: 'string', required: true },
            control: false,
            description: 'Change Event Handler',
            table: { category: 'required', type: { summary: 'function' } }
        },
        isDisabled: {
            control: { type: 'boolean' },
            description: '활성화여부',
            table: { category: 'States', defaultValue: { summary: false }, type: { summary: 'boolean' } }
        },
        isReadOnly: {
            control: { type: 'boolean' },
            description: '읽기 전용',
            table: { category: 'States', defaultValue: { summary: false }, type: { summary: 'boolean' } }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: { category: 'Style', defaultValue: { summary: '{}' }, type: { summary: 'CSSInterpolation' } }
        }
    }
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState<string>('');
        return (
            <Select
                {...args}
                label={OPTIONS.filter((val) => val.value === value)?.[0]?.label}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
        );
    },
    args: {
        name: 'milk',
        options: OPTIONS,
        isReadOnly: false,
        isDisabled: false,
        customCSS: {
            '&& + #root-select > div > div': {
                marginTop: 40
            }
        }
    }
};
