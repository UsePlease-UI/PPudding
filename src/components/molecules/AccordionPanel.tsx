/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from 'contexts/AccordionContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

export type AccordionPanelType = {
    children: string | React.ReactNode;
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

export default function AccordionPanel({ children, index, customCSS = {} }: AccordionPanelType) {
    const { isExpanded } = useAccordionContext();

    return (
        <div
            id={`sect${index}`}
            aria-labelledby={`accordian${index}-id`}
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
