import { useContext } from 'react';

import { AccordionContext } from './AccordionContext';

const useAccordion = () => {
  const context = useContext(AccordionContext);

  if (!context) {
    throw new Error('should use Accordion inside `AccordionContext`!');
  }

  return context;
};

export default useAccordion;
