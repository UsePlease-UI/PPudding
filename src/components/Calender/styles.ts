import { css } from '@emotion/react';
import { palette } from 'styles';

export const MonthlyCalenderStyle = {
    wrapper: css({
        position: 'relative'
    }),
    buttonWrapper: css({
        position: 'relative',
        marginBottom: '20px'
    }),
    addSchedule: css({
        right: 13
    }),
    form: css({
        background: 'white',
        padding: 20
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
