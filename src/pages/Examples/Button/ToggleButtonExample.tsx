import { useState } from 'react';

import { SizeType } from '@components/Button/styles';
import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';

import { customStyles, RadioControls } from '../Common';
import { BUTTON_SIZE } from './constants';

export default function ToggleButtonExample() {
  const [fruits, setFruits] = useState('banana');
  const [sizeType, setSizeType] = useState(BUTTON_SIZE[0]);

  return (
    <div className={customStyles.playgroundContainer}>
      <div className={customStyles.playgroundControlContainer}>
        <RadioControls name="toggle button size" options={BUTTON_SIZE} value={sizeType} onChange={setSizeType} />
      </div>
      <div className={customStyles.playgroundDisplayContainer}>
        <ToggleButtonGroup value={fruits} onChange={(e) => setFruits(e.currentTarget.value)}>
          <ToggleButton
            name="fruits"
            size={sizeType as SizeType}
            value="apple"
            onChange={(e) => setFruits(e.currentTarget.value)}
          >
            Apple
          </ToggleButton>
          <ToggleButton
            name="fruits"
            size={sizeType as SizeType}
            value="banana"
            onChange={(e) => setFruits(e.currentTarget.value)}
          >
            Banana
          </ToggleButton>
          <ToggleButton
            name="fruits"
            size={sizeType as SizeType}
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
