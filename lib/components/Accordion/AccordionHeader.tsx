import { HTMLAttributes, ReactNode } from 'react';

import { ChevronDownIcon } from '@heroicons/react/24/solid';

import { useAccordion } from '@components/useAccordion';

import { joinClassNames } from '@utils/format';

export interface AccordionHeaderType extends HTMLAttributes<HTMLHeadingElement> {
  children: ReactNode;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  hasIcon?: boolean;
  icon?: ReactNode;
}

export default function AccordionHeader(props: AccordionHeaderType) {
  const { children, className, hasIcon = true, headingLevel = 'h3', icon, ...rest } = props;
  const { accordionId, isDisabled, isExpanded, onChange } = useAccordion();

  const Tag = headingLevel;

  return (
    <Tag
      {...rest}
      className={joinClassNames(
        'min-h-15 w-full min-w-62.5 rounded border border-gray-100 under-mobile:min-w-0',
        isExpanded && 'rounded-b-none border-black bg-black',
        isDisabled && 'border-gray-400 bg-gray-400',
        className && className,
      )}
    >
      <button
        aria-disabled={isExpanded && isDisabled ? true : undefined}
        aria-expanded={isExpanded}
        className="size-full min-h-inherit px-5 py-1.25"
        disabled={isDisabled}
        id={`accordion-header-${accordionId}`}
        type="button"
        aria-controls={`accordion-content-${accordionId}`}
        onClick={(e) => onChange(e, isExpanded)}
      >
        <div
          className={joinClassNames(
            'flex items-center justify-between text-left text-18 font-medium leading-normal text-black *:text-left *:text-18 *:font-medium *:leading-normal',
            isExpanded && 'text-bold *:text-bold text-white *:text-white',
            isDisabled && 'pointer-events-none text-gray-600 *:text-gray-600',
          )}
        >
          {children}
          {hasIcon && (
            <span
              className={joinClassNames(
                'h-5 w-5 transition-transform child-svg:block child-svg:h-5 child-svg:w-5',
                isExpanded && 'rotate-180',
              )}
            >
              {icon ?? <ChevronDownIcon />}
            </span>
          )}
        </div>
      </button>
    </Tag>
  );
}
