import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';

import { Heading, Toggle } from './Common';
import {
    AccordionExample,
    CardExample,
    DATA_DISPLAY_LIST,
    KPaginationExample,
    ListExample,
    PaginationExample,
    TabExample,
    TableExample,
} from './DataDisplay';

export default function DataDisplayExample() {
    const [searchParams] = useSearchParams();
    const [selected, setSelected] = useState(searchParams.get('component') || 'Accordion');

    const [type, setType] = useState<'A' | 'K'>('A');

    return (
        <div className="flex flex-col gap-2.5">
            <Heading title="Data Display Playground" />
            <Toggle options={DATA_DISPLAY_LIST} selected={selected} onChange={setSelected} />
            {selected === 'Accordion' && <AccordionExample />}
            {selected === 'Card' && <CardExample />}
            {selected === 'List' && <ListExample />}
            {selected === 'Pagination' && (
                <div className="space-y-5">
                    <ToggleButtonGroup value={type} onChange={(e) => setType(e.currentTarget.value as typeof type)}>
                        <ToggleButton name="type" size="small" value="A">
                            A Type
                        </ToggleButton>
                        <ToggleButton name="type" size="small" value="K">
                            K Type
                        </ToggleButton>
                    </ToggleButtonGroup>
                    {type === 'A' ? <PaginationExample /> : <KPaginationExample />}
                </div>
            )}
            {selected === 'Tab' && <TabExample />}
            {selected === 'Table' && <TableExample />}
        </div>
    );
}
