import { css } from '@emotion/react';
import { palette } from 'styles';

export const tabStyle = {
    tabList: css({
        width: '100%',
        minHeight: 80,
        backgroundColor: palette.gray[50],
        borderBottom: `1px solid ${palette.gray[100]}`
    }),
    tabContainer: {
        width: '100%',
        height: '100%'
    },
    button: css({
        width: '100%',
        height: '100%',
        minHeight: 80,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        cursor: 'pointer'
    }),
    icon: css({
        width: 16,
        height: 16,
        '& svg': {
            width: 16,
            height: 16,
            color: palette.primary[600]
        }
    }),
    text: css({
        margin: '20px 4px',
        color: palette.neutral.black,
        fontSize: 14,
        fontWeight: 500
    }),
    indicator: css({
        width: '80%',
        height: 2,
        borderRadius: 999,
        backgroundColor: palette.primary[600]
    }),
    panel: css({
        width: '100%',
        height: '100%',
        minHeight: 250,
        padding: 20
    })
};
