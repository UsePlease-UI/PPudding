import { css } from '@emotion/react';
import palette from 'styles/palette';

export const toggleButtonStyle = {
    label: css({
        minWidth: 80,
        height: 40,
        lineHeight: '40px',
        display: 'inline-block',
        overflow: 'hidden',
        cursor: 'pointer',
        backgroundColor: palette.neutral.white,
        '& span': {
            padding: '0 16px',
            border: `1px solid ${palette.gray['100']}`,
            borderLeft: 0
        },
        '&:first-of-type span': {
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            borderLeft: `1px solid ${palette.gray['100']}`
        },
        '&:last-of-type span': {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4
        },
        '& input:checked + span': {
            color: palette.neutral.white,
            backgroundColor: palette.primary['600']
        }
    }),
    labelText: css({
        display: 'inline-block',
        minWidth: 'inherit'
    })
};
