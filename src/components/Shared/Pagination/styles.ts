import { css } from '@emotion/react';

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
    }
};
