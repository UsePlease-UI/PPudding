import { useState } from 'react';

import { SizeType } from '@components/Button/styles';
import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';

import { BUTTON_SIZE } from './constants';
import { customStyles, RadioControls } from '../Common';

export default function ToggleButtonExample() {
    const [fruits, setFruits] = useState('banana');
    const [sizeType, setSizeType] = useState(BUTTON_SIZE[0]);

    return (
        <div className={customStyles.playgroundContainer}>
            <div className={customStyles.playgroundControlContainer}>
                <RadioControls
                    name="toggle button size"
                    value={sizeType}
                    onChange={setSizeType}
                    options={BUTTON_SIZE}
                />
            </div>
            <div className={customStyles.playgroundDisplayContainer}>
                <ToggleButtonGroup value={fruits} onChange={(e) => setFruits(e.currentTarget.value)}>
                    <ToggleButton
                        size={sizeType as SizeType}
                        name="fruits"
                        value="apple"
                        onChange={(e) => setFruits(e.currentTarget.value)}
                    >
                        Apple
                    </ToggleButton>
                    <ToggleButton
                        size={sizeType as SizeType}
                        name="fruits"
                        value="banana"
                        onChange={(e) => setFruits(e.currentTarget.value)}
                    >
                        Banana
                    </ToggleButton>
                    <ToggleButton
                        size={sizeType as SizeType}
                        name="fruits"
                        value="orange"
                        onChange={(e) => setFruits(e.currentTarget.value)}
                    >
                        Orange
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
        </div>
    );
}
