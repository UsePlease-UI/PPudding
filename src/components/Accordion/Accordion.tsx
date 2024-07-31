import { MouseEvent, ReactNode } from 'react';

import { AccordionProvider } from '@components/useAccordion';

type AccordionType = {
    children: ReactNode;
    isExpanded?: boolean;
    isDisabled?: boolean;
    onChange?: (event: MouseEvent<HTMLButtonElement>, isExpanded: boolean) => void;
};

/**
 *  [UI Component] Accordion Component
 *  @param children 컴포넌트
 *  @param isExpanded Panel 선택 여부 [optional]
 *  @param isDisabled Panel 비활성화 여부 [optional]
 *  @param onChange Change Event Handler [optional]
 *  @returns JSX.Element
 */
export default function Accordion(props: AccordionType) {
    const { children, ...rest } = props;

    return (
        <AccordionProvider {...rest}>
            <div className="w-full">{children}</div>
        </AccordionProvider>
    );
}
