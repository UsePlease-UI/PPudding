/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from '@contexts/AccordionContext';

import { ChevronDownIcon } from '@assets/icons';
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

export type AccordionHeaderType = {
    children: string | React.ReactNode;
    index: number;
    icon?: React.ReactNode;
    hasIcon?: boolean;
    customCSS?: CSSInterpolation;
};

const headingStyle = css({
    minWidth: 250,
    width: '100%',
    minHeight: 60,
    border: '1px solid #eeeeee',
    borderRadius: 4,
    backgroundColor: 'pink'
});

const buttonStyle = css({
    width: '100%',
    height: '100%',
    minHeight: 'inherit',
    padding: '5px 20px',
    cursor: 'pointer'
});

const titleStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.5,
    '& *': {
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 1.5
    }
});

const iconStyle = css({
    width: 20,
    height: 20,
    '& svg': { width: 20, height: 20 }
});

export default function AccordionHeader({
    children,
    index,
    hasIcon = true,
    icon,
    customCSS = {}
}: AccordionHeaderType) {
    const { isExpanded, onChange } = useAccordionContext();

    return (
        <h3
            css={css([
                headingStyle,
                {
                    borderBottomLeftRadius: isExpanded ? 0 : 4,
                    borderBottomRightRadius: isExpanded ? 0 : 4
                },
                customCSS
            ])}
        >
            <button
                id={`accordian${index}-id`}
                type="button"
                aria-expanded={isExpanded}
                aria-controls={`sect${index}`}
                onClick={(e) => onChange(e, isExpanded)}
                css={buttonStyle}
            >
                <div css={titleStyle}>
                    {children}
                    {hasIcon && (
                        <span css={css([iconStyle, { transform: isExpanded ? 'rotate(180deg)' : 'initial' }])}>
                            {icon ?? <ChevronDownIcon />}
                        </span>
                    )}
                </div>
            </button>
        </h3>
    );
}
