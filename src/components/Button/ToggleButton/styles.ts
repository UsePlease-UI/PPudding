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
        backgroundColor: '#ffffff',
        '& span': {
            padding: '0 16px',
            border: '1px solid #eeeeee',
            borderLeft: 0
        },
        '&:first-of-type span': {
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
            borderLeft: '1px solid #eeeeee'
        },
        '&:last-of-type span': {
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4
        },
        '& input:checked + span': {
            color: '#ffffff',
            backgroundColor: palette.primary.main
        }
    }),

    labelText: css({
        display: 'inline-block',
        minWidth: 'inherit',
        height: 'inherit',
        color: '#000000',
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 'inherit',
        textAlign: 'center',
        textTransform: 'uppercase'
    })
};
