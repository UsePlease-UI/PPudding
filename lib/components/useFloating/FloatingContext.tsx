import { createContext } from 'react';

export interface FloatingContextType {
  id: string;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const FloatingContext = createContext<FloatingContextType | undefined>(undefined);
