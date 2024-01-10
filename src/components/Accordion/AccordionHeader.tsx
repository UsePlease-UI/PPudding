/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { palette, CustomCSSType } from 'styles';

import { useAccordionContext } from 'components/useAccordion';

import { accordionStyle } from './styles';

type BaseType = HTMLAttributes<HTMLHeadingElement> & CustomCSSType;

export type AccordionHeaderType = BaseType & {
    children: ReactNode;
    hasIcon?: boolean;
    icon?: ReactNode;
};

/**
 *  [UI Component] Accordion Header Component
 *  @param children 헤더 텍스트 | 컴포넌트
 *  @param icon 아이콘 [optional]
 *  @param hasIcon 아이콘 사용여부 [optional]
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
export default function AccordionHeader(props: AccordionHeaderType) {
    const { children, hasIcon = true, icon, customCSS, ...rest } = props;
    const { accordionId, isExpanded, isDisabled, onChange } = useAccordionContext();

    return (
        <h3
            {...rest}
            css={css([
                accordionStyle.heading,
                {
                    borderBottomLeftRadius: isExpanded ? 0 : 4,
                    borderBottomRightRadius: isExpanded ? 0 : 4,
                    ...(isDisabled && {
                        backgroundColor: palette.gray[400]
                    })
                },
                customCSS
            ])}
        >
            <button
                type="button"
                id={`accordion-panel-${accordionId}`}
                aria-expanded={isExpanded}
                aria-controls={`panel-${accordionId}`}
                aria-disabled={isDisabled}
                disabled={isDisabled}
                onClick={(e) => onChange(e, isExpanded)}
                css={accordionStyle.button}
            >
                <div
                    css={css([
                        accordionStyle.title,
                        {
                            fontWeight: isExpanded ? 700 : 500,
                            '& *': {
                                fontWeight: isExpanded ? 700 : 500
                            },
                            ...(isDisabled && {
                                color: palette.gray[900],
                                '& *': {
                                    color: palette.gray[900]
                                }
                            })
                        }
                    ])}
                >
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
