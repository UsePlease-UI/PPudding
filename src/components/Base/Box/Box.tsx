/** @jsxImportSource @emotion/react */
import { ReactNode } from 'react';

import { css } from '@emotion/react';
import type { CustomCSSType } from 'styles/types';

type BoxType = CustomCSSType & {
    children: ReactNode;
};

/**
 *  Styled Div Component
 *  @param children ReactNode
 *  @param customCSS 커스텀 css [optional]
 *  @returns JSX.Element
 */
const Box = ({ children, customCSS }: BoxType) => {
    return <div css={css(customCSS)}>{children}</div>;
};

export default Box;
