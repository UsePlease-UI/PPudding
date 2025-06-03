import { createContext, RefObject } from 'react';

export interface TabContextType {
  linkRefs: RefObject<HTMLButtonElement | null>[];
}

export const TabContext = createContext<TabContextType | undefined>(undefined);
