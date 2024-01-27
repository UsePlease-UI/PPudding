import { css } from '@emotion/react';

import { ShapeType, SizeType, commonStyle } from '../styles';

export const buttonStyle = {
    button: css({
        fontFamily: 'inherit'
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
    }),
    smallCircular: css({
        minWidth: 32,
        minHeight: 32,
        borderRadius: '50%',
        padding: 0
    }),
    mediumCircular: css({
        minWidth: 40,
        minHeight: 40,
        borderRadius: '50%',
        padding: 0
    }),
    largeCircular: css({
        minWidth: 45,
        minHeight: 45,
        borderRadius: '50%',
        padding: 0
    })
};

export function getSizeStyle(size?: SizeType) {
    return size ? buttonStyle[size] : null;
}

export function getIconShapeStyle(shape: ShapeType = 'rounded') {
    return shape ? commonStyle[shape] : commonStyle.rounded;
}

export function getShapeStyle(size?: SizeType, shape: ShapeType = 'rounded') {
    if (shape === 'circular') {
        switch (size) {
            case 'large':
                return buttonStyle.largeCircular;
            case 'medium':
                return buttonStyle.mediumCircular;
            default:
                return buttonStyle.smallCircular;
        }
    }

    return commonStyle[shape];
}
