import { MouseEvent, ReactNode } from 'react';

import { AccordionProvider } from '@components/useAccordion';

import { joinClassNames } from '@utils/format';

export interface AccordionType {
  children: ReactNode;
  className?: string;
  isDisabled?: boolean;
  isExpanded?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
}

export default function Accordion(props: AccordionType) {
  const { children, className, ...rest } = props;

  return (
    <AccordionProvider {...rest}>
      <div className={joinClassNames('w-full', className && className)}>{children}</div>
    </AccordionProvider>
  );
}
