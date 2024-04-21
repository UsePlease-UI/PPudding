import { HTMLAttributes, ReactNode } from 'react';

import { useAccordion } from '@components/useAccordion';

import { joinClassNames } from '@utils/format';

type BaseType = Omit<HTMLAttributes<HTMLDivElement>, 'className'>;

type AccordionPanelType = BaseType & {
    children: ReactNode;
};

/**
 *  [UI Component] Accordion Panel Component
 *  @param children 컴포넌트
 *  @returns JSX.Element
 */
export default function AccordionPanel(props: AccordionPanelType) {
    const { children, ...rest } = props;
    const { accordionId, isExpanded } = useAccordion();

    return (
        <div
            {...rest}
            id={`panel-${accordionId}`}
            aria-labelledby={`accordion-panel-${accordionId}`}
            role="region"
            className={joinClassNames(
                'invisible -mt-1 h-0 w-full bg-white p-0 text-14 *:text-14 *:leading-normal',
                isExpanded && 'visible h-auto rounded-b border border-gray-100 p-20'
            )}
        >
            {children}
        </div>
    );
}
