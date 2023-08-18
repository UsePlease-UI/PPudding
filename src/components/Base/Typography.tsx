/** @jsxImportSource @emotion/react */
import React from 'react';

import { css, jsx } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TypographyType = React.HTMLAttributes<HTMLElement> &
    React.LabelHTMLAttributes<HTMLLabelElement> & {
        component: string;
        children: React.ReactNode;
        customCSS?: CSSInterpolation;
    };

/**
 *  [UI Component] Typography
 *  @param component 컴포넌트 type (h1, h2 ...)
 *  @param children 텍스트 | 컴포넌트
 *  @param customCSS 커스텀 css [optional]
 *  @returns EmotionJSX.Element
 */
export default function Typography({ component, customCSS, children, ...rest }: TypographyType) {
    return <>{jsx(component, { css: css(customCSS), ...rest }, children)}</>;
}
