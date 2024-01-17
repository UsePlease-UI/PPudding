/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { palette, CustomCSSType } from 'styles';

import { useAccordion } from 'components/useAccordion';

import { accordionStyle } from './styles';

type BaseType = HTMLAttributes<HTMLDivElement> & CustomCSSType;

export type AccordionPanelType = BaseType & {
    children: ReactNode;
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Accordion Panel Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
export default function AccordionPanel(props: AccordionPanelType) {
    const { children, customCSS, ...rest } = props;
    const { accordionId, isExpanded } = useAccordion();

    return (
        <div
            {...rest}
            id={`panel-${accordionId}`}
            aria-labelledby={`accordion-panel-${accordionId}`}
            role="region"
            css={css([
                {
                    height: isExpanded ? 'auto' : 0,
                    padding: isExpanded ? 20 : 0,
                    border: isExpanded ? `1px solid ${palette.gray[100]}` : 0,
                    visibility: isExpanded ? 'visible' : 'hidden'
                },
                accordionStyle.panel,
                customCSS
            ])}
        >
            {children}
        </div>
    );
}
