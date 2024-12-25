import { createContext, RefObject } from 'react';

export type TabContextType = {
  linkRefs: RefObject<HTMLButtonElement>[];
};

export const TabContext = createContext<TabContextType | undefined>(undefined);
