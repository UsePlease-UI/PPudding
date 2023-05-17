import { useState } from 'react';

import TextField from 'components/atoms/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ATOMS/TextField',
    component: TextField,
    tags: ['autodocs'],
    argTypes: {
        name: {
            control: { type: 'text' },
            description: 'TextField 이름',
            table: { category: 'required', type: { summary: 'string' } }
        },
        value: {
            control: false,
            description: 'TextField 값',
            table: { category: 'required', type: { summary: 'string' } }
        },
        onChange: {
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
        isFullWidth: {
            control: { type: 'boolean' },
            description: '[CSS] width (100% 또는 기본 값)',
            table: { category: 'States', defaultValue: { summary: false }, type: { summary: 'boolean' } }
        },
        title: {
            control: { type: 'text' },
            description: '[웹 접근성] Title 속성',
            table: { category: 'Accessibility', type: { summary: 'string' } }
        },
        type: {
            control: { type: 'inline-radio' },
            description: '[속성] TextField 타입',
            options: ['text', 'number', 'url', 'email', 'password', 'phone'],
            table: {
                category: 'Input Attributes',
                defaultValue: { summary: 'text' },
                type: { summary: 'text | number | url | email | password | phone' }
            }
        },
        placeholder: {
            control: { type: 'text' },
            description: '[속성] TextField 안내문',
            table: { category: 'Input Attributes', defaultValue: { summary: '""' }, type: { summary: 'string' } }
        },
        maxLength: {
            control: { type: 'number' },
            description: '[속성] TextField 값 제한',
            table: { category: 'Input Attributes', defaultValue: { summary: 100 }, type: { summary: 'number' } }
        },
        onKeyDown: {
            control: false,
            description: 'Key Event Handler',
            table: { category: 'optional', defaultValue: { summary: '() => {}' }, type: { summary: 'function' } }
        },
        onFocus: {
            control: false,
            description: 'Focus Event Handler',
            table: { category: 'optional', defaultValue: { summary: '() => {}' }, type: { summary: 'function' } }
        },
        onBlur: {
            control: false,
            description: 'Blur Event Handler',
            table: { category: 'optional', defaultValue: { summary: '() => {}' }, type: { summary: 'function' } }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: { category: 'Style', defaultValue: { summary: '{}' }, type: { summary: 'CSSInterpolation' } }
        }
    }
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('ReactJS');
        return <TextField {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
    },
    args: {
        name: 'name',
        isReadOnly: false,
        isDisabled: false,
        isFullWidth: true,
        title: '이름',
        type: 'text',
        placeholder: '이름을 입력해주세요.',
        maxLength: 100,
        customCSS: { backgroundColor: '#ffffff' }
    }
};
