/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

import { loaderStyle } from './styles';

type SkeletonType = {
    customCSS?: CSSInterpolation;
};

/**
 *  [UI Component] Skeleton Component
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Skeleton({ customCSS }: SkeletonType) {
    return <div css={css([loaderStyle.skeleton, customCSS])} />;
}
