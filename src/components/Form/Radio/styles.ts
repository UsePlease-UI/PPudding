import { css } from '@emotion/react';
import { palette } from 'styles';

export type SizeType = 'small' | 'medium' | 'large';

const sizeStyle = {
    smallContainer: css({
        '& > span:first-of-type': {
            width: 28,
            height: 28,
            padding: 4
        }
    }),
    smallText: {
        fontSize: 12
    },
    smallDefault: css({
        width: 16,
        height: 16,
        margin: 2,
        '& span': {
            width: 6,
            height: 6
        }
    }),
    mediumContainer: css({
        '& > span:first-of-type': {
            width: 32,
            height: 32,
            padding: 4
        }
    }),
    mediumText: {
        fontSize: 16
    },
    mediumDefault: css({
        width: 20,
        height: 20,
        margin: 2,
        '& span': {
            width: 10,
            height: 10
        }
    }),
    largeContainer: css({
        '& > span:first-of-type': {
            width: 36,
            height: 36,
            padding: 4
        }
    }),
    largeText: {
        fontSize: 20
    },
    largeDefault: css({
        width: 24,
        height: 24,
        margin: 2,
        '& span': {
            width: 12,
            height: 12
        }
    })
};

export const radioStyle = {
    label: css({
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:focus-within > span:first-of-type, &:hover > span:first-of-type': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 999
        }
    }),
    input: css({
        '&:checked + span': {
            display: 'flex'
        },
        '&:checked + span + span': {
            display: 'none'
        },
        '& + span': {
            display: 'none'
        }
    }),
    checkedRadio: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 999,
        border: `2px solid ${palette.primary[600]}`,
        backgroundColor: palette.neutral.white,
        '& span': {
            display: 'block',
            borderRadius: 999,
            backgroundColor: palette.primary[600]
        }
    }),
    radio: css({
        display: 'block',
        borderRadius: 999,
        border: `2px solid ${palette.primary[600]}`,
        backgroundColor: palette.neutral.white
    }),
    labelText: {
        marginLeft: 8
    }
};

export function getSizeStyle(size?: SizeType) {
    switch (size) {
        case 'medium':
            return {
                text: sizeStyle.mediumText,
                default: sizeStyle.mediumDefault,
                container: sizeStyle.mediumContainer
            };
        case 'large':
            return {
                text: sizeStyle.largeText,
                default: sizeStyle.largeDefault,
                container: sizeStyle.largeContainer
            };
        default:
            return {
                text: sizeStyle.smallText,
                default: sizeStyle.smallDefault,
                container: sizeStyle.smallContainer
            };
    }
}
