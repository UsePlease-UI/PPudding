import { css, keyframes } from '@emotion/react';
import { palette } from 'styles';

export const fadeIn = keyframes`
    0% {
        bottom: 0;
        opacity: 0;
    }
    100% {
        bottom: 30px;
        opacity: 1;
    }
`;

export const fadeOut = keyframes`
    0% {
        bottom: 30px;
        opacity: 1;
    }
    100% {
        bottom: 0;
        opacity: 0;
    }
`;

export const alertStyle = {
    alert: css({
        minWidth: 280,
        width: '100%',
        minHeight: 48,
        padding: '9px 12px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12
    }),
    text: {
        whiteSpace: 'pre-wrap' as const,
        wordBreak: 'break-all' as const
    },
    divider: css({
        width: 1,
        height: 20,
        margin: '0 10px'
    }),
    iconButton: {
        padding: 0,
        color: 'inherit',
        backgroundColor: 'transparent',
        '& svg': {
            color: 'inherit',
            strokeWidth: 2
        }
    }
};

export function getVariantStyle(variant = 'default') {
    switch (variant) {
        case 'error':
            return css({ backgroundColor: '#ff2f2f', color: palette.neutral.white });
        case 'info':
            return css({ backgroundColor: '#3b82f6', color: palette.neutral.white });
        case 'warning':
            return css({ backgroundColor: '#eab308', color: palette.neutral.black });
        case 'success':
            return css({ backgroundColor: '#225cce', color: palette.neutral.white });
        default:
            return css({ backgroundColor: palette.neutral.black, color: palette.neutral.white });
    }
}
