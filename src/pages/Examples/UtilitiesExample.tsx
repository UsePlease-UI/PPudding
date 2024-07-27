import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { ToggleButton, ToggleButtonGroup } from '@components/Button';

import useMobile from '@hooks/useMobile';

import Heading from './components/Heading';
import { customStyles } from './components/styles';
import { CalenderExample, DragNDropExample, PopoverExample } from './Utilities';

export default function UtilitiesExample() {
    const [searchParams] = useSearchParams();
    const component = searchParams.get('component');

    const { isMobile, isTablet } = useMobile();

    const [selected, setSelected] = useState(component || 'Popover');

    return (
        <div className="flex flex-col gap-10">
            <Heading title="Utilities Playground" />
            <div className={customStyles.toggleContainer}>
                <ToggleButtonGroup value={selected} onChange={(e) => setSelected(e.currentTarget.value)}>
                    {['Calendar', 'Drag N Drop', 'Popover'].map((component) => (
                        <ToggleButton
                            key={component}
                            size={isMobile ? 'small' : isTablet ? 'medium' : 'large'}
                            name="components"
                            value={component}
                        >
                            {component}
                        </ToggleButton>
                    ))}
                </ToggleButtonGroup>
            </div>
            {selected === 'Popover' && <PopoverExample />}
            {selected === 'Calendar' && <CalenderExample />}
            {selected === 'Drag N Drop' && <DragNDropExample />}
        </div>
    );
}
