/** @jsxImportSource @emotion/react */
import { ChangeEvent, InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';

import { css } from '@emotion/react';
import { visuallyHidden, CustomCSSType, palette } from 'styles';

import Typography from 'components/Base/Typography';

import { SizeType, getSizeStyle, toggleButtonStyle } from './styles';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & CustomCSSType;

type ToggleButtonType = BaseType & {
    children: ReactNode;
    name: string;
    value: string;
    size?: SizeType;
    currentValue?: string | string[];
    isMultiple?: boolean;
};

/**
 *  [UI Component] Toggle Button Component
 *  @param children 컴포넌트
 *  @param name Toggle Button 이름
 *  @param value Toggle Button 값
 *  @param size [CSS] 버튼 사이즈 (small | medium | large)
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const ToggleButton = forwardRef<HTMLInputElement, ToggleButtonType>(function createToggleButton(props, ref) {
    const { size, name, currentValue = '', isMultiple, value, onChange, children, customCSS, ...rest } = props;
    const id = useId();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.blur();
        if (onChange) {
            onChange(e);
        }
    };

    return (
        <label htmlFor={id} css={css([toggleButtonStyle.label, customCSS])}>
            <input
                {...rest}
                id={id}
                ref={ref}
                type={isMultiple ? 'checkbox' : 'radio'}
                name={name}
                value={value}
                checked={typeof currentValue === 'string' ? value === currentValue : currentValue.includes(value)}
                onChange={handleChange}
                css={visuallyHidden}
            />
            {typeof children === 'string' ? (
                <Typography
                    component="span"
                    height="inherit"
                    fontSize={16}
                    fontWeight="500"
                    lineHeight="inherit"
                    align="center"
                    color={palette.primary[600]}
                    textTransform="uppercase"
                    customCSS={{
                        ...toggleButtonStyle.labelText,
                        ...getSizeStyle(size).text
                    }}
                >
                    {children}
                </Typography>
            ) : (
                <span css={css([toggleButtonStyle.iconButton, getSizeStyle(size).icon])}>{children}</span>
            )}
        </label>
    );
});

export default ToggleButton;
