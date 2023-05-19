import PageNumButton from 'components/atoms/PageNumButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ATOMS/PageNumButton',
    component: PageNumButton,
    tags: ['autodocs'],
    argTypes: {
        pageNum: {
            control: 'number',
            description: 'pageNum',
            table: { category: 'REQUIRED', type: { summary: 'number' } }
        },
        isSelected: {
            control: 'boolean',
            description: '페이지 선택 여부',
            table: { category: 'REQUIRED', type: { summary: 'boolean' } }
        },
        onClick: {
            control: false,
            description: '페이지 이동',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
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
