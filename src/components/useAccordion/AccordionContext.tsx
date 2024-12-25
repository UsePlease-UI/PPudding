import { createContext, MouseEvent } from 'react';

export type AccordionContextType = {
  accordionId: string;
  isDisabled: boolean;
  isExpanded: boolean;
  onChange: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);
