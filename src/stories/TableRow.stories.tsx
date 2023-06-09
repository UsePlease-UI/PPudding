/** @jsxImportSource @emotion/react */
import TableCell from 'components/atoms/TableCell';
import TableRow from 'components/atoms/TableRow';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Table/TableRow',
    component: TableRow,
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
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof TableRow>;

export const Default: Story = {
    args: {
        children: <TableCell>NO</TableCell>,
        customCSS: {}
    }
};
