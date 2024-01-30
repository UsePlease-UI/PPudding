import { css } from '@emotion/react';
import { palette } from 'styles';

import { SizeType, VariantType } from 'components/Button/styles';

export const paginationStyle = {
    list: css({
        display: 'flex',
        alignItems: 'center',
        gap: 10
    }),
    mediumButton: {
        minHeight: 42,
        minWidth: 42,
        padding: 8,
        fontSize: 16
    },
    smallButton: {
        minHeight: 35,
        minWidth: 35,
        padding: 5,
        fontSize: 12,
        fontWeight: 600
    },
    largeButton: {
        minWidth: 46,
        minHeight: 46,
        padding: 8,
        fontSize: 18
    },
    activeButton: {
        fontWeight: 900,
        color: palette.primary[600]
    }
};

export function getButtonSizeStyle(size?: SizeType) {
    switch (size) {
        case 'large':
            return paginationStyle.largeButton;
        case 'medium':
            return paginationStyle.mediumButton;
        default:
            return paginationStyle.smallButton;
    }
}

export function getActiveVariant(isActive: boolean, variant: VariantType) {
    let activeVariant = 'outlined';
    if (variant === 'text') {
        activeVariant = 'text';
    } else if ((variant === 'contained' && !isActive) || (variant === 'outlined' && isActive)) {
        activeVariant = 'contained';
    }
    return activeVariant as VariantType;
}
