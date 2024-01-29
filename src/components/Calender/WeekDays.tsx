import { ReactNode } from 'react';

import { Typography } from 'components/Base';

type weekDaysType = {
    children: ReactNode;
    day?: string;
    date?: number;
};

export default function WeekDays({ children, day, date }: weekDaysType) {
    const isToday = day === String(date);

    return (
        <Typography
            component="span"
            width="100%"
            height="100px"
            color={isToday ? 'tomato' : ''}
            customCSS={{ border: '1px solid black' }}
        >
            {children}
        </Typography>
    );
}
