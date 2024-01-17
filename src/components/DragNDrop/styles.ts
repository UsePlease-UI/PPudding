import { css } from '@emotion/react';
import palette from 'styles/palette';

export const dragNDropStyle = {
    list: css({
        width: '100%',
        borderRadius: 4,
        border: `1px solid ${palette.neutral.black}`,
        padding: '10px 0',
        background: palette.neutral.white
    }),
    listItem: css({
        padding: 10,
        borderBottom: `1px solid ${palette.gray[100]}`,
        '&:last-of-type': {
            borderBottom: 0
        },
        '&:hover': {
            background: palette.tertiary[400]
        }
    })
};
