/** @jsxImportSource @emotion/react */
import TableCaption from 'components/atoms/TableCaption';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Table/TableCaption',
    component: TableCaption,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: false,
            description: '컴포넌트 또는 텍스트',
            table: {
                category: 'required',
                type: { summary: 'string | React.ReactNode' }
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
} satisfies Meta<typeof TableCaption>;

export default meta;
type Story = StoryObj<typeof TableCaption>;

export const Default: Story = {
    args: {
        children: 'Caption Example',
        customCSS: {}
    }
};
