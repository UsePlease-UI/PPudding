import { MouseEvent, ReactNode, useCallback, useEffect, useId, useMemo, useState } from 'react';

import { AccordionContext, AccordionContextType } from './AccordionContext';

export interface AccordionProviderType {
  children: ReactNode;
  isDisabled?: boolean;
  isExpanded?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
}

const AccordionProvider = ({ children, isDisabled, isExpanded, onChange }: AccordionProviderType) => {
  const accordionId = useId();
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>, curIsExpanded: boolean) => {
      setIsSelected((prev) => !prev);
      if (onChange) {
        onChange(event, curIsExpanded);
      }
      const panel = document.getElementById(`accordion-content-${accordionId}`);
      if (panel) {
        panel.hidden = false;
      }
    },
    [onChange, accordionId],
  );

  const context: AccordionContextType = useMemo(
    () => ({
      accordionId,
      isDisabled: isDisabled || false,
      isExpanded: isDisabled ? true : isSelected,
      onChange: handleChange,
    }),
    [accordionId, isSelected, isDisabled, handleChange],
  );

  useEffect(() => {
    setIsSelected(isExpanded ?? false);
  }, [isExpanded]);

  return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
};

export default AccordionProvider;
