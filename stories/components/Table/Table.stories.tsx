import Table from 'components/Table';

import { TABLE_DATA } from '../constants';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {
    children: { table: { disable: true } },
  },
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Table/Table',
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: function Render(args) {
    return (
      <Table {...args}>
        <Table.Head>
          <Table.Row>
            <Table.Cell component="th">NO</Table.Cell>
            <Table.Cell component="th">제품명</Table.Cell>
            <Table.Cell component="th">브랜드명</Table.Cell>
            <Table.Cell component="th">상품코드</Table.Cell>
            <Table.Cell component="th">설명</Table.Cell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {TABLE_DATA.map((data, idx) => (
            <Table.Row key={idx}>
              <Table.Cell align="center">{idx + 1}</Table.Cell>
              <Table.Cell align="center">{data.productName}</Table.Cell>
              <Table.Cell align="center">{data.brand}</Table.Cell>
              <Table.Cell align="center">{data.productCode}</Table.Cell>
              <Table.Cell align="center">{data.description}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    );
  },
};
