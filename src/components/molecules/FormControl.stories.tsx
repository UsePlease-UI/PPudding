import { useState } from 'react';

import TextField from 'components/atoms/TextField';
import FormControl from 'components/molecules/FormControl';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MOLECULES/FormControl',
    component: FormControl,
    tags: ['autodocs'],
    argTypes: {
        id: {
            control: { type: 'text' },
            table: { category: 'Accessibility' }
        },
        helperTextId: {
            control: { type: 'text' },
            table: { category: 'Accessibility' }
        },
        label: {
            control: { type: 'text' },
            table: { category: 'Optional' }
        },
        helperText: {
            control: { type: 'text' },
            table: { category: 'Optional' }
        },
        customCSS: {
            control: { type: 'object' },
            table: { category: 'Style' }
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

const FormControlTemplate: Story = {
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
    ...FormControlTemplate,
    args: {
        id: 'textfield',
        helperText: 'I am a helper text',
        helperTextId: 'textfield-helper-text',
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
