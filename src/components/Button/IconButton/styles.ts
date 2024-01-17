import { css } from '@emotion/react';

import { IconButtonSizeType } from '../styles';

export const iconButtonStyle = {
    iconButton: css({
        width: 'max-content',
        height: 'max-content',
        borderRadius: 4,
        '& svg': {
            display: 'block'
        }
    }),
    mini: css({
        padding: 6,
        '& svg': {
            width: 16,
            height: 16
        }
    }),
    small: css({
        padding: 8,
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    medium: css({
        padding: 8,
        '& svg': {
            width: 24,
            height: 24
        }
    }),
    large: css({
        padding: 8,
        '& svg': {
            width: 28,
            height: 28
        }
    })
};

export function getSizeStyle(size?: IconButtonSizeType) {
    switch (size) {
        case 'large':
            return iconButtonStyle.large;
        case 'medium':
            return iconButtonStyle.medium;
        case 'small':
            return iconButtonStyle.small;
        default:
            return iconButtonStyle.mini;
    }
}
