import { createContext, RefObject } from 'react';

export interface TabContextType {
  linkRefs: RefObject<HTMLButtonElement>[];
}

export const TabContext = createContext<TabContextType | undefined>(undefined);
