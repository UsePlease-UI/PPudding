import { useState } from 'react';

import PageList from 'components/molecules/PageList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Pagination/PageList',
    component: PageList,
    tags: ['autodocs'],
    argTypes: {
        totalCount: {
            type: { name: 'string', required: true },
            control: { type: 'number' },
            description: '전체 페이지 버튼 개수',
            table: { category: 'required' }
        },
        page: {
            type: { name: 'string', required: true },
            control: false,
            description: '현재 선택된 페이지',
            table: { category: 'required' }
        },
        pageLimit: {
            type: { name: 'string', required: true },
            control: { type: 'number' },
            description: '한 번에 보여줄 페이지의 최댓값',
            table: { category: 'required' }
        },
        blockNum: {
            type: { name: 'string', required: true },
            control: false,
            description: '페이지 순서 파악',
            table: { category: 'required' }
        },
        onChange: {
            type: { name: 'string', required: true },
            control: false,
            description: '페이지 이동',
            table: {
                category: 'required',
                type: { summary: '(page: number, newBlockNum: number) => void' }
            }
        },
        handleFirstClick: {
            type: { name: 'string', required: true },
            control: false,
            description: '맨 첫 페이지 이동',
            table: {
                category: 'required',
                type: { summary: '() => void' }
            }
        },
        handlePrevClick: {
            type: { name: 'string', required: true },
            control: false,
            description: '이전 페이지 이동',
            table: {
                category: 'required',
                type: { summary: '() => void' }
            }
        },
        handleNextClick: {
            type: { name: 'string', required: true },
            control: false,
            description: '다음 페이지 이동',
            table: {
                category: 'required',
                type: { summary: '() => void' }
            }
        },
        handleLastClick: {
            type: { name: 'string', required: true },
            control: false,
            description: '맨 마지막 페이지 이동',
            table: {
                category: 'required',
                type: { summary: '() => void' }
            }
        },
        showFirstButton: {
            control: { type: 'boolean' },
            description: '맨 첫 페이지로 이동하는 버튼 노출 여부',
            table: { category: 'optional' }
        },
        showLastButton: {
            control: { type: 'boolean' },
            description: '맨 마지막 페이지로 이동하는 버튼 노출 여부',
            table: { category: 'optional' }
        }
    }
} satisfies Meta<typeof PageList>;

export default meta;
type Story = StoryObj<typeof PageList>;

const PaginationControlTemplate: Story = {
    render: (args) => {
        const [page, setPage] = useState(1);
        const [blockNum, setBlockNum] = useState(1);

        return (
            <PageList
                {...args}
                page={page}
                blockNum={blockNum}
                onChange={(newPage: number, newBlockNum: number) => {
                    setPage(newPage);
                    setBlockNum(newBlockNum);
                }}
                handleFirstClick={() => setPage(1)}
                handleLastClick={() => setPage(10)}
                handlePrevClick={() => setPage((prev) => prev - 1)}
                handleNextClick={() => setPage((prev) => prev + 1)}
            />
        );
    }
};

export const Default: Story = {
    ...PaginationControlTemplate,
    args: {
        page: 1,
        blockNum: 1,
        pageLimit: 10,
        totalCount: 10,
        showFirstButton: true,
        showLastButton: true
    }
};
