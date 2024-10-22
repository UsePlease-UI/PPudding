import { Table, TableBody, TableCell, TableHead, TableRow } from 'components/Table';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Table/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
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
        {Array.from({ length: 20 }, (_, idx) => (
          <TableRow key={idx}>
            <TableCell align="center">{idx + 1}</TableCell>
            <TableCell align="center">바나나</TableCell>
            <TableCell align="center">바나나차차</TableCell>
            <TableCell align="center">1010101010</TableCell>
            <TableCell align="center">바나나나나나나나나나</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  ),
};
