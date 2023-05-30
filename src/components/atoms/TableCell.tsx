/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableCellType = React.ThHTMLAttributes<HTMLTableCellElement> &
    React.TdHTMLAttributes<HTMLTableCellElement> & {
        children: string | React.ReactNode;
        component?: 'th' | 'td';
        customCSS?: CSSInterpolation;
    };

const tableCellStyle = css({
    display: 'table-cell',
    height: '100%',
    padding: '8px 10px',
    fontSize: 14,
    lineHeight: 1.5,
    fontWeight: 400
});

const textStyle = css({
    fontWeight: 600
});

export default function TableCell({ children, component = 'td', customCSS = {}, ...props }: TableCellType) {
    return component === 'td' ? (
        <td {...props} css={css([tableCellStyle, customCSS])}>
            {children}
        </td>
    ) : (
        <th {...props} css={css([tableCellStyle, textStyle, customCSS])}>
            {children}
        </th>
    );
}
