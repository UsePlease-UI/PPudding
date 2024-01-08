import { css } from '@emotion/react';
import palette from 'styles/palette';

export const checkboxStyle = {
    label: css({
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& > span:first-of-type': {
            padding: 4,
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer'
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
    checked: css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        borderRadius: 4,
        '& > svg': {
            width: 18,
            height: 18
        }
    }),
    checkbox: css({
        display: 'inline-block',
        width: 20,
        height: 20,
        borderRadius: 4,
        border: `1px solid ${palette.gray['100']}`,
        backgroundColor: palette.neutral.white
    }),
    iconCheckbox: css({
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        '& > svg': {
            width: 18,
            height: 18
        }
    }),
    labelText: css({
        marginLeft: 4
    })
};
