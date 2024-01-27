import { css } from '@emotion/react';
import { palette } from 'styles';

export type SizeType = 'large' | 'medium' | 'small';
export type IconButtonSizeType = SizeType | 'mini';
export type VariantType = 'outlined' | 'contained' | 'text';
export type ShapeType = 'square' | 'rounded' | 'circular';

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
            backgroundColor: palette.primary[700]
        },
        '&:focus': {
            backgroundColor: palette.primary[800],
            border: `1px solid ${palette.primary[800]}`
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
            backgroundColor: palette.gray[50]
        },
        '&:focus': {
            backgroundColor: palette.gray[100]
        },
        '&:disabled': {
            color: palette.gray[600]
        }
    }),
    miniIcon: css({
        padding: 6,
        '& svg': {
            width: 16,
            height: 16
        }
    }),
    smallIcon: css({
        padding: 6.5,
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    mediumIcon: css({
        padding: 8,
        '& svg': {
            width: 24,
            height: 24
        }
    }),
    largeIcon: css({
        padding: 8,
        '& svg': {
            width: 28,
            height: 28
        }
    }),
    rounded: css({
        borderRadius: 4
    }),
    circular: css({
        borderRadius: '50%'
    }),
    square: css({
        borderRadius: 0
    })
};

export function getVariantStyle(variant?: VariantType) {
    return variant ? commonStyle[variant] : null;
}

export function getSizeStyle(size?: IconButtonSizeType) {
    switch (size) {
        case 'large':
            return commonStyle.largeIcon;
        case 'medium':
            return commonStyle.mediumIcon;
        case 'small':
            return commonStyle.smallIcon;
        default:
            return commonStyle.miniIcon;
    }
}

export function getShapeStyle(shape?: ShapeType) {
    return shape ? commonStyle[shape] : commonStyle.rounded;
}
