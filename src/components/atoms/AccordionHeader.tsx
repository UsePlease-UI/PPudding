/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from 'contexts/AccordionContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { ChevronDownIcon } from 'assets/icons';

type AccordionHeaderType = {
    index: number;
    children: string | React.ReactNode;
    icon?: React.ReactNode;
    hasIcon?: boolean;
    customCSS?: CSSInterpolation;
};

const headingStyle = css({
    minWidth: 250,
    padding: '5px 12px',
    fontSize: 14,
    lineHeight: 1.5
});

const titleStyle = css({
    display: 'flex',
    alignItems: 'center'
});

const buttonStyle = css({
    border: 1
});

export default function AccordionHeader({
    hasIcon = true,
    icon,
    children,
    index,
    customCSS = {}
}: AccordionHeaderType) {
    const { value, onChange } = useAccordionContext();
    const isOpen = index === value;

    return (
        <h3 css={css([headingStyle, customCSS])}>
            <button
                id={`accordian${index}-id`}
                type="button"
                aria-expanded={isOpen}
                aria-controls={`sect${index}`}
                onClick={() => onChange(index)}
                css={buttonStyle}
            >
                <div css={titleStyle}>
                    {children}
                    {hasIcon && (
                        <span css={css({ transform: isOpen ? 'rotate(180deg)' : 'initial' })}>
                            {icon ?? <ChevronDownIcon />}
                        </span>
                    )}
                </div>
            </button>
        </h3>
    );
}
