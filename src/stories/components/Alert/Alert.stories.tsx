import Alert from '@components/Alert';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Alert/Alert',
    component: Alert,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
    args: {
        children: '게시물이 등록되었습니다.',
        options: {
            canDismiss: false,
            variant: 'default',
            delay: 6000
        }
    }
};

export const Success: Story = {
    args: {
        children: '게시물이 등록되었습니다.',
        options: {
            variant: 'success',
            delay: 6000
        }
    }
};

export const Info: Story = {
    args: {
        children: '게시물이 등록되었습니다.',
        options: {
            variant: 'info',
            delay: 6000
        }
    }
};

export const Warning: Story = {
    args: {
        children: '게시물이 등록되었습니다.',
        options: {
            variant: 'warning',
            delay: 6000
        }
    }
};

export const Error: Story = {
    args: {
        children: `문제가 발생하였습니다.\n잠시 후 다시 시도해 주세요.`,
        options: {
            variant: 'error',
            delay: 6000
        }
    }
};
