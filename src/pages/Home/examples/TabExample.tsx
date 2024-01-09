/** @jsxImportSource @emotion/react */
import { useState } from 'react';

import { css } from '@emotion/react';
import { HomeIcon } from '@heroicons/react/24/outline';
import palette from 'styles/palette';

import Typography from 'components/Base/Typography';
import Tab from 'components/Tab/Tab';
import TabItem from 'components/Tab/TabItem';
import TabPanel from 'components/Tab/TabPanel';

const tabStyle = css({
    margin: '20px 0',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 10,
    border: `1px solid ${palette.gray[100]}`,
    overflow: 'hidden',
    boxShadow: `0 0 8px 0px ${palette.gray[100]}`
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
                <TabItem icon={<HomeIcon />} label="1" value={value} index={1} />
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
        </div>
    );
}
