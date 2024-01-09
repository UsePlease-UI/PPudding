import { css } from '@emotion/react';

import { buttonStyle } from '../Button/styles';

export type SizeType = 'large' | 'medium' | 'small' | '';
export type VariantType = 'outlined' | 'contained' | 'text' | '';

export const iconButtonStyle = {
    iconButton: css({
        borderRadius: 4
    }),
    small: css({
        height: 32,
        width: 32,
        '& svg': {
            width: 12,
            height: 12
        }
    }),
    medium: css({
        height: 40,
        width: 40,
        '& svg': {
            width: 16,
            height: 16
        }
    }),
    large: css({
        height: 45,
        width: 45,
        '& svg': {
            width: 20,
            height: 20
        }
    })
};

export function getSizeStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return iconButtonStyle.large;
        case 'medium':
            return iconButtonStyle.medium;
        case 'small':
            return iconButtonStyle.small;
        default:
            return {};
    }
}

export function getVariantStyle(variant: VariantType) {
    switch (variant) {
        case 'outlined':
            return buttonStyle.outlined;
        case 'contained':
            return buttonStyle.contained;
        case 'text':
            return buttonStyle.text;
        default:
            return {};
    }
}
