/** @jsxImportSource @emotion/react */
import { HTMLAttributes, ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

type BaseType = HTMLAttributes<HTMLTableSectionElement> & CustomCSSType;

type TableBodyType = BaseType & {
    children: ReactNode;
};

/**
 *  [UI Component] Table Body Component
 *  @param children 컴포넌트
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function TableBody(props: TableBodyType) {
    const { children, customCSS } = props;

    return <tbody css={css(customCSS)}>{children}</tbody>;
}
