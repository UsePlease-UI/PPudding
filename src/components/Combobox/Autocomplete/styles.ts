import { css } from '@emotion/react';
import { palette } from 'styles';

export const autoCompleteStyle = {
    flexBoxCustom: css({
        maxWidth: 200,
        height: 40,
        borderRadius: 4,
        border: `1px solid ${palette.gray[100]}`,
        background: palette.neutral.white,
        padding: 10
    }),
    inputStyle: css({
        width: '100%',
        height: '100%',
        border: 0
    }),
    listItemStyle: css({
        width: '100%',
        minWidth: 120,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: 1.5,
        padding: '0 12px',
        '& button': {
            width: '100%',
            height: 40,
            textAlign: 'left',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap'
        },
        '&:hover, &:hover button': {
            fontWeight: 600,
            color: palette.neutral.white,
            backgroundColor: palette.tertiary[400]
        }
    }),
    ulStyle: css({
        maxWidth: 200,
        display: 'block',
        background: 'white',
        borderRadius: 4,
        border: `1px solid ${palette.gray[900]}`,
        boxSizing: 'border-box',
        padding: '10px 0'
    })
};
