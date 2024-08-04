import { HTMLAttributes, ReactNode } from 'react';

import { useAccordion } from '@components/useAccordion';

import { ChevronDownFilled } from '@fluentui/react-icons';
import { joinClassNames } from '@utils/format';

type BaseType = Omit<HTMLAttributes<HTMLHeadingElement>, 'className'>;

type AccordionHeaderType = BaseType & {
    children: ReactNode;
    hasIcon?: boolean;
    icon?: ReactNode;
};

/**
 *  [UI Component] Accordion Header Component
 *  @param children 헤더 텍스트 | 컴포넌트
 *  @param icon 아이콘 [optional]
 *  @param hasIcon 아이콘 사용여부 [optional]
 *  @returns JSX.Element
 */
export default function AccordionHeader(props: AccordionHeaderType) {
    const { children, hasIcon = true, icon, ...rest } = props;
    const { accordionId, isExpanded, isDisabled, onChange } = useAccordion();

    return (
        <h3
            {...rest}
            className={joinClassNames(
                'min-h-60 w-full min-w-250 rounded border border-gray-100 under-mobile:min-w-0',
                isExpanded && 'rounded-b-none border-primary-600 bg-primary-600',
                isDisabled && 'border-gray-400 bg-gray-400'
            )}
        >
            <button
                type="button"
                id={`accordion-panel-${accordionId}`}
                aria-expanded={isExpanded}
                aria-controls={`panel-${accordionId}`}
                aria-disabled={isDisabled}
                disabled={isDisabled}
                onClick={(e) => onChange(e, isExpanded)}
                className="h-full min-h-inherit w-full px-20 py-5"
            >
                <div
                    className={joinClassNames(
                        'flex items-center justify-between text-left text-18 font-medium leading-normal text-primary-800 *:text-left *:text-18 *:font-medium *:leading-normal',
                        isExpanded && 'text-bold *:text-bold text-primary-950 *:text-primary-950',
                        isDisabled && 'cursor-not-allowed text-gray-950 *:text-gray-950'
                    )}
                >
                    {children}
                    {hasIcon && (
                        <span
                            className={joinClassNames(
                                'h-20 w-20 child-svg:block child-svg:h-20 child-svg:w-20',
                                isExpanded && 'rotate-180'
                            )}
                        >
                            {icon ?? <ChevronDownFilled />}
                        </span>
                    )}
                </div>
            </button>
        </h3>
    );
}
