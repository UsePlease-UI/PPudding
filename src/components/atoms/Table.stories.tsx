/** @jsxImportSource @emotion/react */
import Table from 'components/atoms/Table';
import TableBody from 'components/atoms/TableBody';
import TableCell from 'components/atoms/TableCell';
import TableHead from 'components/atoms/TableHead';
import TableRow from 'components/atoms/TableRow';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Table/Table',
    component: Table,
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
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
    render: (args) => (
        <Table {...args}>
            <TableHead>
                <TableRow>
                    <TableCell component="th">NO</TableCell>
                    <TableCell component="th">제품명</TableCell>
                    <TableCell component="th">브랜드명</TableCell>
                    <TableCell component="th">상품코드</TableCell>
                    <TableCell component="th">설명</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="center">1</TableCell>
                    <TableCell align="center">바나나</TableCell>
                    <TableCell align="center">바나나차차</TableCell>
                    <TableCell align="center">1010101010</TableCell>
                    <TableCell align="center">바나나나나나나나나나</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ),
    args: {
        customCSS: {}
    }
};
