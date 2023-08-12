import Button from '@molecules/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Molecules/Button/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: false,
            description: '컴포넌트',
            table: {
                category: 'required',
                type: { summary: 'React.ReactNode' }
            }
        },
        hasStartIcon: {
            control: { type: 'boolean' },
            description: 'Start Icon',
            table: {
                category: 'optional',
                type: { summary: 'boolean' }
            }
        },
        hasEndIcon: {
            control: { type: 'boolean' },
            description: 'End Icon',
            table: {
                category: 'optional',
                type: { summary: 'boolean' }
            }
        },
        icon: {
            control: false,
            description: '아이콘',
            table: {
                category: 'optional',
                type: { summary: 'React.ReactNode' }
            }
        },
        isDisabled: {
            control: { type: 'boolean' },
            description: '활성화여부',
            table: {
                category: 'optional',
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        type: {
            control: { type: 'inline-radio' },
            description: '버튼 타입',
            options: ['button', 'reset', 'submit'],
            table: {
                category: 'optional',
                defaultValue: { summary: 'button' },
                type: { summary: 'button | reset | submit' }
            }
        },
        variant: {
            control: { type: 'inline-radio' },
            description: '[CSS] 버튼 스타일',
            options: ['outlined', 'contained', 'text'],
            table: {
                category: 'optional',
                defaultValue: { summary: 'outlined' },
                type: { summary: 'outlined | contained | text' }
            }
        },
        size: {
            control: { type: 'inline-radio' },
            description: '[CSS] 버튼 크기',
            options: ['large', 'medium', 'small'],
            table: {
                category: 'optional',
                defaultValue: { summary: 'large' },
                type: { summary: 'large | medium | small' }
            }
        },
        onClick: {
            control: false,
            description: 'Click Event Handler',
            table: {
                category: 'optional',
                defaultValue: { summary: '() => {}' },
                type: { summary: '(e: React.MouseEvent<HTMLButtonElement>) => void' }
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => <Button {...args}>{args.children}</Button>,
    args: {
        children: '버튼',
        hasStartIcon: false,
        hasEndIcon: false,
        icon: null,
        type: 'button',
        size: 'large',
        variant: 'outlined',
        isDisabled: false,
        customCSS: {}
    }
};
