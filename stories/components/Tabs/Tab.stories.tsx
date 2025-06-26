import { useState } from 'react';

import Tabs from '@components/Tabs';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: null,
  },
  argTypes: {
    children: {
      control: false,
      description: 'Tab Item',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Tabs.Tab,
  title: 'Tabs/UI - 2. Tab',
} satisfies Meta<typeof Tabs.Tab>;

export default meta;

type Story = StoryObj<typeof Tabs.Tab>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(1);

    const handleChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs value={value} onChange={handleChange}>
        <Tabs.Tab {...args} aria-label="탭 네비게이션">
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
