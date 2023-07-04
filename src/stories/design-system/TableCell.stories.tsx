/** @jsxImportSource @emotion/react */
import TableCell from '@atoms/TableCell';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Table/TableCell',
    component: TableCell,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            description: '컴포넌트 또는 텍스트',
            table: {
                category: 'required',
                type: { summary: 'string | React.ReactNode' }
            }
        },
        component: {
            type: { name: 'string', required: false },
            control: { type: 'inline-radio' },
            options: ['th', 'td'],
            description: 'th 또는 td',
            table: {
                category: 'optional',
                type: { summary: 'th | td' }
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
} satisfies Meta<typeof TableCell>;

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Default: Story = {
    args: {
        children: '컴포넌트 또는 string 값을 전달',
        component: 'th',
        customCSS: {}
    }
};
