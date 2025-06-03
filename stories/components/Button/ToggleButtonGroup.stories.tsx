import { fn } from 'storybook/test';

import { BoldIcon, ItalicIcon, UnderlineIcon } from '@heroicons/react/24/solid';

import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: null,
    onClick: fn(),
    value: 'banana',
  },
  argTypes: {
    children: {
      control: false,
      description: 'content of the component (toggle button)',
      table: {
        category: 'required',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    onClick: {
      control: false,
      description: 'click event handler',
      table: {
        category: 'optional',
        type: {
          summary: '(selected: string) => void',
        },
      },
    },
    value: {
      control: 'object',
      description: 'selected value (need to pass string array to allow multiple selection)',
      table: {
        category: 'optional',
        type: {
          summary: 'string | string[]',
        },
      },
    },
  },
  component: ToggleButtonGroup,
  parameters: {
    docs: {
      argTypes: {
        sort: 'requiredFirst',
      },
    },
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Button/ToggleButtonGroup',
} satisfies Meta<typeof ToggleButtonGroup>;

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
  args: {
    value: 'banana',
  },
  render: function Render(args) {
    return (
      <ToggleButtonGroup {...args}>
        <ToggleButton value="banana">Banana</ToggleButton>
        <ToggleButton value="orange">Orange</ToggleButton>
      </ToggleButtonGroup>
    );
  },
};

export const MultiSelection: Story = {
  args: { value: ['bold', 'italic'] },
  render: function Render(args) {
    return (
      <ToggleButtonGroup {...args}>
        <ToggleButton aria-label="bold" value="bold">
          <BoldIcon />
        </ToggleButton>
        <ToggleButton aria-label="italic" value="italic">
          <ItalicIcon />
        </ToggleButton>
        <ToggleButton aria-label="underline" value="underline">
          <UnderlineIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    );
  },
};
