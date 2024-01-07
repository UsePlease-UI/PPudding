/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { useAccordionContext } from 'components/useAccordion';

import { accordionStyle } from './styles';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import type { CustomCSSType } from 'styles/types';

export type AccordionPanelType = HTMLAttributes<HTMLDivElement> &
    CustomCSSType & {
        children: ReactNode;
        index: number;
        customCSS?: CSSInterpolation;
    };

/**
 *  [UI Component] Accordion Panel Component
 *  @param children 컴포넌트
 *  @param index Accordion 번호 (아이디 및 aria에 사용)
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
export default function AccordionPanel(props: AccordionPanelType) {
    const { children, index, customCSS = {}, ...rest } = props;
    const { isExpanded } = useAccordionContext();

    return (
        <div
            {...rest}
            id={`panel${index}`}
            aria-labelledby={`accordion-panel${index}-id`}
            role="region"
            css={css([
                {
                    height: isExpanded ? 'auto' : 0,
                    padding: isExpanded ? 20 : 0,
                    border: isExpanded ? '1px solid #eeeeee' : 0,
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
