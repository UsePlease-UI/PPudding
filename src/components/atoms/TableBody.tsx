/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableBodyType = React.HTMLAttributes<HTMLTableSectionElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

export default function TableBody({ children, customCSS = {} }: TableBodyType) {
    return <tbody css={css([customCSS])}>{children}</tbody>;
}
