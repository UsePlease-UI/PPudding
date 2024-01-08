import { css } from '@emotion/react';
import palette from 'styles/palette';

export const chipStyle = {
    chip: css({
        width: 'max-content',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 999,
        border: `1px solid ${palette.primary['600']}`,
        color: palette.neutral.black,
        backgroundColor: palette.neutral.white
    }),
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: `1px solid ${palette.primary['600']}`,
        borderRadius: 999,
        padding: 5,
        backgroundColor: palette.neutral.white,
        '&:hover': {
            backgroundColor: palette.primary['600'],
            '& svg': {
                color: palette.neutral.white
            }
        },
        '& svg': {
            height: 12,
            width: 12,
            strokeWidth: 4,
            color: palette.primary['600']
        }
    }
};
