import Chip from '@components/Button/Chip';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Chip> = {
    title: 'Button/Chip',
    component: Chip,
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Chip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Default: Story = {
    args: {
        label: '사탕',
        value: 'candy',
        variant: 'outlined',
        isDeletable: false
    }
};

export const Deletable: Story = {
    args: {
        label: '사탕',
        value: 'candy',
        variant: 'outlined',
        isDeletable: true,
        // eslint-disable-next-line no-console
        onDelete: (value) => console.log(value)
    }
};
