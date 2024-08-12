import { useState } from 'react';

import { TabContainer, Tab, TabItem, TabPanel } from '@components/Tab';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Tab/Tab',
    component: Tab,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    argTypes: {}
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof Tab>;

export const Default: Story = {
    render: (args) => {
        const [value, setValue] = useState(1);

        const handleChange = (newValue: number) => {
            setValue(newValue);
        };

        return (
            <TabContainer>
                <Tab {...args} aria-label="navigation" value={value} onChange={handleChange}>
                    <TabItem label="1" value={value} index={1} />
                    <TabItem label="2" value={value} index={2} />
                    <TabItem label="3" value={value} index={3} />
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
        value: 1
    }
};
