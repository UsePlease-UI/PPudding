import { useState } from 'react';

import TextField from '@components/Form/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Form/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('ReactJS');
        return <TextField {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
    },
    args: {
        type: 'text',
        placeholder: '이름을 입력해주세요.',
        maxLength: 100
    }
};

export const Number: Story = {
    render: (args) => {
        const [value, setValue] = useState('ReactJS');
        return <TextField {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
    },
    args: {
        type: 'number',
        placeholder: '숫자를 입력해주세요.',
        min: 10,
        max: 100
    }
};
