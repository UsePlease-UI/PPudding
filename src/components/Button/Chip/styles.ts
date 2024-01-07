import { css } from '@emotion/react';
import palette from 'styles/palette';

export const chipStyle = {
    chip: css({
        width: 'max-content',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 999,
        border: `1px solid ${palette.primary.main}`,
        color: '#000000',
        backgroundColor: '#ffffff'
    }),
    label: css({
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 500
    }),
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        border: `1px solid ${palette.primary.main}`,
        borderRadius: 999,
        padding: 5,
        backgroundColor: '#ffffff',
        '&:hover': {
            backgroundColor: palette.primary.main,
            '& svg': {
                color: '#ffffff'
            }
        },
        '& svg': {
            height: 12,
            width: 12,
            strokeWidth: 4,
            color: palette.primary.main
        }
    }
};
