import { MouseEvent, ReactNode, useCallback, useId, useMemo, useState } from 'react';

import { AccordionContext, AccordionContextType } from './AccordionContext';

type AccordionProviderType = {
  children: ReactNode;
  isDisabled?: boolean;
  isExpanded?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

/**
 *  [UI Component] Accordion Provider
 *  @param children 컴포넌트
 *  @param isExpanded Panel 선택 여부 [optional]
 *  @param isDisabled Panel 비활성화 여부 [optional]
 *  @param onChange Change Event Handler [optional]
 *  @returns JSX.Element
 */
const AccordionProvider = ({ children, isDisabled, isExpanded, onChange }: AccordionProviderType) => {
  const accordionId = useId();
  const [isSelected, setIsSelected] = useState<boolean>(isExpanded ?? false);

  const handleChange = useCallback(
    (event: MouseEvent<HTMLButtonElement>, curIsExpanded: boolean) => {
      setIsSelected((prev) => !prev);
      if (onChange) {
        onChange(event, curIsExpanded);
      }
    },
    [onChange],
  );

  const context: AccordionContextType = useMemo(
    () => ({
      accordionId,
      isExpanded: isDisabled ? true : isSelected,
      isDisabled: isDisabled || false,
      onChange: handleChange,
    }),
    [accordionId, isSelected, isDisabled, handleChange],
  );

  return <AccordionContext.Provider value={context}>{children}</AccordionContext.Provider>;
};

export default AccordionProvider;
