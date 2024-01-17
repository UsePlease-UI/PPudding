/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

import type { CustomCSSType } from 'styles/types';

import { Typography } from 'components/Base';

import { formControlStyle } from './styles';

type FormControlType = CustomCSSType & {
    children: ReactNode;
    id?: string;
    labelText?: string | ReactNode;
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
    const { children, id, labelText, helperTextId, helperText } = props;

    return (
        <div css={formControlStyle.container}>
            {labelText && (
                <Typography
                    component="label"
                    htmlFor={id}
                    fontSize={12}
                    fontWeight="600"
                    gutterBottom={4}
                    customCSS={formControlStyle.labelText}
                >
                    {labelText}
                </Typography>
            )}
            {children}
            {helperText && (
                <Typography
                    component="small"
                    id={helperTextId}
                    fontSize={10}
                    fontWeight="500"
                    customCSS={formControlStyle.helperText}
                >
                    {helperText}
                </Typography>
            )}
        </div>
    );
}
