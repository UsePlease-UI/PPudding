import { Fragment, useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

import List from '@components/List';

import type { Meta, StoryObj } from '@storybook/react-vite';

const meta = {
  argTypes: {
    children: { table: { disable: true } },
    hasDivider: { table: { disable: true } },
  },
  component: List,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'List/List',
} satisfies Meta<typeof List>;

export default meta;

type Story = StoryObj<typeof List>;

export const Example1Default: Story = {
  args: {},
  render: function Render() {
    return (
      <List>
        {Array.from({ length: 10 }, (_, idx) => (
          <List.Item key={idx} isDense>
            <List.ItemText primaryText="Lorem Ipsum" secondaryText="This is secondary text." />
          </List.Item>
        ))}
      </List>
    );
  },
};

export const Example2CollapsedList: Story = {
  args: {},
  render: function Render() {
    const [open, setOpen] = useState<Record<string, boolean>>({
      folder: false,
      mail: false,
      schedule: true,
    });

    return (
      <List hasDivider>
        {['schedule', 'mail', 'folder'].map((val) => (
          <Fragment key={val}>
            <List.ItemButton isDense onClick={() => setOpen((prev) => ({ ...prev, [val]: !prev[val] }))}>
              <List.ItemText primaryText="Expandable List" secondaryText="Click here to see more" />
              <List.ItemIcon>{open[val] ? <ChevronUpIcon /> : <ChevronDownIcon />}</List.ItemIcon>
            </List.ItemButton>
            <List.Collapse isOpen={open[val]}>
              <List.CollapsedList hasDivider isDense>
                <List.Item>
                  <List.ItemText primaryText="Hello" />
                </List.Item>
                <List.Item>
                  <List.ItemText primaryText="Good morning" />
                </List.Item>
              </List.CollapsedList>
            </List.Collapse>
          </Fragment>
        ))}
      </List>
    );
  },
};
