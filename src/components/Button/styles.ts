import { css } from '@emotion/react';
import { palette } from 'styles';

export type SizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = SizeType | 'mini';
export type VariantType = 'outlined' | 'contained' | 'text';

export const commonStyle = {
    outlined: css({
        color: palette.primary[600],
        backgroundColor: palette.neutral.white,
        border: `1px solid ${palette.primary[600]}`,
        '&:hover': {
            color: palette.primary[700],
            backgroundColor: palette.primary[50]
        },
        '&:focus': {
            color: palette.primary[700],
            borderColor: palette.primary[700],
            backgroundColor: palette.primary[100]
        },
        '&:disabled': {
            color: palette['blue-gray'][600],
            borderColor: palette['blue-gray'][400],
            backgroundColor: palette['blue-gray'][50]
        }
    }),
    contained: css({
        color: palette.neutral.white,
        backgroundColor: palette.primary[600],
        border: `1px solid ${palette.primary[600]}`,
        '&:hover': {
            backgroundColor: palette.primary[500]
        },
        '&:focus': {
            backgroundColor: palette.primary[700],
            border: `1px solid ${palette.primary[700]}`
        },
        '&:disabled': {
            color: palette.gray[200],
            border: `1px solid ${palette.gray[400]}`,
            backgroundColor: palette.gray[400]
        }
    }),
    text: css({
        color: palette.neutral.black,
        border: '1px solid transparent',
        backgroundColor: palette.neutral.white,
        '&:hover': {
            border: `1px solid ${palette.gray[600]}`
        },
        '&:focus': {
            backgroundColor: palette.gray[50],
            border: `1px solid ${palette.neutral.black}`
        },
        '&:disabled': {
            color: palette.gray[600]
        }
    })
};

export function getVariantStyle(variant?: VariantType) {
    switch (variant) {
        case 'outlined':
            return commonStyle.outlined;
        case 'contained':
            return commonStyle.contained;
        case 'text':
            return commonStyle.text;
        default:
            return {};
    }
}
