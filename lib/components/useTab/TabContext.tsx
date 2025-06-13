import { createContext, RefObject } from 'react';

export interface TabContextType {
  linkRefs: RefObject<HTMLButtonElement | null>[];
  value: number;
  onChange: (newValue: number) => void;
}

export const TabContext = createContext<TabContextType | undefined>(undefined);
