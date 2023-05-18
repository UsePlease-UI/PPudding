import PageIconButton from 'components/atoms/PageIconButton';

import { PageFirstIcon } from 'assets/icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'ATOMS/PageIconButton',
    component: PageIconButton,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: false,
            description: 'Icon',
            table: { category: 'REQUIRED', type: { summary: 'React.ReactNode' } }
        },
        isDisabled: {
            control: { type: 'boolean' },
            description: '활성화여부',
            table: { category: 'REQUIRED', type: { summary: 'boolean' } }
        },
        onClick: {
            control: false,
            description: 'click event handler',
            table: { category: 'REQUIRED', type: { summary: 'function' } }
        }
    }
} satisfies Meta<typeof PageIconButton>;

export default meta;
type Story = StoryObj<typeof PageIconButton>;

export const Default: Story = {
    render: (args) => {
        // eslint-disable-next-line no-console
        return <PageIconButton {...args} icon={<PageFirstIcon />} onClick={() => console.log(1)} />;
    },
    args: {
        isDisabled: false
    }
};
