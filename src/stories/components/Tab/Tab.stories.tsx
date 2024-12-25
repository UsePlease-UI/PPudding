import { useState } from 'react';

import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tab/Tab',
  component: Tab,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  render: function Render(args) {
    const [value, setValue] = useState(1);

    const handleChange = (newValue: number) => {
      setValue(newValue);
    };

    return (
      <TabContainer>
        <Tab {...args} aria-label="navigation" value={value} onChange={handleChange}>
          <TabItem index={1} label="1" value={value} />
          <TabItem index={2} label="2" value={value} />
          <TabItem index={3} label="3" value={value} />
        </Tab>
        <TabPanel index={1} value={value}>
          <p>Tab Panel #1</p>
        </TabPanel>
        <TabPanel index={2} value={value}>
          <p>Tab Panel #2</p>
        </TabPanel>
        <TabPanel index={3} value={value}>
          <p>Tab Panel #3</p>
        </TabPanel>
      </TabContainer>
    );
  },
  args: {
    value: 1,
  },
};
