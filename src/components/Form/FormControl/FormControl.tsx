/** @jsxImportSource @emotion/react */
import { ReactElement, ReactNode, cloneElement } from 'react';

import type { CustomCSSType } from 'styles/types';

import { FlexBox, Typography } from 'components/Base';

type FormControlType = CustomCSSType & {
    children: ReactNode;
    id?: string;
    label?: string | ReactNode;
    helperTextId?: string;
    helperText?: string | ReactNode;
};

/**
 *  [UI Component] Form Control Component
 *  @param children 컴포넌트
 *  @param id [웹 접근성] id [optional]
 *  @param label Label Text [optional]
 *  @param helperText Helper Text [optional]
 *  @param helperTextId [웹 접근성] helper text의 id [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function FormControl(props: FormControlType) {
    const {
        children,
        id = 'input',
        label = '',
        helperTextId = 'input-helper-text',
        helperText = '',
        customCSS
    } = props;

    return (
        <FlexBox flexDirection="column" gap={4} customCSS={customCSS}>
            <Typography component="label" htmlFor={id}>
                {label}
            </Typography>
            {cloneElement(children as ReactElement, {
                'aria-label': id,
                'aria-describedby': helperTextId
            })}
            <Typography component="small" id={helperTextId}>
                {helperText}
            </Typography>
        </FlexBox>
    );
}
