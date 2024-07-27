import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToggleButton, ToggleButtonGroup } from '@components/Button';

import useMobile from '@hooks/useMobile';

import Heading from './components/Heading';
import { customStyles } from './components/styles';
import {
    AccordionExample,
    CardExample,
    KPaginationExample,
    ListExample,
    PaginationExample,
    TabExample,
    TableExample
} from './DataDisplay';

const EXAMPLE_LIST = ['Accordion', 'Card', 'List', 'Pagination', 'Tab', 'Table'];

export default function DataDisplayExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const { isMobile, isTablet } = useMobile();

    const [selected, setSelected] = useState(component || 'Accordion');
    const [type, setType] = useState<'A' | 'K'>('A');

    return (
        <div className="flex flex-col gap-10">
            <Heading title="Data Display Playground" />
            <div className={customStyles.toggleContainer}>
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    {EXAMPLE_LIST.map((val) => (
                        <ToggleButton
                            key={val}
                            size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                            name="components"
                            value={val}
                        >
                            {val}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            {selected === 'Accordion' && <AccordionExample />}
            {selected === 'Card' && <CardExample />}
            {selected === 'List' && <ListExample />}
            {selected === 'Pagination' && (
                <div className="space-y-20">
                    <ToggleButtonGroup value={type} onChange={(e) => setType(e.currentTarget.value as typeof type)}>
                        <ToggleButton name="type" value="A" size="small">
                            A Type
                        </ToggleButton>
                        <ToggleButton name="type" value="K" size="small">
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
