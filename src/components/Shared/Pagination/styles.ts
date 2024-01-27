import { css } from '@emotion/react';
import { palette } from 'styles';

export const paginationStyle = {
    list: css({
        display: 'flex',
        alignItems: 'center',
        gap: 10
    }),
    iconButton: {
        '& svg': {
            width: 22,
            height: 22
        }
    },
    button: {
        minWidth: 40,
        padding: 8
    },
    activeButton: {
        fontWeight: 900,
        color: palette.primary[600]
    }
};
