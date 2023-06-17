import PageNumButton from '@atoms/PageNumButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Pagination/PageNumButton',
    component: PageNumButton,
    tags: ['autodocs'],
    argTypes: {
        pageNum: {
            type: { name: 'string', required: true },
            control: 'number',
            description: '페이지 번호',
            table: {
                category: 'required',
                type: { summary: 'number' }
            }
        },
        isSelected: {
            type: { name: 'string', required: true },
            control: 'boolean',
            description: '페이지 선택 여부',
            table: {
                category: 'required',
                type: { summary: 'boolean' }
            }
        },
        onClick: {
            type: { name: 'string', required: true },
            control: false,
            description: 'Click Event Handler',
            table: {
                category: 'required',
                type: { summary: '() => void' }
            }
        }
    }
} satisfies Meta<typeof PageNumButton>;

export default meta;
type Story = StoryObj<typeof PageNumButton>;

export const Default: Story = {
    render: (args) => {
        return <PageNumButton {...args} />;
    },
    args: {
        pageNum: 10,
        isSelected: false
    }
};
