import TextField from 'components/atoms/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ATOMS/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: { type: 'text' },
            table: { category: 'required' }
        },
        value: {
            control: { type: 'text' },
            table: { category: 'required' }
        },
        onChange: {
            table: { category: 'required' }
        },
        isDisabled: {
            control: { type: 'boolean' },
            table: { category: 'States' }
        },
        isReadOnly: {
            control: { type: 'boolean' },
            table: { category: 'States' }
        },
        isFullWidth: {
            control: { type: 'boolean' },
            table: { category: 'States' }
        },
        title: {
            table: { category: 'Accessibility' }
        },
        type: {
            control: { type: 'inline-radio' },
            options: ['text', 'number', 'url', 'email', 'password', 'phone'],
            table: { category: 'Input Attributes' }
        },
        placeholder: {
            table: { category: 'Input Attributes' }
        },
        maxLength: {
            control: { type: 'number' },
            table: { category: 'Input Attributes' }
        },
        onKeyDown: {
            table: { category: 'optional' }
        },
        onFocus: {
            table: { category: 'optional' }
        },
        onBlur: {
            table: { category: 'optional' }
        },
        customCSS: {
            control: { type: 'object' },
            table: { category: 'Style' }
        }
    }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    args: {
        name: 'name',
        value: 'ReactJS',
        isReadOnly: false,
        isDisabled: false,
        isFullWidth: true,
        title: '이름',
        type: 'text',
        placeholder: '이름을 입력해주세요.',
        maxLength: 10,
        customCSS: { backgroundColor: 'white' }
    }
};
