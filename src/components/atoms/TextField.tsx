/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from '@styles/palette';

type TextFieldType = React.InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    type?: 'number' | 'text' | 'url' | 'email' | 'password' | 'phone';
    placeholder?: string;
    maxLength?: number;
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    customCSS?: CSSInterpolation;
};

const inputTextStyle = css({ fontSize: 14, fontWeight: 400, lineHeight: 1.5, letterSpacing: 0 });

const textfieldStyle = css([
    inputTextStyle,
    {
        height: 40,
        border: '1px solid #eeeeee',
        padding: '10px 12px',
        borderRadius: 4,
        '&:active, &:focus, &:hover': {
            border: `1px solid ${palette.primary.main}`
        },
        '&:disabled': {
            color: 'rgba(0,0,0,0.5)',
            border: '1px solid grey',
            backgroundColor: '#eeeeee'
        }
    }
]);

const DEFAULT_WIDTH = 320;

/**
 *  [UI Component] TextField Component
 *  @param name TextField 이름
 *  @param value TextField 값
 *  @param onChange Change Event Handler
 *  @param isReadOnly 읽기 전용 [optional]
 *  @param isDisabled 활성화여부 [optional]
 *  @param isFullWidth [CSS] width (100% 또는 기본값) [optional]
 *  @param type TextField 타입 (text | number | url | email | password | phone) [optional]
 *  @param placeholder TextField 안내문 [optional]
 *  @param maxLength TextField 값 길이 제한 [optional]
 *  @param onKeyDown Key Event Handler [optional]
 *  @param onFocus Focus Event Handler [optional]
 *  @param onBlur Blur Event Handler [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
const TextField = React.forwardRef<HTMLInputElement, TextFieldType>(function createInput(
    {
        name,
        value,
        onChange,
        isDisabled = false,
        isReadOnly = false,
        isFullWidth = false,
        type = 'text',
        placeholder = '',
        maxLength = 100,
        onKeyDown = () => {},
        onBlur = () => {},
        onFocus = () => {},
        customCSS = {},
        ...props
    },
    ref
) {
    return (
        <input
            autoComplete="new-password"
            {...props}
            ref={ref}
            name={name}
            value={value}
            type={type}
            maxLength={maxLength}
            placeholder={placeholder}
            disabled={isDisabled}
            readOnly={isReadOnly}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            css={css([
                textfieldStyle,
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

TextField.displayName = 'TextField';

export default TextField;
