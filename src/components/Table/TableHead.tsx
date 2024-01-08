/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import palette from 'styles/palette';

type TableHeadType = React.HTMLAttributes<HTMLTableSectionElement> & {
    children: React.ReactNode;
    customCSS?: CSSInterpolation;
};

const tableHeadStyle = css({
    display: 'table-header-group',
    verticalAlign: 'middle',
    backgroundColor: '#fafafa',
    borderBottom: `1px solid ${palette.gray['100']}`,
    '& tr th': {
        padding: '12px'
    },
    '&:hover tr': {
        backgroundColor: 'inherit'
    }
});

/**
 *  [UI Component] Table Head Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableHead(props: TableHeadType) {
    const { children, customCSS } = props;

    return <thead css={css([tableHeadStyle, customCSS])}>{children}</thead>;
}
