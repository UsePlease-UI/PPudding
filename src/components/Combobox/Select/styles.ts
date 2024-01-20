import { css } from '@emotion/react';
import { palette } from 'styles';

export const MAX_MENU_HEIGHT = 300;
export const AVG_OPTION_HEIGHT = 24;
export const MIN_OFFSET = 20;

export const selectStyle = {
    container: css({
        position: 'relative',
        '&:hover > button': {
            border: `1px solid ${palette.gray[400]}`
        }
    }),
    button: css({
        height: 40,
        minWidth: 120,
        padding: '0 8px 0 12px',
        border: `1px solid ${palette.gray[100]}`,
        borderRadius: 4,
        backgroundColor: palette.neutral.white,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '&:focus': {
            border: `1px solid ${palette.gray[600]}`
        },
        '&:disabled': {
            color: palette.neutral.black,
            backgroundColor: palette.gray[100]
        }
    }),
    buttonReadOnly: css({
        '&&': {
            border: `1px solid ${palette.gray[500]}`,
            backgroundColor: palette.gray[100]
        }
    }),
    buttonText: css({
        flex: 1,
        textAlign: 'left',
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap'
    }),
    icon: css({
        display: 'block',
        width: 20,
        height: 20,
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    listContainer: css({
        position: 'fixed',
        width: '100%'
    })
};
