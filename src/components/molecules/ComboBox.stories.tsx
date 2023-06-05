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
        },
        id: {
            control: { type: 'string' },
            description: 'input id',
            table: { category: 'REQUIRED', type: { summary: 'React.ReactNode' } }
        },
        list: {
            control: { type: 'list' },
            description: 'optionData',
            table: { category: 'REQUIRED', type: { summary: 'list' } }
        },
        isAutoComplete: {
            control: { type: 'boolean' },
            description: 'AutoComplete인지 여부',
            table: { category: 'CUSTOM', type: { summary: 'boolean' } }
        }
    }
} satisfies Meta<typeof ComboBox>;

export default meta;
type Story = StoryObj<typeof ComboBox>;

const ComboBoxTemplate: Story = {
    render: (args) => {
        return <ComboBox {...args} icon={<ChevronDownIcon />} />;
    }
};

export const ComboBoxControl: Story = {
    ...ComboBoxTemplate,
    args: {
        icon: false,
        isAutoComplete: false
    }
};
