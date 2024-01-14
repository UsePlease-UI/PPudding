import { css } from '@emotion/react';
import { palette } from 'styles';

export const baseLayoutStyle = {
    layout: css({
        margin: '0 auto',
        backgroundColor: palette.primary[600]
    }),
    main: css({
        marginTop: 80,
        padding: 60,
        transition: 'margin 0.5s ease-in-out',
        '@media (max-width: 425px)': {
            padding: 20
        },
        '@media (max-width: 768px)': {
            marginLeft: 0
        }
    }),
    section: css({
        width: '100%',
        maxWidth: 1536,
        margin: '0 auto',
        padding: 40,
        borderRadius: 5,
        backgroundColor: palette.neutral.white,
        '@media (max-width: 425px)': {
            padding: 10,
            minHeight: 'calc(100vh - 120px)'
        }
    })
};
