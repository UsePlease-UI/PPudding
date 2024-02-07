import { palette } from 'styles';

export const guideStyle = {
    container: {
        width: '100%',
        minHeight: '100vh',
        backgroundColor: palette.neutral.white
    },
    markdown: {
        width: '100%',
        margin: '0 auto',
        '& h1': {
            display: 'inline-block',
            marginBottom: 20,
            fontWeight: 900,
            color: palette.primary[600],
            borderBottom: `5px solid ${palette.primary[600]}`
        },
        '& h2': {
            marginBottom: 10,
            padding: '0 20px',
            fontSize: 24,
            fontWeight: 700,
            lineHeight: '48px',
            color: palette.neutral.white,
            backgroundColor: palette.primary[600]
        },
        '& h3': {
            marginLeft: 20,
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 10
        },
        '& a': {
            display: 'block',
            marginLeft: 20,
            marginBottom: -4,
            fontSize: 12,
            color: palette.primary[600],
            fontWeight: 600,
            textTransform: 'uppercase' as const
        },
        '& ul': {
            margin: '0 20px 20px',
            padding: 20,
            borderRadius: 8,
            boxShadow: `0px 1px 10px 1px ${palette.gray[100]}`
        },
        '& li': {
            marginBottom: 10,
            '&:last-of-type': {
                marginBottom: 0
            }
        },
        '& li::before': {
            content: '"\u2714"',
            marginRight: 10,
            padding: '2px 4px',
            border: `1px solid ${palette.neutral.black}`,
            borderRadius: 4
        }
    }
};
