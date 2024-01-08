/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from 'styles/palette';

type TableRowType = React.HTMLAttributes<HTMLTableRowElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

const tableRowStyle = css({
    display: 'table-row',
    borderBottom: `1px solid ${palette.gray['100']}`,
    '&:hover': {
        backgroundColor: 'pink'
    },
    '&:last-of-type': {
        borderBottom: 0
    }
});

/**
 *  [UI Component] Table Row Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableRow(props: TableRowType) {
    const { children, customCSS } = props;

    return <tr css={css([tableRowStyle, customCSS])}>{children}</tr>;
}
