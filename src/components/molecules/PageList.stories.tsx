import { useState } from 'react';

import PageList from 'components/molecules/PageList';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MOLECULES/PageList',
    component: PageList,
    tags: ['autodocs'],
    argTypes: {
        totalCount: {
            control: { type: 'number' },
            description: '전체 페이지 버튼 개수',
            table: { category: 'REQUIRED' }
        },
        page: {
            control: false,
            description: '현재 선택된 페이지',
            table: { category: 'REQUIRED' }
        },
        pageLimit: {
            control: { type: 'number' },
            description: '한 번에 보여줄 페이지의 최댓값',
            table: { category: 'REQUIRED' }
        },
        blockNum: {
            control: false,
            description: '페이지 순서 파악',
            table: { category: 'REQUIRED' }
        },
        onChange: {
            control: false,
            description: '페이지 이동',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        },
        handleFirstClick: {
            control: false,
            description: '맨 첫 페이지 이동',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        },
        handlePrevClick: {
            control: false,
            description: '이전 페이지 이동',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        },
        handleNextClick: {
            control: false,
            description: '다음 페이지 이동',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        },
        handleLastClick: {
            control: false,
            description: '맨 마지막 페이지 이동',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        },
        showFirstButton: {
            control: { type: 'boolean' },
            description: '맨 첫 페이지로 이동하는 버튼 노출 여부',
            table: { category: 'OPTIONAL' }
        },
        showLastButton: {
            control: { type: 'boolean' },
            description: '맨 마지막 페이지로 이동하는 버튼 노출 여부',
            table: { category: 'OPTIONAL' }
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

export const PaginationListControl: Story = {
    ...PaginationControlTemplate,
    args: {
        showFirstButton: true,
        showLastButton: true,
        totalCount: 10,
        pageLimit: 10,
        page: 1,
        blockNum: 1
    }
};
