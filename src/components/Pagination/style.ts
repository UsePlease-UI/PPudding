import { css } from '@emotion/react';
import { palette } from 'styles';

export const paginationStyle = {
    ul: css({
        display: 'flex',
        flexDirection: 'row',
        gap: '5px',
        flexWrap: 'wrap'
    }),
    list: css({
        width: 32,
        height: 32,
        display: 'flex',
        textDecoration: 'none',
        justifyContent: 'center',
        alignItems: 'center',
        '& button': {
            width: 'inherit',
            height: 'inherit'
        }
    }),
    nav: css({
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 20
    }),
    iconWrapper: css({
        cursor: 'pointer',
        width: 32,
        height: 32,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        '& svg': {
            width: '16px',
            height: '16px',
            stroke: `${palette.gray[500]}`
        },
        '&:disabled svg': {
            stroke: `${palette.gray[800]}`
        },
        '&:hover': {
            borderRadius: 4,
            backgroundColor: `${palette.primary[600]}`
        }
    }),
    pageButton: css({
        width: 32,
        height: 32,
        padding: 0,
        borderRadius: 4,
        fontSize: 15,
        fontWeight: 600,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: `${palette.primary[600]}`
        }
    })
};
