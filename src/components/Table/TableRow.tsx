/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { tableStyle } from './styles';

type BaseType = HTMLAttributes<HTMLTableRowElement> & CustomCSSType;

type TableRowType = BaseType & {
    children: ReactNode;
};

/**
 *  [UI Component] Table Row Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableRow(props: TableRowType) {
    const { children, customCSS } = props;

    return <tr css={css([tableStyle.tableRow, customCSS])}>{children}</tr>;
}
