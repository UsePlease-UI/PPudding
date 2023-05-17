import { useState } from 'react';

import TextField from 'components/atoms/TextField';
import FormControl from 'components/molecules/FormControl';
import Select from 'components/molecules/Select';
import OPTIONS from 'constants/options';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MOLECULES/FormControl',
    component: FormControl,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: { type: 'text' },
            description: '[웹 접근성] id',
            table: { category: 'Accessibility', defaultValue: { summary: 'input' }, type: { summary: 'string' } }
        },
        helperTextId: {
            control: { type: 'text' },
            description: '[웹 접근성] helper text의 id',
            table: {
                category: 'Accessibility',
                defaultValue: { summary: 'input-helper-text' },
                type: { summary: 'string' }
            }
        },
        label: {
            control: { type: 'text' },
            description: 'Label Text',
            table: { category: 'Optional', defaultValue: { summary: '""' }, type: { summary: 'string' } }
        },
        helperText: {
            control: { type: 'text' },
            description: 'Helper Text',
            table: { category: 'Optional', defaultValue: { summary: '""' }, type: { summary: 'string' } }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: { category: 'Style', defaultValue: { summary: '{}' }, type: { summary: 'CSSInterpolation' } }
        }
    }
} satisfies Meta<typeof FormControl>;

export default meta;
type Story = StoryObj<typeof FormControl>;

const INPUT_ARGS = {
    name: 'name',
    value: 'ReactJS',
    isReadOnly: false,
    isDisabled: false,
    isFullWidth: true,
    title: '이름',
    type: 'text' as const,
    placeholder: '이름을 입력해주세요.',
    maxLength: 10
};

const FormControlTextFieldTemplate: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <FormControl {...args}>
                <TextField {...INPUT_ARGS} value={value} onChange={(e) => setValue(e.currentTarget.value)} />
            </FormControl>
        );
    }
};

const SELECT_ARGS = {
    name: 'milk',
    label: '딸기',
    value: '1',
    options: OPTIONS,
    isReadOnly: false,
    isDisabled: false,
    customCSS: {
        '& + #root-select > div > div': {
            marginTop: 75
        }
    }
};

const FormControlSelectTemplate: Story = {
    render: (args) => {
        const [value, setValue] = useState('');
        return (
            <FormControl {...args}>
                <Select
                    {...SELECT_ARGS}
                    label={OPTIONS.filter((val) => val.value === value)?.[0]?.label}
                    value={value}
                    onChange={(e) => setValue(e.currentTarget.value)}
                />
            </FormControl>
        );
    }
};

export const FormControlTextField: Story = {
    ...FormControlTextFieldTemplate,
    args: {
        id: 'name',
        helperText: 'I am a helper text',
        helperTextId: 'name-helper-text',
        label: 'name',
        customCSS: {
            padding: 10,
            backgroundColor: '#ffffff',
            border: '1px solid pink',
            borderRadius: 4,
            '& > label': {
                textTransform: 'uppercase',
                marginLeft: 2,
                marginBottom: 2
            },
            '& > small': {
                marginTop: 4,
                marginLeft: 4
            }
        }
    }
};

export const FormControlSelect: Story = {
    ...FormControlSelectTemplate,
    args: {
        id: 'milk',
        helperText: '우유 종류를 선택해주세요',
        helperTextId: 'milk-helper-text',
        label: '우유',
        customCSS: {
            padding: 10,
            backgroundColor: '#ffffff',
            border: '1px solid pink',
            borderRadius: 4,
            '& > label': {
                textTransform: 'uppercase',
                marginLeft: 2,
                marginBottom: 2
            },
            '& > small': {
                marginTop: 4,
                marginLeft: 4
            }
        }
    }
};
