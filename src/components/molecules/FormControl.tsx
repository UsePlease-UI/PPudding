/** @jsxImportSource @emotion/react */
import React from 'react';

import { CSSInterpolation } from '@emotion/serialize';

import FlexBox from 'components/atoms/FlexBox';
import InputHelperText from 'components/atoms/InputHelperText';
import InputLabel from 'components/atoms/InputLabel';

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
    id = 'textfield',
    label = '',
    helperTextId = 'textfield-helper-text',
    helperText = '',
    customCSS = {}
}: FormControlType) {
    return (
        <FlexBox direction="column" customCSS={customCSS}>
            <InputLabel id={id} label={label} />
            {React.cloneElement(children, { 'aria-label': id, 'aria-describedby': helperTextId })}
            <InputHelperText id={helperTextId} text={helperText} />
        </FlexBox>
    );
}
