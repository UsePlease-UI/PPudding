import { css } from '@emotion/react';
import { palette } from 'styles';

export const layoutStyle = {
    header: css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: 80,
        display: 'flex',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: palette.neutral.white,
        boxShadow: `1px 1px 10px 1px ${palette.primary[100]}`,
        '@media (min-width: 1512px)': {
            height: 'auto',
            padding: 0,
            right: 'unset',
            bottom: 0,
            justifyContent: 'center',
            width: 320,
            backgroundColor: palette.primary[600],
            boxShadow: 'unset'
        }
    }),
    heading: css({
        textTransform: 'uppercase',
        '@media (min-width: 1512px)': {
            fontSize: 56,
            color: palette.neutral.white
        }
    }),
    gnbContainer: {
        position: 'fixed' as const,
        top: 0,
        right: 0
    },
    container: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: palette.neutral.white,
        borderRadius: 4,
        paddingTop: 80,
        '@media (min-width: 1512px)': {
            paddingTop: 120
        }
    },
    main: {
        flex: 1,
        width: '100%',
        margin: 20,
        h2: {
            fontSize: 32,
            marginBottom: 20
        },
        '@media (min-width: 1512px)': {
            width: 'calc(100% - 320px)',
            marginLeft: 400,
            marginRight: 'auto'
        }
    },
    contents: {
        height: '100%',
        maxWidth: 1024,
        margin: '0 auto',
        '@media (min-width: 1512px)': {
            margin: 0
        }
    }
};
