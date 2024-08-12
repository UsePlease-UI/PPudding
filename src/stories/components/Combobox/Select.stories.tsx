import { useState } from 'react';

import Select from '@components/Combobox/Select';

import { OPTIONS } from '../constants';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Combobox/Select',
    component: Select,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
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
        labelText: 'test',
        helperText: '하나의 값을 선택해 주세요.',
        options: OPTIONS,
        isReadOnly: false,
        isDisabled: false,
        placeholder: '값을 선택해 주세요.'
    }
};
