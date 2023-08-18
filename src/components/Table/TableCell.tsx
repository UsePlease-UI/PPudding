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

const textStyle = css({ fontWeight: 600 });

/**
 *  [UI Component] Table Cell Component
 *  @param children 컴포넌트
 *  @param component 컴포넌트 타입 (td | th) [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableCell(props: TableCellType) {
    const { children, component = 'td', customCSS = {}, ...rest } = props;

    return component === 'td' ? (
        <td {...rest} css={css([tableCellStyle, customCSS])}>
            {children}
        </td>
    ) : (
        <th {...rest} css={css([tableCellStyle, textStyle, customCSS])}>
            {children}
        </th>
    );
}
