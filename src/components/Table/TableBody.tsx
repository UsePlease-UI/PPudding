/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableBodyType = React.HTMLAttributes<HTMLTableSectionElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Table Body Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableBody(props: TableBodyType) {
    const { children, customCSS } = props;

    return <tbody css={css(customCSS)}>{children}</tbody>;
}
