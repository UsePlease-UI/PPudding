import { fn } from 'storybook/test';

import { BoldIcon, ItalicIcon, UnderlineIcon } from '@heroicons/react/24/solid';

import ToggleButton from '@components/Button/ToggleButton';

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
        type: {
          summary: 'ReactNode',
        },
      },
    },
    onClick: {
      control: false,
      description: 'click event handler',
      table: {
        type: {
          summary: '(selected: string) => void',
        },
      },
    },
    value: {
      control: 'object',
      description: 'selected value (need to pass string array to allow multiple selection)',
      table: {
        type: {
          summary: 'string | string[]',
        },
      },
    },
  },
  component: ToggleButton.Group,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Button/ToggleButton/UI - 1. Toggle Button Group',
} satisfies Meta<typeof ToggleButton.Group>;

export default meta;

type Story = StoryObj<typeof ToggleButton.Group>;

export const Example1Default: Story = {
  args: {
    value: 'banana',
  },
  render: function Render(args) {
    return (
      <ToggleButton.Group {...args}>
        <ToggleButton value="banana">Banana</ToggleButton>
        <ToggleButton value="orange">Orange</ToggleButton>
      </ToggleButton.Group>
    );
  },
};

export const Example2MultiSelection: Story = {
  args: { value: ['bold', 'italic'] },
  render: function Render(args) {
    return (
      <ToggleButton.Group {...args}>
        <ToggleButton aria-label="bold" value="bold">
          <BoldIcon />
        </ToggleButton>
        <ToggleButton aria-label="italic" value="italic">
          <ItalicIcon />
        </ToggleButton>
        <ToggleButton aria-label="underline" value="underline">
          <UnderlineIcon />
        </ToggleButton>
      </ToggleButton.Group>
    );
  },
};
