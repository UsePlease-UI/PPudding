/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from 'contexts/AccordionContext';

import { css } from '@emotion/react';

type AccordionPanelType = {
    index: number;
    children: React.ReactNode;
};

const panelStyle = css({
    backgroundColor: '#ffffff',
    borderTop: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    marginBottom: '-1px',
    fontSize: 14,
    lineHeight: 1.5,
    '& *': {
        fontSize: 14,
        lineHeight: 1.5
    }
});

export default function AccordionPanel({ index, children }: AccordionPanelType) {
    const { isExpanded } = useAccordionContext();

    return (
        <div
            id={`sect${index}`}
            aria-labelledby={`accordian${index}-id`}
            role="region"
            css={css([
                {
                    height: isExpanded ? 'auto' : 0,
                    padding: isExpanded ? 12 : 0,
                    border: isExpanded ? '1px solid #eeeeee' : 0,
                    visibility: isExpanded ? 'visible' : 'hidden'
                },
                panelStyle
            ])}
        >
            {children}
        </div>
    );
}
