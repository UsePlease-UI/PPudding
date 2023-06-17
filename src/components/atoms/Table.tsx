/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableType = React.TableHTMLAttributes<HTMLTableElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

const tableStyle = css({
    width: '100%',
    height: '100%',
    display: 'table',
    backgroundColor: '#ffffff',
    borderCollapse: 'collapse',
    border: '1px solid #eeeeee'
});

/**
 *  [UI Component] Table Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Table(props: TableType) {
    const { children, customCSS = {}, ...rest } = props;

    return (
        <table {...rest} css={css([tableStyle, customCSS])}>
            {children}
        </table>
    );
}
