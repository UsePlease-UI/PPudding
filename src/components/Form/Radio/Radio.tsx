/** @jsxImportSource @emotion/react */
import { ChangeEvent, InputHTMLAttributes, forwardRef } from 'react';

import { css } from '@emotion/react';
import { CustomCSSType, visuallyHidden } from 'styles';

import Typography from 'components/Base/Typography';

import { radioStyle } from './styles';

type BaseType = InputHTMLAttributes<HTMLInputElement> & CustomCSSType;

type RadioType = BaseType & {
    name: string;
    label: string;
    value: string | number;
    currentValue?: string | number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

/**
 *  [UI Component] Radio Component
 *  @param name 라디오 버튼 이름
 *  @param label 라디오 텍스트 값
 *  @param value 라디오 버튼 값
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const Radio = forwardRef<HTMLInputElement, RadioType>(function createRadio(
    { name, label, value, currentValue, onChange, customCSS, ...props },
    ref
) {
    return (
        <label htmlFor={`${name}-${value}`} css={css([radioStyle.label, customCSS])}>
            <span>
                <input
                    {...props}
                    ref={ref}
                    id={`${name}-${value}`}
                    name={name}
                    type="radio"
                    value={value}
                    onChange={onChange}
                    checked={value !== undefined ? value === currentValue : undefined}
                    css={css([visuallyHidden, radioStyle.input])}
                />
                <span css={radioStyle.checkedRadio} />
                <span css={radioStyle.radio} />
            </span>
            <Typography
                component="span"
                fontSize={14}
                lineHeight="1.5"
                fontWeight="500"
                customCSS={radioStyle.labelText}
            >
                {label}
            </Typography>
        </label>
    );
});

export default Radio;
