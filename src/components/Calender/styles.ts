import { css } from '@emotion/react';
import { palette } from 'styles';

export const MonthlyCalenderStyle = {
    form: css({
        background: 'white',
        padding: 20,
        width: 300
    }),
    scheduleDetailWrapper: css({
        background: 'white'
    }),
    scheduleDetailTitle: css({
        color: palette.gray[950]
    }),
    scheduleDetailDesc: css({
        color: palette.gray[800]
    }),
    scheduleDetailTerms: css({
        fontSize: 13
    })
};
