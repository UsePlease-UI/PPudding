import { HTMLAttributes, ReactNode } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { useAccordion } from '@components/useAccordion';

import { joinClassNames } from '@utils/format';

export interface AccordionHeaderType extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  hasIcon?: boolean;
  icon?: ReactNode;
}

export default function AccordionHeader(props: AccordionHeaderType) {
  const { children, className, hasIcon = true, icon, ...rest } = props;
  const { accordionId, isDisabled, isExpanded, onChange } = useAccordion();

  return (
    <h3
      {...rest}
      className={joinClassNames(
        'min-h-15 w-full min-w-62.5 rounded border border-gray-100 under-mobile:min-w-0',
        isExpanded && 'rounded-b-none border-primary-600 bg-primary-600',
        isDisabled && 'border-gray-400 bg-gray-400',
        className && className,
      )}
    >
      <button
        aria-disabled={isDisabled}
        aria-expanded={isExpanded}
        className="size-full min-h-inherit px-5 py-1.25"
        disabled={isDisabled}
        id={`accordion-panel-${accordionId}`}
        type="button"
        aria-controls={`panel-${accordionId}`}
        onClick={(e) => onChange(e, isExpanded)}
      >
        <div
          className={joinClassNames(
            'flex items-center justify-between text-left text-18 font-medium leading-normal text-primary-800 *:text-left *:text-18 *:font-medium *:leading-normal',
            isExpanded && 'text-bold *:text-bold text-primary-950 *:text-primary-950',
            isDisabled && 'cursor-not-allowed text-gray-950 *:text-gray-950',
          )}
        >
          {children}
          {hasIcon && (
            <span
              className={joinClassNames(
                'h-5 w-5 child-svg:block child-svg:h-5 child-svg:w-5',
                isExpanded && 'rotate-180',
              )}
            >
              {icon ?? <ChevronDownIcon />}
            </span>
          )}
        </div>
      </button>
    </h3>
  );
}
