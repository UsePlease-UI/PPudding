import { useContext } from 'react';

import { FloatingContext } from './FloatingContext';

const useFloating = () => {
  const context = useContext(FloatingContext);

  if (!context) {
    throw new Error('should use Floating Element inside `FloatingContext`!');
  }

  return context;
};

export default useFloating;
