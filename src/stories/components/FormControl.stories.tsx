import { useState } from 'react';

import palette from 'styles/palette';

import FormControl from 'components/Form/FormControl';
import TextField from 'components/Form/TextField';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Form/FormControl',
    component: FormControl,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: false,
            description: '컴포넌트',
            table: { category: 'required', type: { summary: 'React.ReactNode' } }
        },
        id: {
            control: { type: 'text' },
            description: '[웹 접근성] id',
            table: {
                category: 'optional',
                defaultValue: { summary: 'input' },
                type: { summary: 'string' }
            }
        },
        helperTextId: {
            control: { type: 'text' },
            description: '[웹 접근성] helper text의 id',
            table: {
                category: 'optional',
                defaultValue: { summary: 'input-helper-text' },
                type: { summary: 'string' }
            }
        },
        label: {
            control: { type: 'text' },
            description: 'Label Text',
            table: {
                category: 'optional',
                defaultValue: { summary: '""' },
                type: { summary: 'string' }
            }
        },
        helperText: {
            control: { type: 'text' },
            description: 'Helper Text',
            table: {
                category: 'optional',
                defaultValue: { summary: '""' },
                type: { summary: 'string' }
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

export const FormControlTextField: Story = {
    ...FormControlTextFieldTemplate,
    args: {
        // eslint-disable-next-line react/jsx-no-useless-fragment
        children: <></>,
        id: 'name',
        helperText: 'I am a helper text',
        helperTextId: 'name-helper-text',
        label: 'name',
        customCSS: {
            padding: 10,
            backgroundColor: palette.neutral.white,
            border: `1px solid ${palette.tertiary['400']}`,
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
