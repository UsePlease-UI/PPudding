/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, forwardRef } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { DEFAULT_WIDTH, textfieldStyle } from './styles';

type BaseType = InputHTMLAttributes<HTMLInputElement> & CustomCSSType;

type TextFieldType = BaseType & {
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
};

/**
 *  [UI Component] TextField Component
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param isFullWidth [CSS] width (100% 또는 기본값) [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const TextField = forwardRef<HTMLInputElement, TextFieldType>(function createInput(
    { isDisabled, isReadOnly, isFullWidth, type = 'text', customCSS, ...props },
    ref
) {
    return (
        <input
            autoComplete="new-password"
            {...props}
            ref={ref}
            type={type}
            disabled={isDisabled}
            readOnly={isReadOnly}
            css={css([
                textfieldStyle.textfield,
                {
                    width: isFullWidth ? '100%' : DEFAULT_WIDTH,
                    ...(isReadOnly && {
                        '&&': {
                            border: '1px solid #e0e0e0',
                            backgroundColor: '#f4f4f4'
                        }
                    })
                },
                customCSS
            ])}
        />
    );
});

export default TextField;
