/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableCaptionType = {
    children: string | React.ReactNode;
    customCSS?: CSSInterpolation;
};

const captionStyle = css({
    textAlign: 'left',
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 600,
    padding: '8px 0'
});

export default function TableCaption({ children, customCSS = {} }: TableCaptionType) {
    return <caption css={css([captionStyle, customCSS])}>{children}</caption>;
}
