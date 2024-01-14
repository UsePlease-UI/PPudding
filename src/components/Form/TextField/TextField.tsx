/** @jsxImportSource @emotion/react */
import { InputHTMLAttributes, ReactNode, forwardRef, useId } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import FormControl from 'components/Base/FormControl';

import { DEFAULT_WIDTH, textfieldStyle } from './styles';

type BaseType = InputHTMLAttributes<HTMLInputElement> & CustomCSSType;

type TextFieldType = BaseType & {
    isReadOnly?: boolean;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    labelText?: string | ReactNode;
    helperText?: string | ReactNode;
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
    { type = 'text', isReadOnly, isDisabled, isFullWidth, labelText, helperText, customCSS, ...props },
    ref
) {
    const labelId = props.id || useId();
    const helperTextId = props['aria-describedby'] || useId();

    return (
        <FormControl id={labelId} helperTextId={helperTextId} helperText={helperText} labelText={labelText}>
            <input
                {...props}
                aria-label={!labelText ? 'outlined-text-input' : undefined}
                aria-describedby={helperText ? helperTextId : undefined}
                id={labelId}
                autoComplete={props.autoComplete || 'new-password'}
                ref={ref}
                type={type}
                disabled={isDisabled}
                readOnly={isReadOnly}
                css={css([
                    textfieldStyle.textfield,
                    {
                        minWidth: isFullWidth ? 0 : DEFAULT_WIDTH,
                        width: '100%',
                        ...(isReadOnly && textfieldStyle.readOnly)
                    },
                    customCSS
                ])}
            />
        </FormControl>
    );
});

export default TextField;
