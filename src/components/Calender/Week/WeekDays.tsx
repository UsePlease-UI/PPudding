import { ReactNode } from 'react';

import { Typography } from 'components/Base';
import { WeekDaysStyle } from 'components/Calender/styles';

type weekDaysType = {
    children: ReactNode;
};

export default function WeekDays({ children }: weekDaysType) {
    return (
        <Typography component="span" width="100%" height="100px" customCSS={WeekDaysStyle.title}>
            {children}
        </Typography>
    );
}
