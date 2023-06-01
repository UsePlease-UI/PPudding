import ComboBox from 'components/molecules/ComboBox';

import { ChevronDownIcon } from 'assets/icons';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'MOLECULES/Combobox',
    component: ComboBox,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: { type: 'boolean' },
            description: 'Icon',
            table: { category: 'Img File', type: { summary: 'React.ReactNode' } }
        }
    }
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof ComboBox>;

const PaginationControlTemplate: Story = {
    render: (args) => {
        return <ComboBox {...args} icon={<ChevronDownIcon />} />;
    }
};

export const PaginationControl: Story = {
    ...PaginationControlTemplate,
    args: {
        icon: false
    }
};
