/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

type SkeletonType = {
    customCSS?: CSSInterpolation;
};

const blink = keyframes`
    0% {
        opacity: 0.4;
    }
    50%{
        opacity: 1;
    }
    100% {
        opacity: 0.4;
    }
`;

const skeletonStyle = css({
    cursor: 'progress',
    width: '100%',
    height: 30,
    borderRadius: 4,
    backgroundColor: '#eeeeee',
    animation: `${blink} 2s ease-in-out infinite`
});

/**
 *  [UI Component] Skeleton Component
 *  @param customCSS 커스텀 CSS [optional]
 *  @returns JSX.Element
 */
export default function Skeleton({ customCSS = {} }: SkeletonType) {
    return <div css={css([skeletonStyle, customCSS])} />;
}
