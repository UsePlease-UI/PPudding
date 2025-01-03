import { createContext, MouseEvent } from 'react';

export interface AccordionContextType {
  isDisabled: boolean;
  isExpanded: boolean;
  accordionId: string;
  onChange: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);
