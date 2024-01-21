import { css } from '@emotion/react';
import palette from 'styles/palette';

import { commonStyle } from '../styles';

export type SizeType = 'small' | 'medium' | 'large';

export const toggleButtonStyle = {
    label: css({
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: palette.neutral.white,
        borderColor: palette.primary[600],
        '& span': {
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: 'inherit',
            borderLeft: 0
        },
        '&:first-of-type span': {
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            borderLeftWidth: 1,
            borderLeftStyle: 'solid',
            borderColor: 'inherit'
        },
        '&:last-of-type span': {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4
        },
        '& input:checked + span': {
            color: palette.neutral.white,
            backgroundColor: palette.primary[600],
            '& svg': {
                color: palette.neutral.white
            }
        },
        '&:hover': {
            backgroundColor: palette.primary[50],
            '& svg, & span': {
                color: palette.primary[700]
            }
        },
        '&:focus-within': {
            borderColor: palette.primary[700],
            backgroundColor: palette.primary[100],
            '& svg, & span': {
                color: palette.primary[700]
            }
        },
        '& input:disabled + span': {
            color: palette['blue-gray'][600],
            borderColor: palette['blue-gray'][400],
            backgroundColor: palette['blue-gray'][50],
            '& svg': {
                color: palette['blue-gray'][600]
            }
        }
    }),
    iconButton: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            display: 'block',
            color: palette.primary[600]
        }
    }),
    labelText: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
};

const sizeStyle = {
    miniText: css({
        padding: 5,
        fontSize: 12,
        fontWeight: 600
    }),
    smallText: css({
        padding: 6,
        fontSize: 14
    }),
    mediumText: css({
        padding: 8,
        fontSize: 16
    }),
    largeText: css({
        padding: 8.5,
        fontSize: 18
    })
};

export function getSizeStyle(size?: SizeType) {
    switch (size) {
        case 'small':
            return { icon: commonStyle.smallIcon, text: sizeStyle.smallText };
        case 'medium':
            return { icon: commonStyle.mediumIcon, text: sizeStyle.mediumText };
        case 'large':
            return { icon: commonStyle.largeIcon, text: sizeStyle.largeText };
        default:
            return { icon: commonStyle.miniIcon, text: sizeStyle.miniText };
    }
}
