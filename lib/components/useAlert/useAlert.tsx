import { useContext } from 'react';

import { AlertContext } from './AlertContext';

const useAlert = () => {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error('should use Alert within Alert Provider');
  }

  return context;
};

export default useAlert;
