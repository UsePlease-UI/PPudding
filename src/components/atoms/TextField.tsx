/* eslint-disable @typescript-eslint/no-empty-function */
/** @jsxImportSource @emotion/react */
import React, { InputHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TextFieldType = InputHTMLAttributes<HTMLInputElement> & {
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

const inputTextStyle = css({
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: 0
});

const textfieldStyle = css([
    inputTextStyle,
    {
        height: 40,
        border: '1px solid #eeeeee',
        padding: '10px 12px',
        borderRadius: 4,
        '&:active, &:focus, &:hover': {
            border: '1px solid pink'
        },
        '&:disabled': {
            color: 'rgba(0,0,0,0.5)',
            border: '1px solid grey',
            backgroundColor: '#eeeeee'
        }
    }
]);

const DEFAULT_WIDTH = 320;

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
            {...props}
            ref={ref}
            name={name}
            value={value}
            type={type}
            autoComplete="new-password"
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
