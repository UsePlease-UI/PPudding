import { css } from '@emotion/react';
import { palette } from 'styles';

export const registerStyle = {
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: palette.neutral.white,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: css({
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }),
    formInnerContainer: {
        width: '100%',
        maxWidth: 425,
        padding: 20
    },
    text: css({
        fontSize: 12,
        fontWeight: 600
    }),
    button: {
        marginTop: 20,
        backgroundColor: 'pink',
        borderColor: 'pink',
        width: '100%',
        color: palette.neutral.black,
        '& > div': {
            gap: 10,
            justifyContent: 'center'
        },
        '&:disabled': {
            color: '#999999',
            borderColor: '#999999',
            backgroundColor: palette.gray[100]
        }
    }
};
