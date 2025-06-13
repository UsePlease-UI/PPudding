import { useEffect, useState } from 'react';

import Tabs from '@components/Tabs';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    children: null,
    className: '',
    index: 1,
  },
  argTypes: {
    children: {
      control: false,
      description: 'content of component',
      table: {
        category: 'required',
        type: {
          summary: 'ReactNode',
        },
      },
    },
    className: {
      control: false,
      description: 'custom className',
      table: {
        category: 'optional',
        type: {
          summary: 'string',
        },
      },
    },
    index: {
      control: {
        min: 4,
        type: 'number',
      },
      description: 'tab panel index. associated tab item should have the same index',
      table: {
        category: 'required',
        type: {
          summary: 'number',
        },
      },
    },
  },
  component: Tabs.Panel,
  title: 'Tabs/Tabs.Panel',
} satisfies Meta<typeof Tabs.Panel>;

export default meta;

type Story = StoryObj<typeof Tabs.Panel>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(1);

    const handleChange = (newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
      if (args.index) {
        setValue(args.index);
      }
    }, [args.index]);

    return (
      <Tabs value={value} onChange={handleChange}>
        <Tabs.Tab aria-label="탭 네비게이션">
          <Tabs.Item index={args.index} label={String(args.index)} />
          <Tabs.Item index={2} label="2" />
          <Tabs.Item index={3} label="3" />
        </Tabs.Tab>
        <Tabs.Panel index={args.index}>
          <p>Tab Panel #{args.index}</p>
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
