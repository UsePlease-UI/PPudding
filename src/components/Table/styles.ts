import { css } from '@emotion/react';
import { palette } from 'styles';

export const tableStyle = {
    table: css({
        width: '100%',
        height: '100%',
        display: 'table',
        backgroundColor: palette.neutral.white,
        borderCollapse: 'collapse',
        border: `1px solid ${palette.gray[100]}`
    }),
    tableHead: css({
        display: 'table-header-group',
        verticalAlign: 'middle',
        backgroundColor: palette.gray[50],
        borderBottom: `1px solid ${palette.gray[100]}`,
        '& tr th': {
            padding: '12px'
        },
        '&:hover tr': {
            backgroundColor: 'inherit'
        }
    }),
    tableRow: css({
        display: 'table-row',
        borderBottom: `1px solid ${palette.gray[100]}`,
        '&:hover': {
            backgroundColor: palette.primary[50]
        },
        '&:last-of-type': {
            borderBottom: 0
        }
    }),
    tableCell: css({
        display: 'table-cell',
        height: '100%',
        padding: '8px 10px',
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 400
    }),
    text: css({
        fontWeight: 600
    })
};
