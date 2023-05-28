/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import TabItem from 'components/atoms/TabItem';
import TabPanel from 'components/atoms/TabPanel';
import Tab from 'components/molecules/Tab';

import { css } from '@emotion/react';
import { ChevronDownIcon } from 'assets/icons';

const tabStyle = css({
    width: '100%',
    minWidth: 1024,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    border: '1px solid #eeeeee',
    overflow: 'hidden',
    boxShadow: '0 0 8px 0px #eeeeee'
});

// WAI-ARIA : https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
export default function TabExample() {
    const [value, setValue] = useState(1);

    const handleChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <div css={tabStyle}>
            <Tab aria-label="navigation" value={value} onChange={handleChange}>
                <TabItem icon={<ChevronDownIcon />} label="1" value={value} index={1} />
                <TabItem label="2" value={value} index={2} />
                <TabItem label="3" value={value} index={3} />
            </Tab>
            <TabPanel value={value} index={1}>
                <p>Tab Panel #1</p>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <p>Tab Panel #2</p>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <p>Tab Panel #3</p>
            </TabPanel>
        </div>
    );
}
