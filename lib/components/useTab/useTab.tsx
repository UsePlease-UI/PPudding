import { useContext } from 'react';

import { TabContext } from './TabContext';

const useTab = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error('should use Tab inside `TabContext`!');
  }

  return context;
};

export default useTab;
