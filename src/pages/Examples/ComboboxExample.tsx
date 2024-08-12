import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToggleButton, ToggleButtonGroup } from '@components/Button';
import { Tab, TabContainer, TabItem, TabPanel } from '@components/Tab';

import { KAutocompleteExample, COMBOBOX_LIST, AAutocompleteExample, SelectExample } from './Combobox';
import Heading from './Common/Heading';

export default function ComboboxExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const [tab, setTab] = useState(COMBOBOX_LIST.findIndex((val) => val === component) + 1 || 1);
    const [type, setType] = useState<'A' | 'K'>('A');

    return (
        <div className="flex flex-col gap-2.5">
            <Heading title="Combobox Playground" />
            <TabContainer>
                <Tab aria-label="combobox tab" value={tab} onChange={setTab}>
                    <TabItem label="AUTOCOMPLETE" index={1} value={tab} />
                    <TabItem label="SELECT" index={2} value={tab} />
                </Tab>
                <TabPanel index={1} value={tab}>
                    <ToggleButtonGroup value={type} onChange={(e) => setType(e.currentTarget.value as typeof type)}>
                        <ToggleButton name="type" value="A" size="small">
                            A Type
                        </ToggleButton>
                        <ToggleButton name="type" value="K" size="small">
                            K Type
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {type === 'K' ? <KAutocompleteExample /> : <AAutocompleteExample />}
                </TabPanel>
                <TabPanel index={2} value={tab}>
                    <SelectExample />
                </TabPanel>
            </TabContainer>
        </div>
    );
}
