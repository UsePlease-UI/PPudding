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
        color: palette.primary.main,
        backgroundColor: '#ffffff',
        border: `1px solid ${palette.primary.main}`,
        '&:hover': {
            color: '#ffffff',
            border: `1px solid ${palette.primary.main}`,
            backgroundColor: palette.lightBlue.main
        },
        '&:focus': {
            border: `1px solid ${palette.secondary.main}`,
            backgroundColor: palette.primary.main
        },
        '&:disabled': {
            border: '1px solid #eeeeee',
            backgroundColor: '#f4f4f4'
        }
    }),
    contained: css({
        color: palette.secondary.main,
        backgroundColor: palette.lightBlue.main,
        border: `1px solid ${palette.lightBlue.main}`,
        '&:hover': {
            color: '#ffffff',
            backgroundColor: palette.primary.main
        },
        '&:focus': {
            border: `1px solid ${palette.secondary.main}`,
            backgroundColor: palette.secondary.main
        },
        '&:disabled': {
            border: '1px solid #eeeeee',
            backgroundColor: '#145cb1b3'
        }
    }),
    text: css({
        color: '#000000',
        border: '1px solid #e6e6e6',
        backgroundColor: '#ffffff',
        '&:hover': {
            border: '1px solid #cccccc'
        },
        '&:focus': {
            border: '1px solid #000000'
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
