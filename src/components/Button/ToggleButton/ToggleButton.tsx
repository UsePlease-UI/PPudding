/** @jsxImportSource @emotion/react */
import { ChangeEvent, ReactNode, forwardRef } from 'react';

import { css } from '@emotion/react';
import { visuallyHidden, CustomCSSType, palette } from 'styles';

import Typography from 'components/Base/Typography';

import { toggleButtonStyle } from './styles';

type ToggleButtonType = CustomCSSType & {
    children: ReactNode;
    name: string;
    value: string | number;
    currentValue?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 *  [UI Component] Toggle Button Component
 *  @param children 컴포넌트
 *  @param name Toggle Button 이름
 *  @param value Toggle Button 값
 *  @param value 현재 선택된 Toggle Button 값
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonType>(function createToggleButton(props, ref) {
    const { name, currentValue, value, onChange, children, customCSS, ...rest } = props;
    return (
        <label htmlFor={`${name}-${value}`} css={css([toggleButtonStyle.label, customCSS])}>
            <input
                {...rest}
                id={`${name}-${value}`}
                ref={ref}
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                checked={value === currentValue}
                css={visuallyHidden}
            />
            <Typography
                component="span"
                height="inherit"
                fontSize={14}
                fontWeight="500"
                lineHeight="inherit"
                align="center"
                color={palette.neutral.black}
                textTransform="uppercase"
                customCSS={toggleButtonStyle.labelText}
            >
                {children}
            </Typography>
        </label>
    );
});

export default ToggleButton;
