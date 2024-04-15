import Button from '@components/Button/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Button/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: (args) => <Button {...args}>{args.children}</Button>,
    args: {
        children: '버튼',
        hasStartIcon: false,
        hasEndIcon: false,
        icon: null,
        type: 'button',
        size: 'large',
        variant: 'outlined',
        isDisabled: false
    }
};
