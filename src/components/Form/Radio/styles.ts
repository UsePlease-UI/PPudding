import { css } from '@emotion/react';
import { palette } from 'styles';

export const radioStyle = {
    label: css({
        display: 'inline-flex',
        alignItems: 'center',
        cursor: 'pointer',
        '& > span:first-of-type': {
            width: 24,
            height: 24,
            padding: 4
        },
        '&:hover > span:first-of-type': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderRadius: 999
        }
    }),
    input: css({
        '&:checked + span': {
            display: 'block'
        },
        '&:checked + span + span': {
            display: 'none'
        },
        '& + span': {
            display: 'none'
        }
    }),
    checkedRadio: css({
        display: 'inline-block',
        width: 16,
        height: 16,
        borderRadius: 999,
        border: `1px solid ${palette.gray[100]}`,
        backgroundColor: palette.primary[600]
    }),
    radio: css({
        display: 'inline-block',
        width: 16,
        height: 16,
        borderRadius: 999,
        border: `1px solid ${palette.gray[100]}`,
        backgroundColor: palette.neutral.white
    }),
    labelText: css({
        marginLeft: 4
    })
};
