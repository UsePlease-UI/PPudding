import { useEffect, useState } from 'react';

import Tabs from '@components/Tabs';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  args: {
    className: '',
    icon: null,
    index: 1,
    label: '1',
  },
  argTypes: {
    className: {
      control: false,
      description: 'custom className',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    icon: {
      control: false,
      description: 'custom icon (svg element)',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
    index: {
      control: {
        min: 4,
        type: 'number',
      },
      description: 'tab item index. associated tab panel should have the same index',
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    label: {
      control: 'text',
      description: 'content of the component',
      table: {
        type: {
          summary: 'ReactNode',
        },
      },
    },
  },
  component: Tabs.Item,
  tags: ['autodocs'],
  title: 'Tabs/UI - 3. Tab Item',
} satisfies Meta<typeof Tabs.Item>;

export default meta;

type Story = StoryObj<typeof Tabs.Item>;

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
          <Tabs.Item index={args.index} label={args.label} />
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
