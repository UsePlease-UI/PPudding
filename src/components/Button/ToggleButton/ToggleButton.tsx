/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, ReactNode } from 'react';

import Typography from 'components/Base/Typography';

import { toggleButtonStyle } from './styles';

import { css } from '@emotion/react';
import { visuallyHidden } from 'styles/common';
import type { CustomCSSType } from 'styles/types';

type ToggleButtonType = CustomCSSType & {
    children: ReactNode;
    name: string;
    value: string | number;
    currentValue?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

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
        <label htmlFor={`${name}-${value}`} css={css([toggleButtonStyle.label, customCSS])}>
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
            <Typography component="span" customCSS={toggleButtonStyle.labelText}>
                {children}
            </Typography>
        </label>
    );
});

export default ToggleButton;
