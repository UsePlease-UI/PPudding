/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

import { tableStyle } from './styles';

type BaseType = HTMLAttributes<HTMLTableSectionElement> & CustomCSSType;

type TableHeadType = BaseType & {
    children: ReactNode;
};

/**
 *  [UI Component] Table Head Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableHead(props: TableHeadType) {
    const { children, customCSS } = props;

    return <thead css={css([tableStyle.tableHead, customCSS])}>{children}</thead>;
}
