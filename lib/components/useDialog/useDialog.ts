import { useContext } from 'react';

import { DialogContext } from './DialogContext';

const useDialog = () => {
  const context = useContext(DialogContext);

  if (!context) {
    throw new Error('should use Dialog inside `DialogContext`!');
  }

  return context;
};

export default useDialog;
