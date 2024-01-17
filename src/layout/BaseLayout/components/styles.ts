import { css, keyframes } from '@emotion/react';
import { palette } from 'styles';

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
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }),
    headerText: {
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
        '@media (max-width: 425px)': {
            fontSize: 200
        }
    }),
    hamburgerButton: {
        color: palette.primary[600],
        backgroundColor: palette.primary[50],
        border: `1px dashed ${palette.primary[600]}`
    },
    menuContainer: css({
        position: 'relative'
    }),
    menuButton: {
        fontWeight: 900,
        border: `1px solid ${palette.neutral.white}`
    },
    menuNav: css({
        position: 'absolute',
        top: 57,
        right: 20,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: palette.neutral.white,
        width: 'max-content',
        borderRadius: 4,
        padding: 20,
        gap: 20
    }),
    menuListContainer: css({
        maxWidth: '100%',
        position: 'relative',
        borderRadius: 4,
        border: `1px solid ${palette.primary[600]}`
    }),
    componentHeading: {
        position: 'absolute' as const,
        left: 10,
        top: -12,
        width: 60
    },
    menuList: css({
        width: 280,
        padding: 14,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: '1fr',
        gap: 4
    }),
    menuListItem: css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 4,
        padding: '8px 4px',
        borderRadius: 4,
        fontWeight: 500,
        '&:hover': {
            fontWeight: 600,
            backgroundColor: palette.primary[50],
            '& a': {
                outline: 'none',
                color: palette.primary[600]
            }
        }
    }),
    linkText: css({
        textTransform: 'capitalize',
        fontSize: 12,
        display: 'block',
        textAlign: 'center',
        color: palette.neutral.black,
        ' &:focus': {
            outline: 'none',
            fontWeight: 900,
            color: palette.primary[600]
        }
    }),
    icon: css({
        display: 'block',
        width: 16,
        height: 18,
        outline: 'none',
        '&:hover svg': {
            strokeWidth: 2,
            color: palette.primary[600]
        },
        '&:focus svg': {
            padding: 2,
            strokeWidth: 2,
            borderRadius: 4,
            color: palette.neutral.white,
            backgroundColor: palette.primary[600]
        }
    }),
    demoHeading: {
        position: 'absolute' as const,
        left: 10,
        top: -12,
        width: 30
    }
};

export const asideStyle = {
    aside: css({
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 11,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        width: 0,
        backgroundColor: 'unset',
        pointerEvents: 'none',
        overflowY: 'auto',
        transition: 'width 0.5s ease-in-out',
        '& > div': {
            padding: 20,
            opacity: 0,
            transition: 'opacity 0.45s ease-in-out'
        }
    }),
    isVisible: css({
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.8)',
        pointerEvents: 'auto',
        '& > div': {
            opacity: 1
        }
    }),
    closeIconContainer: {
        width: '100%'
    },
    iconButton: {
        '& > svg': {
            strokeWidth: 2,
            color: palette.neutral.white
        }
    },
    listContainer: {
        width: '100%',
        padding: 10
    },
    listButton: {
        flex: 'none',
        height: 40,
        textTransform: 'uppercase' as const,
        fontWeight: 600,
        borderRadius: 4,
        border: `1px dashed ${palette.neutral.white}`,
        color: palette.neutral.white,
        backgroundColor: palette.secondary[600],
        '&:hover': {
            opacity: 0.6
        }
    },
    isSelected: {
        color: palette.primary[600],
        backgroundColor: palette.primary[50]
    }
};
