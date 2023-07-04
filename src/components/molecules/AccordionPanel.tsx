/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from '@contexts/AccordionContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

export type AccordionPanelType = React.HTMLAttributes<HTMLDivElement> & {
    children: React.ReactNode;
    index: number;
    customCSS?: CSSInterpolation;
};

const panelStyle = css({
    backgroundColor: '#ffffff',
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginTop: -1,
    marginBottom: -1,
    fontSize: 14,
    lineHeight: 1.5,
    '& *': {
        fontSize: 14,
        lineHeight: 1.5
    }
});

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
                panelStyle,
                customCSS
            ])}
        >
            {children}
        </div>
    );
}
