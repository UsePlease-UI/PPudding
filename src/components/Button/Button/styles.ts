import { css } from '@emotion/react';

import { SizeType } from '../styles';

export const buttonStyle = {
    button: css({
        borderRadius: 4
    }),
    container: css({
        textAlign: 'center'
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
        '& svg': {
            width: 16,
            height: 16
        }
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
