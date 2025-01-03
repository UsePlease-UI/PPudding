import { useContext } from 'react';

import { PickerContext } from './PickerContext';

const usePicker = () => {
  const context = useContext(PickerContext);

  if (!context) {
    throw new Error('should use Picker inside `PickerContext`!');
  }

  return context;
};

export default usePicker;
