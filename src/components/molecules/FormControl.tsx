/** @jsxImportSource @emotion/react */
import React from 'react';

import FlexBox from '@atoms/FlexBox';
import Typography from '@atoms/Typography';

import { CSSInterpolation } from '@emotion/serialize';

type FormControlType = {
    id?: string;
    helperTextId?: string;
    label?: string | React.ReactNode;
    helperText?: string | React.ReactNode;
    children: React.ReactElement;
    customCSS?: CSSInterpolation;
};

export default function FormControl({
    children,
    id = 'input',
    label = '',
    helperTextId = 'input-helper-text',
    helperText = '',
    customCSS = {}
}: FormControlType) {
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
