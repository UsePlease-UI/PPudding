import { Fragment, useState } from 'react';

import { ChevronDownFilled, ChevronUpFilled } from '@fluentui/react-icons';

import List from '@components/List';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'List/List',
  component: List,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof List>;

export const DefaultList: Story = {
  render: () => (
    <List>
      {Array.from({ length: 10 }, (_, idx) => (
        <List.Item key={idx} isDense>
          <List.ItemText primaryText="Lorem Ipsum" secondaryText="This is secondary text." />
        </List.Item>
      ))}
    </List>
  ),
  args: {},
};

export const CollapsedList: Story = {
  render: () => {
    const [open, setOpen] = useState<Record<string, boolean>>({
      schedule: true,
      mail: false,
      folder: false,
    });

    return (
      <List hasDivider>
        {['schedule', 'mail', 'folder'].map((val) => (
          <Fragment key={val}>
            <List.ItemButton isDense onClick={() => setOpen((prev) => ({ ...prev, [val]: !prev[val] }))}>
              <List.ItemText primaryText="Expandable List" secondaryText="Click here to see more" />
              <List.ItemIcon>{open[val] ? <ChevronUpFilled /> : <ChevronDownFilled />}</List.ItemIcon>
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
  args: {},
};
