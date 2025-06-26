import { BoldIcon, ItalicIcon } from '@heroicons/react/24/solid';

import ToggleButton from '@components/Button/ToggleButton';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    isDisabled: false,
    size: 'large',
    value: 'bold',
  },
  argTypes: {
    currentValue: { table: { disable: true } },
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
    },
    isMultiple: { table: { disable: true } },
    name: {
      control: 'text',
      description: 'name attribute of the input element',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    onChange: { table: { disable: true } },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'toggle button size',
      options: ['large', 'medium', 'small'],
    },
    value: {
      control: 'text',
      description: 'toggle button value',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  component: ToggleButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Button/ToggleButton/UI - 2. ToggleButton',
} satisfies Meta<typeof ToggleButton>;

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Example1TextSelected: Story = {
  args: {
    size: 'large',
    value: 'banana',
  },
  render: function Render(args) {
    return (
      <ToggleButton currentValue="banana" {...args}>
        Banana
      </ToggleButton>
    );
  },
};

export const Example2TextNotSelected: Story = {
  args: {
    size: 'large',
    value: 'orange',
  },
  render: function Render(args) {
    return (
      <ToggleButton currentValue="banana" {...args}>
        Orange
      </ToggleButton>
    );
  },
};

export const Example3IconSelected: Story = {
  args: {
    size: 'large',
    value: 'bold',
  },
  render: function Render(args) {
    return (
      <ToggleButton aria-label="bold" currentValue="bold" {...args}>
        <BoldIcon />
      </ToggleButton>
    );
  },
};

export const Example4IconNotSelected: Story = {
  args: {
    size: 'large',
    value: 'italic',
  },
  render: function Render(args) {
    return (
      <ToggleButton aria-label="italic" currentValue="bold" {...args}>
        <ItalicIcon />
      </ToggleButton>
    );
  },
};
