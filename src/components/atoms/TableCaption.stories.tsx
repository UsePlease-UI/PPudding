/** @jsxImportSource @emotion/react */
import TableCaption from 'components/atoms/TableCaption';
import TableCell from 'components/atoms/TableCell';
import TableRow from 'components/atoms/TableRow';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ATOMS/TableCaption',
    component: TableCaption,
    tags: ['autodocs'],
    argTypes: {
        children: {
            type: { name: 'string', required: true },
            control: false,
            description: '컴포넌트 또는 텍스트',
            table: { category: 'required', type: { summary: 'string | React.ReactNode' } }
        },
        customCSS: {
            control: { type: 'object' },
            description: 'Custom CSS',
            table: { category: 'style', defaultValue: { summary: '{}' }, type: { summary: 'CSSInterpolation' } }
        }
    }
} satisfies Meta<typeof TableCaption>;

export default meta;
type Story = StoryObj<typeof TableCaption>;

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
