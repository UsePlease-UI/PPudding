import { useState } from 'react';

import { FlexBox } from '@components/Base';
import { ToggleButton, ToggleButtonGroup } from '@components/Button';

import useMobile from '@hooks/useMobile';

import { AccordionExample, CardExample, ListExample, PaginationExample, TabExample, TableExample } from './DataDisplay';
import Heading from '../Common/Heading';
import { customStyles } from '../styles';

const EXAMPLE_LIST = ['Accordion', 'Card', 'List', 'Pagination', 'Tab', 'Table'];

export default function DataDisplayExample() {
    const { isMobile, isTablet } = useMobile();

    const [selected, setSelected] = useState('Accordion');

    return (
        <FlexBox flexDirection="flex-col" gap="gap-10">
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
            {selected === 'Pagination' && <PaginationExample />}
            {selected === 'Tab' && <TabExample />}
            {selected === 'Table' && <TableExample />}
        </FlexBox>
    );
}
