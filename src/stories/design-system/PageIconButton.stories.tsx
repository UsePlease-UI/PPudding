import PageIconButton from '@atoms/PageIconButton';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Design System/Atoms/Pagination/PageIconButton',
    component: PageIconButton,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            type: { name: 'string', required: true },
            control: false,
            description: 'Icon',
            table: {
                category: 'required',
                type: { summary: 'React.ReactNode' }
            }
        },
        isDisabled: {
            type: { name: 'string', required: true },
            control: { type: 'boolean' },
            description: '활성화여부',
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
} satisfies Meta<typeof PageIconButton>;

export default meta;
type Story = StoryObj<typeof PageIconButton>;

export const Default: Story = {
    render: (args) => {
        // eslint-disable-next-line no-console
        return <PageIconButton {...args} icon={<ChevronLeftIcon />} onClick={() => console.log(1)} />;
    },
    args: {
        isDisabled: false
    }
};
