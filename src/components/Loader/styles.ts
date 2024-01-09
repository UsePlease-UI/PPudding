import { css, keyframes } from '@emotion/react';
import { palette } from 'styles';

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

export const loaderStyle = {
    skeleton: css({
        cursor: 'progress',
        width: '100%',
        height: 30,
        borderRadius: 4,
        backgroundColor: palette.gray[100],
        animation: `${blink} 2s ease-in-out infinite`
    })
};
