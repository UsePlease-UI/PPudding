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
    isDisabled: {
      control: 'boolean',
      description: 'if true, the component will be disabled',
      table: {
        category: 'optional',
      },
    },
    name: {
      control: 'text',
      description: 'name attribute of the input element',
      table: {
        category: 'optional',
        type: {
          summary: 'string',
        },
      },
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      description: 'toggle button size',
      options: ['large', 'medium', 'small'],
      table: {
        category: 'optional',
      },
    },
    value: {
      control: 'text',
      description: 'toggle button value',
      table: {
        category: 'optional',
        type: {
          summary: 'string',
        },
      },
    },
  },
  component: ToggleButton,
  parameters: {
    docs: {
      argTypes: {
        exclude: ['currentValue', 'onChange', 'isMultiple'],
        sort: 'requiredFirst',
      },
      controls: {
        exclude: ['currentValue', 'onChange', 'isMultiple'],
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Button/ToggleButton',
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof ToggleButton>;

export const TextSelected: Story = {
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

export const TextNotSelected: Story = {
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

export const IconSelected: Story = {
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

export const IconNotSelected: Story = {
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
