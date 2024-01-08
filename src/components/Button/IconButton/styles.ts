import { css } from '@emotion/react';
import palette from 'styles/palette';

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
    }),
    outlined: css({
        color: palette.primary['600'],
        backgroundColor: palette.neutral.white,
        border: `1px solid ${palette.primary['600']}`,
        '&:hover': {
            color: palette.neutral.white,
            border: `1px solid ${palette.primary['600']}`,
            backgroundColor: palette.tertiary['400']
        },
        '&:focus': {
            border: `1px solid ${palette.secondary['600']}`,
            backgroundColor: palette.primary['600']
        },
        '&:disabled': {
            border: `1px solid ${palette.gray['100']}`,
            backgroundColor: '#f4f4f4'
        }
    }),
    contained: css({
        color: palette.secondary['600'],
        backgroundColor: palette.tertiary['400'],
        border: `1px solid ${palette.tertiary['400']}`,
        '&:hover': {
            color: palette.neutral.white,
            backgroundColor: palette.primary['600']
        },
        '&:focus': {
            border: `1px solid ${palette.secondary['600']}`,
            backgroundColor: palette.secondary['600']
        },
        '&:disabled': {
            border: `1px solid ${palette.gray['100']}`,
            backgroundColor: '#145cb1b3'
        }
    }),
    text: css({
        color: palette.neutral.black,
        border: '1px solid #e6e6e6',
        backgroundColor: palette.neutral.white,
        '&:hover': {
            border: '1px solid #cccccc'
        },
        '&:focus': {
            border: `1px solid ${palette.neutral.black}`
        },
        '&:disabled': {
            color: '#cccccc',
            border: '1px solid #e6e6e6'
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
            return iconButtonStyle.outlined;
        case 'contained':
            return iconButtonStyle.contained;
        case 'text':
            return iconButtonStyle.text;
        default:
            return {};
    }
}
