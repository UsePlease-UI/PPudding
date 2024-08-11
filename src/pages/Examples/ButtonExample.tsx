import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

import {
    BUTTON_LIST,
    ButtonExample as DefaultButtonExample,
    ChipExample,
    IconButtonExample,
    ToggleButtonExample
} from './Button';
import Heading from './Common/Heading';

export default function ButtonExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const [tab, setTab] = useState(BUTTON_LIST.findIndex((val) => val === component) + 1 || 1);

    return (
        <div className="flex flex-col gap-2.5">
            <Heading title="Button Playground" />
            <TabContainer>
                <Tab aria-label="button example tab" value={tab} onChange={setTab}>
                    <TabItem label="BUTTON" value={tab} index={1} />
                    <TabItem label="CHIP" value={tab} index={2} />
                    <TabItem label="ICON" value={tab} index={3} />
                    <TabItem label="TOGGLE" value={tab} index={4} />
                </Tab>
                <TabPanel index={1} value={tab}>
                    <DefaultButtonExample />
                </TabPanel>
                <TabPanel value={tab} index={2}>
                    <ChipExample />
                </TabPanel>
                <TabPanel index={3} value={tab}>
                    <IconButtonExample />
                </TabPanel>
                <TabPanel index={4} value={tab}>
                    <ToggleButtonExample />
                </TabPanel>
            </TabContainer>
        </div>
    );
}
