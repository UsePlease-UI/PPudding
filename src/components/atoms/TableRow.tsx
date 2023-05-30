/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableRowType = React.HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

const tableRowStyle = css({
    display: 'table-row',
    borderBottom: '1px solid #eeeeee',
    '&:hover': {
        backgroundColor: 'pink'
    },
    '&:last-of-type': {
        borderBottom: 0
    }
});

export default function TableRow({ children, customCSS = {} }: TableRowType) {
    return <tr css={css([tableRowStyle, customCSS])}>{children}</tr>;
}
