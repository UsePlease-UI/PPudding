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
