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
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    outlined: css({
        color: palette.primary[600],
        backgroundColor: palette.neutral.white,
        border: `1px solid ${palette.primary[600]}`,
        '&:hover': {
            color: palette.primary[700],
            border: `1px solid ${palette.primary[600]}`,
            backgroundColor: palette.primary[50]
        },
        '&:focus': {
            color: palette.primary[700],
            border: `1px solid ${palette.secondary[700]}`,
            backgroundColor: palette.primary[100]
        },
        '&:disabled': {
            color: palette['blue-gray'][600],
            border: `1px solid ${palette['blue-gray'][400]}`,
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
