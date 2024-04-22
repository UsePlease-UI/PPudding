import { useState } from 'react';

import { Typography } from '@components/Base';
import { TabContainer, Tab, TabItem, TabPanel } from '@components/Tab';

import { HomeFilled } from '@fluentui/react-icons';

const TabExample = () => {
    const [value, setValue] = useState(1);

    const handleTabChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <TabContainer>
            <Tab aria-label="navigation" value={value} onChange={handleTabChange}>
                <TabItem icon={<HomeFilled />} value={value} index={1} />
                <TabItem label="2" value={value} index={2} />
                <TabItem label="3" value={value} index={3} />
            </Tab>
            <TabPanel value={value} index={1}>
                <Typography component="p">Tab Panel #1</Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography component="p">Tab Panel #2</Typography>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Typography component="p">Tab Panel #3</Typography>
            </TabPanel>
        </TabContainer>
    );
};

export default TabExample;
