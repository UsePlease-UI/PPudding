/** @jsxImportSource @emotion/react */
import React from 'react';

import { useAccordionContext } from '@contexts/AccordionContext';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import palette from '@styles/palette';

export type AccordionHeaderType = React.HTMLAttributes<HTMLHeadingElement> & {
    children: React.ReactNode;
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
    backgroundColor: palette.primary.main
});

const buttonStyle = css({ width: '100%', height: '100%', minHeight: 'inherit', padding: '5px 20px' });

const titleStyle = css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.5,
    color: '#ffffff',
    '& *': { color: '#ffffff', fontSize: 18, fontWeight: 600, lineHeight: 1.5 }
});

const iconStyle = css({ width: 20, height: 20, '& svg': { width: 20, height: 20 } });

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
    const { children, index, hasIcon = true, icon, customCSS = {}, ...rest } = props;
    const { isExpanded, onChange } = useAccordionContext();

    return (
        <h3
            {...rest}
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
                type="button"
                id={`accordion-panel${index}-id`}
                aria-expanded={isExpanded}
                aria-controls={`panel${index}`}
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
