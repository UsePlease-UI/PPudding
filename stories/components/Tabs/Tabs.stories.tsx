import { useEffect, useState } from 'react';

import { fn } from 'storybook/internal/test';

import Tabs from '@components/Tabs';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: null,
    onChange: fn(),
    value: 1,
  },
  argTypes: {
    children: {
      control: false,
      description: 'Tab Item & Tab Panel',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    onChange: {
      control: false,
      description: 'callback fired when tab button is clicked',
      table: {
        type: {
          summary: '(newValue: number) => void',
        },
      },
    },
    value: {
      control: 'number',
      description: 'selected tab index',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
  },
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tabs/UI - 1. Tabs',
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(1);

    const handleChange = (newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
      if (args.value) {
        setValue(args.value);
      }
    }, [args.value]);

    return (
      <Tabs {...args} className="min-w-192" value={value} onChange={handleChange}>
        <Tabs.Tab aria-label="탭 네비게이션">
          <Tabs.Item index={1} label="1" />
          <Tabs.Item index={2} label="2" />
          <Tabs.Item index={3} label="3" />
        </Tabs.Tab>
        <Tabs.Panel index={1}>
          <p>Tab Panel #1</p>
        </Tabs.Panel>
        <Tabs.Panel index={2}>
          <p>Tab Panel #2</p>
        </Tabs.Panel>
        <Tabs.Panel index={3}>
          <p>Tab Panel #3</p>
        </Tabs.Panel>
      </Tabs>
    );
  },
};
