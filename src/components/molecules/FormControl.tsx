/** @jsxImportSource @emotion/react */
import React from 'react';

import FlexBox from '@atoms/FlexBox';
import Typography from '@atoms/Typography';

import { CSSInterpolation } from '@emotion/serialize';

type FormControlType = {
    children: React.ReactElement;
    id?: string;
    label?: string | React.ReactNode;
    helperTextId?: string;
    helperText?: string | React.ReactNode;
    customCSS?: CSSInterpolation;
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
        customCSS = {}
    } = props;

    return (
        <FlexBox direction="column" gap={4} customCSS={customCSS}>
            <Typography component="label" htmlFor={id}>
                {label}
            </Typography>
            {React.cloneElement(children, { 'aria-label': id, 'aria-describedby': helperTextId })}
            <Typography component="small" id={helperTextId}>
                {helperText}
            </Typography>
        </FlexBox>
    );
}
