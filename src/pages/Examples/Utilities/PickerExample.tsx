import { useState } from 'react';

import { ToggleButton, ToggleButtonGroup } from '@components/Button/ToggleButton';
import Picker from '@components/Picker';

import { customStyles } from '../Common';

const PickerExample = () => {
  const [type, setType] = useState<'date' | 'month'>('date');
  return (
    <div className={customStyles.toggleComponentContainer}>
      <div className="w-full space-y-5">
        <ToggleButtonGroup value={type} onChange={(e) => setType(e.currentTarget.value as typeof type)}>
          <ToggleButton name="type" size="small" value="date">
            Date
          </ToggleButton>
          <ToggleButton name="type" size="small" value="month">
            Month
          </ToggleButton>
        </ToggleButtonGroup>
        {type === 'date' ? <Picker /> : <Picker showMonthPicker />}
      </div>
    </div>
  );
};

export default PickerExample;
