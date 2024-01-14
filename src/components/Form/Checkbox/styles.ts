import { css } from '@emotion/react';
import palette from 'styles/palette';

export type SizeType = 'small' | 'medium' | 'large';

// default -> 16px
// custom -> 20px
// every size -> + 4px more
const sizeStyle = {
    smallText: {
        fontSize: 12
    },
    smallDefault: css({
        width: 16,
        height: 16,
        margin: 2,
        '& svg': {
            width: 12,
            height: 12
        }
    }),
    smallCustom: css({
        width: 20,
        height: 20,
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    mediumText: {
        fontSize: 16
    },
    mediumDefault: css({
        width: 20,
        height: 20,
        margin: 2,
        '& svg': {
            width: 16,
            height: 16
        }
    }),
    mediumCustom: css({
        width: 24,
        height: 24,
        '& svg': {
            width: 24,
            height: 24
        }
    }),
    largeText: {
        fontSize: 20
    },
    largeDefault: css({
        width: 24,
        height: 24,
        margin: 2,
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    largeCustom: css({
        width: 28,
        height: 28,
        '& svg': {
            width: 28,
            height: 28
        }
    })
};

export const checkboxStyle = {
    pointer: css({
        pointerEvents: 'none'
    }),
    label: css({
        width: 'max-content',
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:focus-within > span:first-of-type, &:hover > span:first-of-type': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 4
        },
        '& > span:first-of-type': {
            padding: 4,
            display: 'inline-flex',
            alignItems: 'center'
        }
    }),
    input: css({
        '&:checked + span': {
            display: 'inline-flex'
        },
        '&:checked + span + span': {
            display: 'none'
        },
        '& + span': {
            display: 'none'
        }
    }),
    checkedIconContainer: css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    customCheckedIcon: css({
        '& svg': {
            color: palette.primary[600]
        }
    }),
    customCheckboxContainer: css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& svg': {
            strokeWidth: 2,
            color: palette.primary[600]
        }
    }),
    defaultCheckedIcon: css({
        borderRadius: 4,
        backgroundColor: palette.primary[600],
        '& svg': {
            strokeWidth: 4,
            color: palette.neutral.white
        }
    }),
    defaultCheckboxContainer: css({
        display: 'inline-block',
        borderRadius: 4,
        border: `2px solid ${palette.primary[600]}`,
        backgroundColor: palette.neutral.white
    }),
    disabledIcon: css({
        '& svg': {
            color: palette.gray[400]
        }
    }),
    disabledDefaultIcon: css({
        border: `2px solid ${palette.gray[400]}`,
        backgroundColor: palette.gray[400],
        '& svg': {
            color: palette.neutral.white
        }
    }),
    disabledCheckbox: css({
        borderColor: palette.gray[400]
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
                custom: sizeStyle.mediumCustom
            };
        case 'large':
            return {
                text: sizeStyle.largeText,
                default: sizeStyle.largeDefault,
                custom: sizeStyle.largeCustom
            };
        default:
            return {
                text: sizeStyle.smallText,
                default: sizeStyle.smallDefault,
                custom: sizeStyle.smallCustom
            };
    }
}
