import { css, keyframes } from '@emotion/react';
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
        '@media (max-width: 430px)': {
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
        '@media (max-width: 430px)': {
            padding: 10,
            minHeight: 'calc(100vh - 120px)'
        },
        '@media (max-width: 1920px)': {
            overflow: 'hidden'
        }
    })
};

const stroke = keyframes`
0% {
    stroke-dashoffset: 350px;
}
50% {
    stroke-dashoffset: 0px;
}
100% {
    stroke-dashoffset: 350px;
}
`;

export const headerStyle = {
    header: css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1,
        height: 80,
        borderBottom: `1px dashed ${palette.neutral.white}`,
        backgroundColor: palette.primary[600],
        padding: '0 20px'
    }),
    headerContainer: {
        width: '100%',
        height: '100%',
        maxWidth: 1536,
        margin: '0 auto'
    },
    headerText: {
        width: 600,
        display: 'flex',
        alignItems: 'center'
    },
    svg: css({
        fill: palette.neutral.white
    }),
    svgText: css({
        fontFamily: 'monospace',
        fontSize: 70,
        letterSpacing: -5,
        stroke: palette.secondary[600],
        strokeWidth: 2,
        strokeDasharray: 350,
        animation: `${stroke} 3s infinite`,
        '@media (max-width: 430px)': {
            fontSize: 160
        }
    })
};
