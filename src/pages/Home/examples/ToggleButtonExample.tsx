import { useState } from 'react';

import { FlexBox } from 'components/Base';
import { ToggleButton, ToggleButtonGroup } from 'components/Button/ToggleButton';
import { SizeType } from 'components/Button/ToggleButton/styles';

export default function ToggleButtonExample() {
    const [fruits, setFruits] = useState('banana');

    return (
        <FlexBox flexDirection="column" gap={20} customCSS={{ margin: '20px 0' }}>
            {['mini', 'small', 'medium', 'large'].map((size) => (
                <ToggleButtonGroup value={fruits} onChange={(e) => setFruits(e.currentTarget.value)}>
                    <ToggleButton
                        size={size as SizeType}
                        name="fruits"
                        value="apple"
                        onChange={(e) => setFruits(e.currentTarget.value)}
                    >
                        Apple
                    </ToggleButton>
                    <ToggleButton
                        size={size as SizeType}
                        name="fruits"
                        value="banana"
                        onChange={(e) => setFruits(e.currentTarget.value)}
                    >
                        Banana
                    </ToggleButton>
                    <ToggleButton
                        size={size as SizeType}
                        name="fruits"
                        value="orange"
                        onChange={(e) => setFruits(e.currentTarget.value)}
                    >
                        Orange
                    </ToggleButton>
                </ToggleButtonGroup>
            ))}
        </FlexBox>
    );
}
