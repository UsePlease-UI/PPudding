/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from 'contexts/AccordionContext';

import { css } from '@emotion/react';

type AccordionPanelType = {
    index: number;
    children: React.ReactNode;
};

export default function AccordionPanel({ index, children }: AccordionPanelType) {
    const { value } = useAccordionContext();

    return (
        <div
            id={`sect${index}`}
            aria-labelledby={`accordian${index}-id`}
            role="region"
            css={css({ visibility: value === index ? 'visible' : 'hidden' })}
        >
            {children}
        </div>
    );
}
