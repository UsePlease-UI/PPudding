import { useState } from 'react';

import Textarea from '@components/Form/Textarea';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Form/Textarea',
    component: Textarea,
    tags: ['autodocs'],
    argTypes: {}
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        return <Textarea {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
    },
    args: {
        placeholder: 'Lorem Ipsum...',
        maxLength: 100,
        isAutoHeight: true
    }
};

export const AutoHeight: Story = {
    render: (args) => {
        const [value, setValue] = useState(
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et iaculis massa, a accumsan ex. In sed velit sagittis, faucibus odio nec, egestas ante. Phasellus aliquet dui a turpis consectetur, a commodo ipsum accumsan. Pellentesque eget est quis dui pellentesque sodales. Donec dictum elit et accumsan posuere. Aliquam pharetra congue sapien. Morbi porttitor dui tortor, ut porttitor neque maximus eu. Duis eu velit ac diam interdum dapibus. Mauris tristique nisl libero, sed porta nisi aliquet vel. Cras hendrerit libero lectus, sed malesuada lacus tempor nec. Nam eget sagittis sem.'
        );
        return <Textarea {...args} value={value} onChange={(e) => setValue(e.currentTarget.value)} />;
    },
    args: {
        labelText: 'Lorem Ipsum',
        helperText: 'Type Lorem Ipsum',
        placeholder: 'Lorem Ipsum...',
        maxLength: 2000,
        isAutoHeight: true
    }
};
