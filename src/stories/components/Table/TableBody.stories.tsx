/** @jsxImportSource @emotion/react */
import TableBody from 'components/Table/TableBody';
import TableCell from 'components/Table/TableCell';
import TableRow from 'components/Table/TableRow';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Table/TableBody',
    component: TableBody,
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
} satisfies Meta<typeof TableBody>;

export default meta;
type Story = StoryObj<typeof TableBody>;

export const Default: Story = {
    args: {
        children: (
            <TableRow>
                <TableCell>1</TableCell>
                <TableCell>바나나</TableCell>
                <TableCell>바나나차차</TableCell>
                <TableCell>1010101010</TableCell>
                <TableCell>바나나나나나나나나나</TableCell>
            </TableRow>
        ),
        customCSS: {}
    }
};
