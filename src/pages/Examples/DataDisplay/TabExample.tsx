import { useState } from 'react';

import { HomeFilled } from '@fluentui/react-icons';

import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

const TabExample = () => {
    const [value, setValue] = useState(1);

    const handleTabChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <TabContainer>
            <Tab aria-label="navigation" value={value} onChange={handleTabChange}>
                <TabItem icon={<HomeFilled />} index={1} value={value} />
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
};

export default TabExample;
