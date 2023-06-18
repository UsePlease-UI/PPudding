/** @jsxImportSource @emotion/react */
import React from 'react';

import Typography from '@atoms/Typography';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from '@styles/palette';

type ToggleButtonType = {
    children: React.ReactNode;
    name: string;
    value: string | number;
    currentValue?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    customCSS?: CSSInterpolation;
};

const visuallyHidden = css({
    position: 'absolute',
    clip: 'rect(0,0,0,0)',
    height: 1,
    width: 1,
    margin: -1,
    padding: 0,
    border: 0,
    overflow: 'hidden'
});

const labelStyle = css({
    minWidth: 80,
    height: 40,
    lineHeight: '40px',
    display: 'inline-block',
    overflow: 'hidden',
    cursor: 'pointer',
    backgroundColor: '#ffffff',
    '& span': {
        padding: '0 16px',
        border: '1px solid #eeeeee',
        borderLeft: 0
    },
    '&:first-of-type span': {
        borderTopLeftRadius: 4,
        borderBottomLeftRadius: 4,
        borderLeft: '1px solid #eeeeee'
    },
    '&:last-of-type span': {
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4
    },
    '& input:checked + span': {
        color: '#ffffff',
        backgroundColor: palette.primary.main
    }
});

const labelTextStyle = css({
    display: 'inline-block',
    minWidth: 'inherit',
    height: 'inherit',
    color: '#000000',
    fontSize: 14,
    fontWeight: 500,
    lineHeight: 'inherit',
    textAlign: 'center',
    textTransform: 'uppercase'
});

/**
 *  [UI Component] Toggle Button Component
 *  @param name ToggleButton 이름
 *  @param value ToggleButton 값
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const ToggleButton = React.forwardRef<HTMLInputElement, ToggleButtonType>(function createToggleButton(
    { name, currentValue, value, onChange, children, customCSS = {}, ...props },
    ref
) {
    return (
        <label htmlFor={`${name}-${value}`} css={css([labelStyle, customCSS])}>
            <input
                {...props}
                id={`${name}-${value}`}
                ref={ref}
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={value === currentValue}
                css={visuallyHidden}
            />
            <Typography component="span" customCSS={labelTextStyle}>
                {children}
            </Typography>
        </label>
    );
});

export default ToggleButton;
