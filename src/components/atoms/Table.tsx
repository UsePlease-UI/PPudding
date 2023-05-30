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

export default function Table({ children, customCSS = {}, ...props }: TableType) {
    return (
        <table {...props} css={css([tableStyle, customCSS])}>
            {children}
        </table>
    );
}
