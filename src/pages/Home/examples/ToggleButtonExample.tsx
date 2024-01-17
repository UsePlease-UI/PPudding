import { useState } from 'react';

import { ToggleButton, ToggleButtonGroup } from 'components/Button/ToggleButton';

export default function ToggleButtonExample() {
    const [fruits, setFruits] = useState('banana');

    return (
        <ToggleButtonGroup
            value={fruits}
            onChange={(e) => setFruits(e.currentTarget.value)}
            customCSS={{ margin: '20px 0' }}
        >
            <ToggleButton name="fruits" value="apple" onChange={(e) => setFruits(e.currentTarget.value)}>
                Apple
            </ToggleButton>
            <ToggleButton name="fruits" value="banana" onChange={(e) => setFruits(e.currentTarget.value)}>
                Banana
            </ToggleButton>
            <ToggleButton name="fruits" value="orange" onChange={(e) => setFruits(e.currentTarget.value)}>
                Orange
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
