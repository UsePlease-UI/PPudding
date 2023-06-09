import { useState } from 'react';

import Pagination from 'components/organisms/Pagination';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Organisms/Pagination/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        totalCount: {
            type: { name: 'string', required: true },
            control: { type: 'number' },
            description: '페이지 Total',
            table: { category: 'required' }
        },
        page: {
            type: { name: 'string', required: true },
            control: false,
            description: '선택된 페이지 번호',
            table: { category: 'required' }
        },
        blockNum: {
            type: { name: 'string', required: true },
            control: false,
            description: '선택된 페이지 range',
            table: { category: 'required' }
        },
        onChange: {
            type: { name: 'string', required: true },
            control: false,
            description: 'Change Event Handler',
            table: {
                category: 'required',
                type: { summary: 'onChange: (page: number, blockNum: number) => void' }
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
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationControlTemplate: Story = {
    render: (args) => {
        const [value, setValue] = useState(1);
        const [blockValue, setBlockValue] = useState(1);

        return (
            <Pagination
                {...args}
                page={value}
                blockNum={blockValue}
                onChange={(page: number, blockNum: number) => {
                    setValue(page);
                    setBlockValue(blockNum);
                }}
            />
        );
    }
};

export const Default: Story = {
    ...PaginationControlTemplate,
    args: {
        totalCount: 10,
        customCSS: {
            borderRadius: '10px'
        }
    }
};
