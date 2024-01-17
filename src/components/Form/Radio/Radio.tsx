/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, forwardRef, useId } from 'react';

import { css } from '@emotion/react';
import { CustomCSSType, visuallyHidden } from 'styles';

import Typography from 'components/Base/Typography';

import { SizeType, getSizeStyle, radioStyle } from './styles';

type BaseType = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & CustomCSSType;

type RadioType = BaseType & {
    name: string;
    label: string;
    value: string;
    size?: SizeType;
    currentValue?: string;
};

/**
 *  [UI Component] Radio Component
 *  @param name 라디오 버튼 이름
 *  @param label 라디오 텍스트 값
 *  @param value 라디오 버튼 값
 *  @param size [CSS] 라디오 크기 (small | medium | large)
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const Radio = forwardRef<HTMLInputElement, RadioType>(function createRadio(
    { name, label, value, size = 'medium', currentValue, onChange, customCSS, ...props },
    ref
) {
    const id = useId();

    return (
        <label htmlFor={id} css={css([radioStyle.label, getSizeStyle(size).container, customCSS])}>
            <span>
                <input
                    {...props}
                    id={id}
                    ref={ref}
                    type="radio"
                    name={name}
                    value={value}
                    checked={value !== undefined ? value === currentValue : undefined}
                    onChange={onChange}
                    css={css([visuallyHidden, radioStyle.input])}
                />
                <span css={css([radioStyle.checkedRadio, getSizeStyle(size).default])}>
                    <span />
                </span>
                <span css={css([radioStyle.radio, getSizeStyle(size).default])} />
            </span>
            <Typography
                component="span"
                fontWeight="500"
                lineHeight="1.5"
                customCSS={{
                    ...radioStyle.labelText,
                    ...getSizeStyle(size).text
                }}
            >
                {label}
            </Typography>
        </label>
    );
});

export default Radio;
