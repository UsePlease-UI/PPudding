/** @jsxImportSource @emotion/react */
import { ReactNode, TableHTMLAttributes } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { tableStyle } from './styles';

type BaseType = TableHTMLAttributes<HTMLTableElement> & CustomCSSType;

type TableType = BaseType & {
    children: ReactNode;
};

/**
 *  [UI Component] Table Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Table(props: TableType) {
    const { children, customCSS, ...rest } = props;

    return (
        <table {...rest} css={css([tableStyle.table, customCSS])}>
            {children}
        </table>
    );
}
