import Button from 'components/atoms/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ATOMS/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: false,
            description: '컴포넌트',
            table: { category: 'required', type: { summary: 'React.ReactNode' } }
        },
        hasStartIcon: {
            control: { type: 'boolean' },
            description: 'Start Icon',
            table: { category: 'Icon', type: { summary: 'boolean' } }
        },
        hasEndIcon: {
            control: { type: 'boolean' },
            description: 'End Icon',
            table: { category: 'Icon', type: { summary: 'boolean' } }
        },
        icon: {
            control: false,
            description: '아이콘',
            table: { category: 'Icon', type: { summary: 'React.ReactNode' } }
        },
        isDisabled: {
            control: { type: 'boolean' },
            description: '활성화여부',
            table: { category: 'States', defaultValue: { summary: false }, type: { summary: 'boolean' } }
        },
        type: {
            control: { type: 'inline-radio' },
            description: '버튼 타입',
            options: ['button', 'reset', 'submit'],
            table: {
                category: 'Button Attributes',
                defaultValue: { summary: 'button' },
                type: { summary: 'button | reset | submit' }
            }
        },
        variant: {
            control: { type: 'inline-radio' },
            description: '[CSS] 버튼 스타일',
            options: ['outlined', 'contained', 'text'],
            table: {
                category: 'Style',
                defaultValue: { summary: 'outlined' },
                type: { summary: 'outlined | contained | text' }
            }
        },
        size: {
            control: { type: 'inline-radio' },
            description: '[CSS] 버튼 크기',
            options: ['large', 'medium', 'small'],
            table: {
                category: 'Style',
                defaultValue: { summary: 'large' },
                type: { summary: 'large | medium | small' }
            }
        },
        onClick: {
            control: false,
            description: 'Click Event Handler',
            table: { category: 'function', defaultValue: { summary: '() => {}' }, type: { summary: 'function' } }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: { category: 'Style', defaultValue: { summary: '{}' }, type: { summary: 'CSSInterpolation' } }
        }
    }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => <Button {...args}>버튼</Button>,
    args: {
        children: <>버튼</>, // arg 순서를 위해서
        type: 'button',
        isDisabled: false,
        hasStartIcon: false,
        hasEndIcon: false,
        size: 'large',
        variant: 'outlined',
        customCSS: {}
    }
};
