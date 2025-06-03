import { ReactNode, useCallback, useMemo, useState } from 'react';

import { FloatingContext, FloatingContextType } from './FloatingContext';

export interface FloatingProviderType {
  children: ReactNode;
  id: string;
}

const FloatingProvider = ({ children, id }: FloatingProviderType) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback((isOpen: boolean) => {
    setIsOpen(isOpen);
  }, []);

  const context: FloatingContextType = useMemo(() => ({ id, isOpen, setIsOpen: handleOpen }), [id, isOpen, handleOpen]);

  return <FloatingContext.Provider value={context}>{children}</FloatingContext.Provider>;
};

export default FloatingProvider;
