import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

import {
    BUTTON_LIST,
    ChipExample,
    ButtonExample as DefaultButtonExample,
    IconButtonExample,
    ToggleButtonExample,
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
                    <TabItem index={1} label="BUTTON" value={tab} />
                    <TabItem index={2} label="CHIP" value={tab} />
                    <TabItem index={3} label="ICON" value={tab} />
                    <TabItem index={4} label="TOGGLE" value={tab} />
                </Tab>
                <TabPanel index={1} value={tab}>
                    <DefaultButtonExample />
                </TabPanel>
                <TabPanel index={2} value={tab}>
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
