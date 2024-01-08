/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import type { CustomCSSType } from 'styles/types';

import { useAccordionContext } from 'components/useAccordion';

import { accordionStyle } from './styles';

type BaseType = HTMLAttributes<HTMLHeadingElement> & CustomCSSType;

export type AccordionHeaderType = BaseType & {
    children: ReactNode;
    index: number;
    icon?: ReactNode;
    hasIcon?: boolean;
};

/**
 *  [UI Component] Accordion Header Component
 *  @param children 헤더 텍스트 | 컴포넌트
 *  @param index Accordion 번호 (아이디 및 aria에 사용) [optional]
 *  @param icon 아이콘 [optional]
 *  @param hasIcon 아이콘 사용여부 [optional]
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
export default function AccordionHeader(props: AccordionHeaderType) {
    const { children, index, hasIcon = true, icon, customCSS, ...rest } = props;
    const { isExpanded, onChange } = useAccordionContext();

    return (
        <h3
            {...rest}
            css={css([
                accordionStyle.heading,
                {
                    borderBottomLeftRadius: isExpanded ? 0 : 4,
                    borderBottomRightRadius: isExpanded ? 0 : 4
                },
                customCSS
            ])}
        >
            <button
                type="button"
                id={`accordion-panel${index}-id`}
                aria-expanded={isExpanded}
                aria-controls={`panel${index}`}
                onClick={(e) => onChange(e, isExpanded)}
                css={accordionStyle.button}
            >
                <div css={accordionStyle.title}>
                    {children}
                    {hasIcon && (
                        <span
                            css={css([
                                accordionStyle.icon,
                                {
                                    transform: isExpanded ? 'rotate(180deg)' : 'initial'
                                }
                            ])}
                        >
                            {icon ?? <ChevronDownIcon />}
                        </span>
                    )}
                </div>
            </button>
        </h3>
    );
}
