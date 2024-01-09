import { css } from '@emotion/react';
import palette from 'styles/palette';

export const accordionStyle = {
    heading: css({
        minWidth: 250,
        width: '100%',
        minHeight: 60,
        border: `1px solid ${palette.gray[100]}`,
        borderRadius: 4,
        backgroundColor: palette.primary[600]
    }),
    button: css({
        width: '100%',
        height: '100%',
        minHeight: 'inherit',
        padding: '5px 20px'
    }),
    title: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 18,
        fontWeight: 600,
        lineHeight: 1.5,
        color: palette.neutral.white,
        '& *': {
            color: palette.neutral.white,
            fontSize: 18,
            fontWeight: 600,
            lineHeight: 1.5
        }
    }),
    icon: css({
        width: 20,
        height: 20,
        '& svg': {
            width: 20,
            height: 20
        }
    }),
    panel: css({
        backgroundColor: palette.neutral.white,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        marginTop: -1,
        marginBottom: -1,
        fontSize: 14,
        lineHeight: 1.5,
        '& *': {
            fontSize: 14,
            lineHeight: 1.5
        }
    })
};
