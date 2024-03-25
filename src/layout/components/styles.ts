import { css } from '@emotion/react';
import { palette } from 'styles';

export const gnbStyle = {
    hamburgerButton: {
        position: 'absolute' as const,
        right: 10,
        color: palette.primary[600],
        backgroundColor: palette.primary[50],
        border: `1px dashed ${palette.primary[600]}`
    },
    menuContainer: {
        position: 'absolute' as const,
        top: 24,
        right: 20
    },
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
    shortHeading: {
        position: 'absolute' as const,
        left: 10,
        top: -12,
        width: 120
    },
    longHeading: {
        position: 'absolute' as const,
        left: 10,
        top: -12,
        width: 150
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
        height: '100%',
        pointerEvents: 'auto',
        '& > div': {
            opacity: 1
        }
    }),
    closeIconContainer: {
        position: 'absolute' as const,
        top: 3,
        right: 3
    },
    iconButton: {
        padding: 0,
        '&:focus': {
            backgroundColor: 'transparent',
            '& svg': {
                strokeWidth: 3,
                color: palette.primary[600]
            }
        },
        '& > svg': {
            strokeWidth: 2,
            color: palette.neutral.black
        }
    },
    menuNav: css({
        position: 'absolute',
        top: 20,
        right: 20,
        left: 20,
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        backgroundColor: palette.neutral.white,
        width: 'calc(100% - 40px)',
        height: 'calc(100vh - 40px)',
        overflowY: 'auto',
        borderRadius: 4,
        padding: 30,
        gap: 20,
        '@media (max-width:768px)': {
            maxWidth: 'calc(500px - 40px)',
            padding: 20,
            margin: '0 auto'
        }
    }),
    menuListContainer: css({
        width: '100%',
        position: 'relative',
        borderRadius: 4,
        border: `1px solid ${palette.primary[600]}`
    }),
    heading: {
        position: 'absolute' as const,
        left: 10,
        top: -18,
        width: 'max-content',
        '@media (max-width:768px)': {
            top: -13
        }
    },
    menuList: css({
        width: '100%',
        padding: 20,
        display: 'grid',
        gridTemplateColumns: '1fr',
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
    selected: css({
        fontWeight: 600,
        color: palette.primary[600]
    }),
    linkText: css({
        textTransform: 'capitalize',
        fontSize: 16,
        display: 'block',
        textAlign: 'center',
        color: palette.neutral.black,
        ' &:focus': {
            outline: 'none',
            fontWeight: 900,
            color: palette.primary[900]
        }
    }),
    icon: css({
        display: 'block',
        width: 18,
        height: 20,
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
    })
};
