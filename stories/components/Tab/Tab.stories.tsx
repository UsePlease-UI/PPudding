// TODO: https://github.com/storybookjs/storybook/issues/29189 해결되면 수정
import { useState } from 'storybook/preview-api';

import Tabs from '@components/Tabs';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {
    children: { table: { disable: true } },
  },
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Tabs/Tabs',
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(1);

    const handleChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
      <Tabs className="min-w-192">
        <Tabs.Tab {...args} aria-label="탭 네비게이션" value={value} onChange={handleChange}>
          <Tabs.Item index={1} label="1" value={value} />
          <Tabs.Item index={2} label="2" value={value} />
          <Tabs.Item index={3} label="3" value={value} />
        </Tabs.Tab>
        <Tabs.Panel index={1} value={value}>
          <p>Tab Panel #1</p>
        </Tabs.Panel>
        <Tabs.Panel index={2} value={value}>
          <p>Tab Panel #2</p>
        </Tabs.Panel>
        <Tabs.Panel index={3} value={value}>
          <p>Tab Panel #3</p>
        </Tabs.Panel>
      </Tabs>
    );
  },
};
