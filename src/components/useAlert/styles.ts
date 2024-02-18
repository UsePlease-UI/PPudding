import { css } from '@emotion/react';

export const providerStyle = {
    container: css({
        position: 'absolute',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 10
    })
};

export function getPositionStyle(position?: string) {
    switch (position) {
        case 'top-right':
            return css({ top: 20, right: 20 });
        case 'top-left':
            return css({ top: 20, left: 20 });
        case 'top-center':
            return css({ top: 20, left: '50%', transform: 'translateX(-50%)' });
        case 'bottom-left':
            return css({ bottom: 20, left: 20 });
        case 'bottom-center':
            return css({ bottom: 20, left: '50%', transform: 'translateX(-50%)' });
        default:
            return css({ bottom: 20, right: 20 });
    }
}
