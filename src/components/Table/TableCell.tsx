/** @jsxImportSource @emotion/react */
import { ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import type { CustomCSSType } from 'styles/types';

import { tableStyle } from './styles';

type BaseType = ThHTMLAttributes<HTMLTableCellElement> & TdHTMLAttributes<HTMLTableCellElement> & CustomCSSType;

type TableCellType = BaseType & {
    children: string | ReactNode;
    component?: 'th' | 'td';
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Table Cell Component
 *  @param children 컴포넌트
 *  @param component 컴포넌트 타입 (td | th) [optional]
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableCell(props: TableCellType) {
    const { children, component = 'td', customCSS, ...rest } = props;

    return component === 'td' ? (
        <td {...rest} css={css([tableStyle.tableCell, customCSS])}>
            {children}
        </td>
    ) : (
        <th {...rest} css={css([tableStyle.tableCell, tableStyle.text, customCSS])}>
            {children}
        </th>
    );
}
