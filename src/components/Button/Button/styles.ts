import { css } from '@emotion/react';
import palette from 'styles/palette';

export type SizeType = 'large' | 'medium' | 'small' | '';
export type VariantType = 'outlined' | 'contained' | 'text' | '';

export const buttonStyle = {
    button: css({
        borderRadius: 4
    }),
    small: css({
        minHeight: 32,
        height: 'max-content',
        minWidth: 48,
        width: 'max-content',
        padding: '4px 12px',
        fontSize: 13,
        fontWeight: 400,
        '& svg': {
            width: 14,
            height: 14
        }
    }),
    medium: css({
        minHeight: 40,
        height: 'max-content',
        minWidth: 56,
        width: 'max-content',
        fontSize: 14,
        fontWeight: 500,
        padding: '4px 16px',
        '& svg': { width: 16, height: 16 }
    }),
    large: css({
        minHeight: 45,
        height: 'max-content',
        minWidth: 96,
        width: 'max-content',
        fontSize: 15,
        fontWeight: 500,
        padding: '4px 16px',
        '& svg': { width: 20, height: 20 }
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
    }),
    startIcon: css({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        marginLeft: -2
    }),
    endIcon: css({
        display: 'inline-flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 20,
        height: 20,
        marginRight: -2
    })
};

export function getSizeStyle(size: SizeType) {
    switch (size) {
        case 'large':
            return buttonStyle.large;
        case 'medium':
            return buttonStyle.medium;
        case 'small':
            return buttonStyle.small;
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
