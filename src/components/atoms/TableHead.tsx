/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type TableHeadType = React.HTMLAttributes<HTMLTableSectionElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

const tableHeadStyle = css({
    display: 'table-header-group',
    verticalAlign: 'middle',
    backgroundColor: '#fafafa',
    borderBottom: '1px solid #eeeeee',
    '& tr th': {
        padding: '12px'
    },
    '&:hover tr': {
        backgroundColor: 'inherit'
    }
});

export default function TableHead({ children, customCSS = {} }: TableHeadType) {
    return <thead css={css([tableHeadStyle, customCSS])}>{children}</thead>;
}
