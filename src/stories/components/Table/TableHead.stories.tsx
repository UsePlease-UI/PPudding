/** @jsxImportSource @emotion/react */
import TableCell from 'components/Table/TableCell';
import TableHead from 'components/Table/TableHead';
import TableRow from 'components/Table/TableRow';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Table/TableHead',
    component: TableHead,
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
} satisfies Meta<typeof TableHead>;

export default meta;
type Story = StoryObj<typeof TableHead>;

export const Default: Story = {
    args: {
        children: (
            <TableRow>
                <TableCell component="th">NO</TableCell>
                <TableCell component="th">제품명</TableCell>
                <TableCell component="th">브랜드명</TableCell>
                <TableCell component="th">상품코드</TableCell>
                <TableCell component="th">설명</TableCell>
            </TableRow>
        ),
        customCSS: {}
    }
};
