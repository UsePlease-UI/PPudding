import { TextBoldFilled, TextItalicFilled } from '@fluentui/react-icons';

import { ToggleButton } from '@components/Button/ToggleButton';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Button/ToggleButton',
  component: ToggleButton,
  tags: ['autodocs'],
  parameters: {
    docs: {
      argTypes: { exclude: ['currentValue', 'onChange'] },
      controls: { exclude: ['currentValue', 'onChange'] },
    },
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const TextSelected: Story = {
  render: (args) => {
    return <ToggleButton {...args}>Banana</ToggleButton>;
  },
  args: {
    name: 'fruits',
    value: 'banana',
    currentValue: 'banana',
    disabled: true,
    size: 'large',
  },
};

export const TextNotSelected: Story = {
  render: (args) => {
    return <ToggleButton {...args}>Orange</ToggleButton>;
  },
  args: {
    name: 'fruits',
    value: 'orange',
    currentValue: 'banana',
    disabled: true,
    size: 'large',
  },
};

export const IconSelected: Story = {
  render: (args) => {
    return (
      <ToggleButton {...args}>
        <TextBoldFilled />
      </ToggleButton>
    );
  },
  args: {
    name: 'text',
    value: 'bold',
    currentValue: 'bold',
    disabled: true,
    size: 'large',
  },
};

export const IconNotSelected: Story = {
  render: (args) => {
    return (
      <ToggleButton {...args}>
        <TextItalicFilled />
      </ToggleButton>
    );
  },
  args: {
    name: 'text',
    value: 'italic',
    currentValue: 'bold',
    disabled: true,
    size: 'large',
  },
};
